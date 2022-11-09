import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class BinomialDistribution(DistributionTemplate):
    def __init__(self):
        super(BinomialDistribution, self).__init__('Биноминальное распределение')

    def calculate(self, data: pd.Series) -> None:
        n = len(data)
        p = 0.5
        self.distribution = np.linspace(stats.binom.ppf(0.01, n, p), stats.binom.ppf(0.99, n, p),len(data))
        rv = stats.binom(n, p)
        #self.distribution = rv.pmf(self.distribution) * (data.max() - data.min()) + data.min()
        self.__mse__(data)