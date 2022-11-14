import pandas as pd
from aiohttp import web, BodyPartReader
from .handles_template import HandlesTemplate
from utils import save_df_result, get_csv_file



class HandlePreprocessing(HandlesTemplate):

    def __init__(self):
        super().__init__('preprocessing')

    async def work_with_df(self, request: web.Request, field: BodyPartReader) -> tuple:
        df: pd.DataFrame = self.df

        df = df.dropna(axis=0)
        df = pd.get_dummies(df)
        inner = save_df_result(df, field.name, self.user)
        response = get_csv_file(inner, self.user)
        return response, inner, field.name

