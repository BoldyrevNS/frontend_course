import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class UniformDistribution(DistributionTemplate):
    def __init__(self):
        super(UniformDistribution, self).__init__('Равномерное распределение')

    def calculate(self, data: pd.Series) -> None:
        self.distribution = np.linspace(stats.uniform.ppf(0.01) + data.min(),
                                        stats.uniform.ppf(0.99) * (data.max() - data.min()), len(data))

        self.__mse__(data)
