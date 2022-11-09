import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class GammaDistribution(DistributionTemplate):
    def __init__(self):
        super(GammaDistribution, self).__init__('Гамма распределение')

    def calculate(self, data: pd.Series) -> None:
        a = 1.99
        self.distribution = np.linspace(stats.gamma.ppf(0.01, a), stats.gamma.ppf(0.99, a), len(data))
        rv = stats.gamma(a)
        self.distribution = rv.pdf(self.distribution) * (data.max() - data.min()) + data.min()
        self.__mse__(data)