import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class NormDistribution(DistributionTemplate):
    def __init__(self):
        super(NormDistribution, self).__init__('Нормальное распределение')

    def calculate(self, data: pd.Series) -> None:
        self.distribution = np.linspace(stats.norm.ppf(0.01), stats.norm.ppf(0.99), len(data))
        self.distribution = stats.norm.pdf(self.distribution)*(data.max()-data.min()) + data.min()
        self.__mse__(data)