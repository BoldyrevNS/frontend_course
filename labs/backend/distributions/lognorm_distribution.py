import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class LognormDistribution(DistributionTemplate):
    def __init__(self):
        super(LognormDistribution, self).__init__('Логнормальное распределение')

    def calculate(self, data: pd.Series) -> None:
        s = 0.954
        self.distribution = np.linspace(stats.lognorm.ppf(0.01, s), stats.lognorm.ppf(0.99, s), len(data))
        rv = stats.lognorm(s)
        self.distribution = rv.pdf(self.distribution) * (data.max() - data.min()) + data.min()
        self.__mse__(data)