import logging
from sklearn.cluster import KMeans
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sbn
import json
from aiohttp import web, BodyPartReader

from .handles_template import HandlesTemplate
from utils import get_corr_matrix, get_only_numeric_columns, get_the_most_corr_columns
from images import save_figure_image


class HandleClusterization(HandlesTemplate):

    def __init__(self):
        super().__init__('clusterization')
        self.clusters_num: int = 1
        self.is_draw_clusters_centers: bool = False

    async def check_parameters(self, request: web.Request) -> tuple:
        if request.rel_url.query.get('clusters_num') is None:
            return False, web.Response(status=400, text='Не задано количество кластеров')
        self.clusters_num: int = int(request.rel_url.query.get('clusters_num'))
        self.is_draw_clusters_centers: bool = False
        if request.rel_url.query.get('clusters_centers') is not None:
            self.is_draw_clusters_centers = request.rel_url.query.get('clusters_centers').lower() in ['true']
        return True, None

    async def work_with_df(self, request: web.Request, field: BodyPartReader) -> tuple:
        df: pd.DataFrame = get_only_numeric_columns(self.df)
        if len(df.columns) <= 1:
            return web.Response(status=415, text=f"Недостаточно переменных для кластеризации"), None, None
        clusters = KMeans(n_clusters=self.clusters_num, init='random', n_init=10, max_iter=10)
        clusters.fit_predict(df)
        corr_matrix = await get_corr_matrix(df)
        headers: list = corr_matrix.columns
        header_max, i_max = get_the_most_corr_columns(corr_matrix)
        logging.getLogger('aiohttp.server').info(
            f'The most correlated columns: {headers[header_max]} and {headers[i_max]}')
        df['clusters'] = clusters.labels_

        palette = sbn.color_palette("hls", self.clusters_num)
        fig, ax = plt.subplots(nrows=1, ncols=1, figsize=(10, 10))
        sbn.scatterplot(x=headers[header_max], y=headers[i_max], hue='clusters', ax=ax,
                        palette=palette, data=df, legend="full")

        if self.is_draw_clusters_centers:
            logging.getLogger('aiohttp.server').info(f'Draw clusters centers')
            centers_df = pd.DataFrame()
            for i in range(len(headers)):
                centers_df[headers[i]] = [value[i] for value in clusters.cluster_centers_]
            centers_df['clusters'] = [n for n in range(self.clusters_num)]
            sbn.scatterplot(x=headers[header_max], y=headers[i_max], hue='clusters', ax=ax, marker="X", s=150,
                            palette=palette, data=centers_df, legend=False)

        image_name = f"{field.name[:field.name.find('.csv')]}.png"
        img_inner = save_figure_image(self.base_name, self.user, fig)

        response: dict = dict()
        response['image_name'] = img_inner
        response['clusters_centers'] = clusters.cluster_centers_.tolist()
        response['clusters_labels'] = clusters.labels_.tolist()
        response['columns_names'] = [n for n in headers]
        return web.json_response(text=json.dumps(response)), img_inner, image_name

