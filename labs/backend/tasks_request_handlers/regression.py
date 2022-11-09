import logging
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sbn
import json
from aiohttp import web, BodyPartReader

from .handles_template import HandlesTemplate
from utils import get_corr_matrix, get_only_numeric_columns, get_the_most_corr_columns
from images import image_base_path


class HandleRegression(HandlesTemplate):

    def __init__(self):
        super().__init__()
        self.order: int = 1
        self.column_x: str = ''
        self.column_y: str = ''

    async def check_parameters(self, request: web.Request) -> tuple:
        self.order = 1
        if request.rel_url.query.get('order') is None:
            return False, web.Response(status=400, text='Не задана степень полинома')
        self.order: int = int(request.rel_url.query.get('order'))

        self.column_x = ''
        self.column_y = ''
        if request.rel_url.query.get('column_x'):
            self.column_x = request.rel_url.query.get('column_x')
        if request.rel_url.query.get('column_y'):
            self.column_y = request.rel_url.query.get('column_y')
        return True, None

    async def work_with_df(self, request: web.Request, field: BodyPartReader) -> web.Response:
        df: pd.DataFrame = get_only_numeric_columns(self.df)

        if len(df.columns) <= 1:
            return web.Response(status=415, text=f"Недостаточно переменных для регресии")

        if self.column_x != '' and self.column_x not in df.columns:
            return web.Response(status=415, text=f"Столбец '{self.column_x}' не является числовым")

        if self.column_y != '' and self.column_y not in df.columns:
            return web.Response(status=415, text=f"Столбец '{self.column_y}' не является числовым")

        column_name_x: str = ''
        column_name_y: str = ''

        if self.column_x != '' and self.column_y != '':
            column_name_x = self.column_x
            column_name_y = self.column_y
        else:
            corr_matrix = await get_corr_matrix(df)
            headers: list = corr_matrix.columns
            if self.column_x != '':
                column_name_x = self.column_x
                x_index = [_ for _ in headers].index(self.column_x)
                header_max: int = 0
                while header_max == x_index:
                    header_max += 1
                for header in range(len(headers)):
                    if header == x_index:
                        continue
                    if corr_matrix[headers[x_index]][header] > corr_matrix[headers[x_index]][header_max]:
                        header_max = header
                column_name_y = headers[header_max]
                logging.getLogger('aiohttp.server').info(
                    f'The most correlated column for  {self.column_x} is  {headers[header_max]}')
            elif self.column_y != '':
                column_name_y = self.column_y
                y_index = [_ for _ in headers].index(self.column_y)
                header_max: int = 0
                while header_max == y_index:
                    header_max += 1
                for header in range(len(headers)):
                    if header == y_index:
                        continue
                    if corr_matrix[headers[y_index]][header] > corr_matrix[headers[y_index]][header_max]:
                        header_max = header
                column_name_x = headers[header_max]
                logging.getLogger('aiohttp.server').info(
                    f'The most correlated column for  {self.column_y} is  {headers[header_max]}')
            else:
                header_max, i_max = get_the_most_corr_columns(corr_matrix)
                column_name_x = corr_matrix.columns[header_max]
                column_name_y = corr_matrix.columns[i_max]
                logging.getLogger('aiohttp.server').info(
                    f'The most correlated columns: {corr_matrix.columns[header_max]} and {corr_matrix.columns[i_max]}')

        image_name = f"{field.name[:field.name.find('.csv')]}_regression.png"
        fig, ax = plt.subplots(nrows=1, ncols=1, figsize=(10, 10))
        sbn.regplot(x=column_name_x, y=column_name_y, data=df, ax=ax, order=self.order, truncate=True,
                    line_kws={"color": "#8f39eb"}, scatter_kws={'color':'#a766ed'})
        fig.savefig(image_base_path + image_name)
        plt.close(fig)

        response: dict = dict()
        response['image_name'] = image_name
        response['name_x'] = column_name_x
        response['name_y'] = column_name_y
        return web.json_response(text=json.dumps(response))

