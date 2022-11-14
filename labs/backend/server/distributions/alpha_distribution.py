import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class AlphaDistribution(DistributionTemplate):
    def __init__(self):
        super(AlphaDistribution, self).__init__('Альфа распределение')

    def calculate(self, data: pd.Series) -> None:
        a = 3.57
        self.distribution = np.linspace(stats.alpha.ppf(0.01, a), stats.alpha.ppf(0.99, a), len(data))
        rv = stats.alpha(a)
        self.distribution = rv.pdf(self.distribution) * (data.max() - data.min()) + data.min()
        self.__mse__(data)