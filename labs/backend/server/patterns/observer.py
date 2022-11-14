from abc import ABCMeta, abstractmethod


class Observer(metaclass=ABCMeta):
    """
    Базовый класс для создания классов с паттерном Наблюдатель.

    Является наблюдателем.
    """
    @abstractmethod
    def update(self, message) -> None:
        pass


class Observable(metaclass=ABCMeta):
    """
    Базовый класс для создания классов с паттерном Наблюдатель.

    Является наблюдаемым.
    """
    def __init__(self) -> None:
        self.observers = []

    def register(self, observer: Observer) -> None:
        self.observers.append(observer)

    def notify_observers(self, message) -> None:
        for observer in self.observers:
            observer.update(message)
