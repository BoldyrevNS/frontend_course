import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class ExponentialDistribution(DistributionTemplate):
    def __init__(self):
        super(ExponentialDistribution, self).__init__('Экспоненциальное распределение')

    def calculate(self, data: pd.Series) -> None:
        self.distribution = np.linspace(stats.expon.ppf(0.01), stats.expon.ppf(0.99), len(data))
        self.distribution = stats.expon.pdf(self.distribution) * (data.max() - data.min()) + data.min()
        self.__mse__(data)