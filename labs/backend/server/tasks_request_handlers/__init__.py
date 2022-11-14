from tasks_request_handlers.clusterization import HandleClusterization
from tasks_request_handlers.correlation import HandleCorrelation
from tasks_request_handlers.data_preprocessing import HandlePreprocessing
from tasks_request_handlers.distribution import HandleDistribution
from tasks_request_handlers.regression import HandleRegression

from tasks_request_handlers.handles_template import HandlesTemplate

post_distribution_handler: HandlesTemplate = HandleDistribution()
post_regression_handler: HandlesTemplate = HandleRegression()
post_preprocessing_handler: HandlesTemplate = HandlePreprocessing()
post_clusterization_handler: HandlesTemplate = HandleClusterization()
post_correlation_handler: HandlesTemplate = HandleCorrelation()

tasks_dict = {}
tasks_dict[post_distribution_handler.task_name] = 'Распредление'
tasks_dict[post_regression_handler.task_name] = 'Регрессия'
tasks_dict[post_preprocessing_handler.task_name] = 'Предварительная подготовка данных'
tasks_dict[post_clusterization_handler.task_name] = 'Кластеризация'
tasks_dict[post_correlation_handler.task_name] = 'Корреляция'