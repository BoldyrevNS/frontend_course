import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class PoissonDistribution(DistributionTemplate):
    def __init__(self):
        super(PoissonDistribution, self).__init__('Распределение Пуассона')

    def calculate(self, data: pd.Series) -> None:
        mu = 0.5
        self.distribution = np.linspace(stats.poisson.ppf(0.01, mu), stats.poisson.ppf(0.99, mu), len(data))
        rv = stats.poisson(mu)
        self.distribution = rv.pmf(self.distribution) * (data.max() - data.min()) + data.min()
        self.__mse__(data)