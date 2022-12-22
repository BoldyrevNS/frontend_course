import logging
import sqlalchemy as sa

from database.models import engine, Base, user_table, dsn


def create_user_table():
    if not sa.inspect(engine).has_table(user_table.name):
        logging.getLogger('database').info(f"Create table '{user_table.name}'")
        Base.metadata.create_all(bind=engine, tables=[user_table])


def init_db():
    create_user_table()
    logging.getLogger('database').info(f"Inited tables {[n for n in Base.metadata.sorted_tables]}")