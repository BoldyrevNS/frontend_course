import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
from os import environ

dsn = f"postgresql://{environ.get('POSTGRES_USER')}:{environ.get('POSTGRES_PASSWORD')}@{environ.get('DB_HOST')}:{environ.get('DB_PORT')}/{environ.get('POSTGRES_DB')}"

Base = declarative_base()
engine = sa.create_engine(dsn)


class User(Base):
    __tablename__ = "users"
    id = sa.Column(sa.Integer, primary_key=True)
    login = sa.Column(sa.String(255))
    password = sa.Column(sa.String(255))


user_table = User.__table__
