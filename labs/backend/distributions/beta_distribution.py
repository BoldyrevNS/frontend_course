import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class BetaDistribution(DistributionTemplate):
    def __init__(self):
        super(BetaDistribution, self).__init__('Бета распределение')

    def calculate(self, data: pd.Series) -> None:
        a, b = 2.31, 0.627
        self.distribution = np.linspace(stats.beta.ppf(0.01, a, b), stats.beta.ppf(0.99, a, b), len(data))
        rv = stats.beta(a, b)
        self.distribution = rv.pdf(self.distribution) * (data.max() - data.min()) + data.min()
        self.__mse__(data)