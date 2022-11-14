import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class NegativeBinomialDistribution(DistributionTemplate):
    def __init__(self):
        super(NegativeBinomialDistribution, self).__init__('Отрицательное биноминальное распределение')

    def calculate(self, data: pd.Series) -> None:
        n = len(data)
        p = 0.5
        self.distribution = np.linspace(stats.nbinom.ppf(0.01, n, p), stats.nbinom.ppf(0.99, n, p), len(data))
        rv = stats.nbinom(n, p)
        self.__mse__(data)