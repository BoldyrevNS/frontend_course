import logging

from distributions.alpha_distribution import AlphaDistribution
from distributions.bernoulli_distribution import BernoulliDistribution
from distributions.beta_distribution import BetaDistribution
from distributions.binomial_distribution import BinomialDistribution
from distributions.chi_squared_distribution import ChiSquaredDistribution
from distributions.distribution_template import DistributionTemplate
from distributions.distributions_service import DistributionsService
from distributions.exponential_distribution import ExponentialDistribution
from distributions.gamma_distribution import GammaDistribution
from distributions.geometric_distribution import GeometricDistribution
from distributions.lognorm_distribution import LognormDistribution
from distributions.negative_binomial_distribution import NegativeBinomialDistribution
from distributions.norm_distribution import NormDistribution
from distributions.poisson_distribution import PoissonDistribution
from distributions.students_distribution import StudentsDistribution
from distributions.uniform_distribution import UniformDistribution

logging.getLogger('distributions').setLevel(level=logging.DEBUG)


def init_distribution(distribution: DistributionTemplate):
    distribution.register(DistributionsService())
    distribution.subscribe()
    return distribution


norm_distribution = init_distribution(NormDistribution())
lognorm_distribution = init_distribution(LognormDistribution())
alpha_distribution = init_distribution(AlphaDistribution())
#bernoulli_distribution = init_distribution(BernoulliDistribution()) # пока не работает
uniform_distribution = init_distribution(UniformDistribution())
#binomial_distribution = init_distribution(BinomialDistribution()) # пока не работает
#poisson_distribution = init_distribution(PoissonDistribution()) # пока не работает
#geometric_distribution = init_distribution(GeometricDistribution()) # пока не работает
#negative_binomial_distribution = init_distribution(NegativeBinomialDistribution()) # пока не работает
exponential_distribution = init_distribution(ExponentialDistribution())
students_distribution = init_distribution(StudentsDistribution())
beta_distribution = init_distribution(BetaDistribution())
gamma_distribution = init_distribution(GammaDistribution())
#chi_squared_distribution = init_distribution(ChiSquaredDistribution()) # работает странно
