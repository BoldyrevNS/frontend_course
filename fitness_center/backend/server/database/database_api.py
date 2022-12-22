from sqlalchemy import select, func

from database.models import engine
from database.models import user_table, User
from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)


def create_user(login: str, password: str) -> User:
    user = User()
    user.login = login
    user.password = password
    return user


def select_from_table(query):
    with engine.connect() as connection:
        return connection.execute(query)


def find_user_by_login(login: str):
    result = select_from_table(select(user_table).where(user_table.c.login == login))
    return [_ for _ in result]


def add_user(user: User):
    s = Session()
    s.bulk_save_objects([user])
    s.commit()
    with engine.connect() as connection:
        res = [n for n in connection.execute(user_table.select())]
        return res[-1][0]
