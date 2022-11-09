import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class ChiSquaredDistribution(DistributionTemplate):
    def __init__(self):
        super(ChiSquaredDistribution, self).__init__('Распределение Хи-квадрат')

    def calculate(self, data: pd.Series) -> None:
        df = 55
        self.distribution = np.linspace(stats.chi2.ppf(0.01, df), stats.chi2.ppf(0.99, df), len(data))
        rv = stats.chi2(df)
        self.distribution = rv.pdf(self.distribution) * (data.max() - data.min()) + data.min()
        self.__mse__(data)