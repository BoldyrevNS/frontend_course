import pandas as pd
from aiohttp import web, BodyPartReader
from .handles_template import HandlesTemplate
from utils import csv_base_path


class HandlePreprocessing(HandlesTemplate):

    def __init__(self):
        super().__init__()

    async def work_with_df(self, request: web.Request, field: BodyPartReader) -> web.Response:
        df: pd.DataFrame = self.df

        df = df.dropna(axis=0)
        df = pd.get_dummies(df)
        filename = 'preprocessing_' + field.name
        df.to_csv(csv_base_path + filename, index=False, encoding='utf-8')
        file = open(csv_base_path + filename, encoding='utf-8')
        repsonse = web.Response(body=file.read())
        return repsonse

