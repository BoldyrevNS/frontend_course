import logging
from sqlalchemy.sql import select
import sqlalchemy as sa

from models import engine, Base, task_table, user_table, operation_table, dsn
from tasks_request_handlers import tasks_dict

def fill_tasks():
    logging.getLogger('database').info("Fill table 'task'")
    engine.execute(
        task_table.insert(),
        [{"name": translate, "inner_name": name } for name, translate in tasks_dict.items()]
    )

def create_task_table():
    if not sa.inspect(engine).has_table(task_table.name):
        logging.getLogger('database').info(f"Create table '{task_table.name}'")
        Base.metadata.create_all(bind=engine, tables=[task_table])
        fill_tasks()
    else:
        with engine.connect() as connection:
            s = select(task_table)
            result = connection.execute(s)
            items_number = len([row for row in result])
            if items_number != len(tasks_dict):
                fill_tasks()

def create_user_table():
    if not sa.inspect(engine).has_table(user_table.name):
        logging.getLogger('database').info(f"Create table '{user_table.name}'")
        Base.metadata.create_all(bind=engine, tables=[user_table])


def create_operation_table():
    if not sa.inspect(engine).has_table(operation_table.name):
        logging.getLogger('database').info(f"Create table '{operation_table.name}'")
        Base.metadata.create_all(bind=engine, tables=[operation_table])

def init_db():
    create_task_table()
    create_user_table()
    create_operation_table()
    logging.getLogger('database').info(f"Inited tables {[n for n in Base.metadata.sorted_tables]}")