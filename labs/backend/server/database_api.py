from sqlalchemy import select, func

from models import engine
from models import user_table, User, operation_table, Operation, task_table
from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)

def create_user(login: str, password: str) -> User:
    user = User()
    user.login = login
    user.password = password
    return user

def create_operation(user_id: int, task_id: int, input: str, input_name: str, result: str, result_name: str) -> Operation:
    operation = Operation()
    operation.user_id = user_id
    operation.task_id = task_id
    operation.input = input
    operation.input_name = input_name
    operation.result = result
    operation.result_name = result_name
    return operation

def select_from_table(query):
    with engine.connect() as connection:
        return connection.execute(query)

def find_user_by_login(login:str):
    result = select_from_table(select(user_table).where(user_table.c.login == login))
    return [_ for _ in result]

def get_operation_number():
    result = select_from_table(select([func.count()]).select_from(operation_table))
    return [_ for _ in result][0][0]

def add_user(user: User):
    s = Session()
    s.bulk_save_objects([user])
    s.commit()
    with engine.connect() as connection:
        res = [n for n in connection.execute(user_table.select())]
        return res[-1][0]

def add_operation(operation: Operation):
    s = Session()
    s.bulk_save_objects([operation])
    s.commit()

def get_task_translate_by_id(task_id: int):
    result = select_from_table(select(task_table.c.name).where(task_table.c.id == task_id))
    return [_ for _ in result][0][0]

def select_operations_by_user(user):
    result = select_from_table(select(task_table.c.name, operation_table.c.input, operation_table.c.input_name,
                                      operation_table.c.result, operation_table.c.result_name)
                               .join_from(operation_table, task_table, operation_table.c.task_id == task_table.c.id)
                               .where(operation_table.c.user_id == user))
    return [_ for _ in result]