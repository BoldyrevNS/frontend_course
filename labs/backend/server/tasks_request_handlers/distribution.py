import logging
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sbn
import json
from aiohttp import web, BodyPartReader

import distributions
from distributions.distribution_template import DistributionTemplate

from .handles_template import HandlesTemplate
from images import save_figure_image
from utils import get_only_numeric_columns

class HandleDistribution(HandlesTemplate):

    def __init__(self):
        super().__init__('distribution')

    async def work_with_df(self, request: web.Request, field: BodyPartReader) -> tuple:
        df: pd.DataFrame = get_only_numeric_columns(self.df)
        column_name = request.rel_url.query.get('column_name')
        if column_name and column_name != '':
            if column_name not in df.columns:
                return web.Response(status=400, text=f"'{column_name}' не входит в числовые столбцы"), None, None
            df = df[column_name]
        elif len(df.columns) > 1:
            logging.getLogger('aiohttp.server').info(f'Got {df.columns} choose first from them')
            df = df[df.columns[0]]

        best_distribution: DistributionTemplate = await distributions.DistributionsService().calculate_distributions(df)

        to_draw = pd.DataFrame()
        to_draw[df.name] = df

        to_draw[best_distribution.get_name()] = best_distribution.get_distribution()

        fig, ax = plt.subplots(nrows=1, ncols=1, figsize=(10, 10))
        sbn.histplot(to_draw,kde=True, ax=ax)

        image_name = f"{field.name[:field.name.find('.csv')]}.png"
        img_inner = save_figure_image(self.base_name, self.user, fig)

        response: dict = dict()
        response['image_name'] = img_inner
        response['name'] = df.name
        response['distribution_type'] = best_distribution.get_name()

        return web.json_response(text=json.dumps(response)), img_inner, image_name

