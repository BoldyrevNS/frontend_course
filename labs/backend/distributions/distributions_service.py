import asyncio
import logging

import pandas as pd

from .distribution_template import DistributionTemplate
from patterns.observer import Observer
from patterns.singleton import Singleton


class DistributionsService(Singleton, Observer):

    def __new__(cls):
        if not hasattr(cls, 'instance'):
            super(DistributionsService, cls).__new__(cls)
            cls.distributions_array: list = []
            cls.best_distribution = None
        return cls.instance

    def update(self, message: DistributionTemplate):
        print(f'Subscribed {message.get_name()}')
        logging.getLogger('distributions').info(f'Subscribed {message.get_name()}')
        self.distributions_array.append(message)

    async def __calculate__(self, index: int, data: pd.Series):
        self.distributions_array[index].calculate(data)

    async def calculate_distributions(self, data: pd.Series):
        logging.getLogger('aiohttp.server').info('Calculate distributions and MSE')
        tasks = [asyncio.create_task(self.__calculate__(index, data)) for index in range(len(self.distributions_array))]
        for t in tasks:
            await t
        best: DistributionTemplate = min(self.distributions_array, key=lambda dist: dist.get_mse())
        for dist in self.distributions_array:
            logging.getLogger('distributions').info(f'Distribution "{dist.get_name()}", MSE: {dist.get_mse()}')
        logging.getLogger('aiohttp.server').info(f'Best distribution: "{best.get_name()}", MSE: {best.get_mse()}')
        return best
