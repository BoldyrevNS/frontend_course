from app import app
from aiohttp import web
from os import environ

if __name__ == '__main__':
    web.run_app(app, port=environ.get('SERVER_PORT'))
