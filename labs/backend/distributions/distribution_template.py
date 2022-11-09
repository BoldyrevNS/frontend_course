from abc import ABCMeta, abstractmethod

import pandas as pd
from sklearn.metrics import mean_squared_error

from patterns.observer import Observable


class DistributionTemplate(Observable, metaclass=ABCMeta):
    def __init__(self, name: str):
        super().__init__()
        self.name: str = name
        self.distribution = None
        self.mse = None

    def get_name(self) -> str:
        return self.name

    def get_mse(self):
        return self.mse

    @abstractmethod
    def calculate(self, data: pd.Series) -> None:
        pass

    def get_distribution(self):
        return self.distribution

    def subscribe(self):
        self.notify_observers(self)

    def __mse__(self, data: pd.Series):
        self.mse = self.mse = mean_squared_error(self.distribution, data)