import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class GeometricDistribution(DistributionTemplate):
    def __init__(self):
        super(GeometricDistribution, self).__init__('Геометрическое распределение')

    def calculate(self, data: pd.Series) -> None:
        p = 0.5
        self.distribution = np.linspace(stats.bernoulli.ppf(0.01, p), stats.bernoulli.ppf(0.99, p), len(data))
        rv = stats.geom(p)
        self.distribution = rv.pmf(self.distribution) * (data.max() - data.min()) + data.min()
        self.__mse__(data)