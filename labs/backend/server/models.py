import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
from os import environ



dsn = f"postgresql://{environ.get('POSTGRES_USER')}:{environ.get('POSTGRES_PASSWORD')}@{environ.get('DB_HOST')}:{environ.get('DB_PORT')}/{environ.get('POSTGRES_DB')}"

engine = sa.create_engine(dsn)
metadata = sa.MetaData()
Base = declarative_base()

class Task(Base):
    __tablename__ = "task"
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String(255))
    inner_name = sa.Column(sa.String(255))

task_table = Task.__table__


class User(Base):
    __tablename__ = "users"
    id = sa.Column(sa.Integer, primary_key=True)
    login = sa.Column(sa.String(255))
    password = sa.Column(sa.String(255))

user_table = User.__table__


class Operation(Base):
    __tablename__ = "operation"
    id = sa.Column(sa.Integer, primary_key=True)
    user_id = sa.Column(sa.Integer, sa.ForeignKey(user_table.c.id))
    task_id = sa.Column(sa.Integer, sa.ForeignKey(task_table.c.id))
    input = sa.Column(sa.String(255))
    input_name = sa.Column(sa.String(255))
    result = sa.Column(sa.String(255))
    result_name = sa.Column(sa.String(255))

operation_table = Operation.__table__