class Singleton(object):
    """
    Базовый класс для создания классов с паттерном Одиночка
    """

    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(Singleton, cls).__new__(cls)
        return cls.instance