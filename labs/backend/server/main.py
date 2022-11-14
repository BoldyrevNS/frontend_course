import logging

from app import app
from aiohttp import web
from os import environ
import os
import shutil

from images import image_dir,  temp_image_dir
from database_init import init_db
from utils import csv_dir, temp_csv_dir

logging.getLogger('main').setLevel(level=logging.DEBUG)

if __name__ == '__main__':
    base_path = environ.get('BASE_PATH') + '/'
    listdir: list = os.listdir(environ.get('BASE_PATH'))
    if image_dir not in listdir:
        os.mkdir(base_path + image_dir)
    if csv_dir not in listdir:
        os.mkdir(base_path + csv_dir)
    if temp_image_dir not in listdir:
        os.mkdir(base_path + temp_image_dir)
    if temp_csv_dir not in listdir:
        os.mkdir(base_path + temp_csv_dir)
    init_db()
    web.run_app(app, port=environ.get('SERVER_PORT'))
    shutil.rmtree(base_path + temp_image_dir, ignore_errors=True)
    shutil.rmtree(base_path + temp_csv_dir, ignore_errors=True)
