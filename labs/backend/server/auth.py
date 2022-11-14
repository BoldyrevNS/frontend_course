import json
import logging
from aiohttp import web

from database_api import find_user_by_login, create_user, add_user
from models import User

anonymous_user = 'anonymous'

def check_user(user: str) ->str:
    if user == '':
        return anonymous_user
    return user

def __check_unique_user__(user: User):
    result = find_user_by_login(user.login)
    if len(result) > 0:
        return False
    return True

def __check_user__(user: User):
    result = find_user_by_login(user.login)
    if len(result) != 1:
        return None
    result = result[0]
    if result[2] != user.password:
        return None
    logging.getLogger('aiohttp.server').debug(f"{result}")
    return result[0]

async def get_authentication_handle(request):
    login = request.rel_url.query.get('login', 'error')
    password = request.rel_url.query.get('password', 'error')

    if login == 'error' or password == 'error':
        return web.Response(status=400, text='Не указан логин или пароль')
    user = __check_user__(create_user(login, password))
    if user == None:
        return web.Response(status=400, text='Неверно указан логин или пароль!')
    response: dict = dict()
    response['token'] = user
    return web.json_response(text=json.dumps(response))

async def post_registration_handle(request):
    login = request.rel_url.query.get('login', 'error')
    password = request.rel_url.query.get('password', 'error')

    if login == 'error' or password == 'error':
        return web.Response(status=400, text='Не указан логин или пароль')

    user = create_user(login, password)
    if __check_unique_user__(user):
        id = add_user(user)
    else:
        return web.Response(status=409, text='Такой пользователь уже существует!')
    response: dict = dict()
    response['token'] = id
    return web.json_response(text=json.dumps(response), status=201)
