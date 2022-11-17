import json
import logging
import jwt
import datetime
from aiohttp import web
from aiohttp import BasicAuth
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
    return result

def __get_user_from_basic_auth__(request: web.Request):
    auth: BasicAuth = BasicAuth.decode(request.headers.get('Authorization'))
    return create_user(auth.login, auth.password)

SECRET = "secret"
algorithm = "HS256"
token_expire_time = datetime.timedelta(minutes=1)
refresh_token_expire_time = datetime.timedelta(days=30)
time_format = "%m/%d/%Y, %H:%M:%S"

def __refresh_token__(auth: dict):
    time = datetime.datetime.now()
    token_time = (time + token_expire_time).strftime(time_format)
    token = jwt.encode({'login': auth['login'], 'time': token_time}, SECRET, algorithm=algorithm)
    return token

def __create__tokens__(login: str) -> tuple:
    time = datetime.datetime.now()
    token_time = (time + token_expire_time).strftime(time_format)
    refresh_token_time = (time + refresh_token_expire_time).strftime(time_format)
    token = jwt.encode({'login': login, 'time': token_time}, SECRET, algorithm=algorithm)
    refresh_token = jwt.encode({'login': login, 'time': refresh_token_time}, SECRET, algorithm=algorithm)
    return token, refresh_token

def get_user_from_auth(request: web.Request):
    jwt_user = request.headers.get('Authorization')
    if check_user(jwt_user) == anonymous_user:
        return anonymous_user
    auth = jwt.decode(jwt_user, SECRET, algorithms=[algorithm])
    user = find_user_by_login(auth['login'])
    if datetime.datetime.strptime(auth['time'], time_format) < datetime.datetime.now():
        raise Exception()
    if len(user) != 1:
        return None
    return user[0][0]

async def get_authentication_handle(request: web.Request) -> web.Response:
    if request.headers.get('Authorization') is None:
        return web.Response(status=400)
    user = __check_user__(__get_user_from_basic_auth__(request))
    if user == None:
        return web.Response(status=400, text='Неверно указан логин или пароль!')
    t, r_t = __create__tokens__(user[1])
    response: dict = dict()
    response['token'] = t
    response['refresh_token'] = r_t
    return web.json_response(text=json.dumps(response))


async def post_registration_handle(request: web.Request) -> web.Response:
    if request.headers.get('Authorization') is None:
        return web.Response(status=400)

    user = __get_user_from_basic_auth__(request)

    if __check_unique_user__(user):
        id = add_user(user)
    else:
        return web.Response(status=409, text='Такой пользователь уже существует!')
    t, r_t = __create__tokens__(user[1])
    response: dict = dict()
    response['token'] = t
    response['refresh_token'] = r_t
    return web.json_response(text=json.dumps(response), status=201)


async def get_refresh_handle(request: web.Request) -> web.Response:
    if request.headers.get('Authorization') is None:
        return web.Response(status=400)

    jwt_user = request.headers.get('Authorization')
    if jwt_user is None or check_user(jwt_user) == anonymous_user:
        return web.Response(status=401)

    logging.getLogger('aiohttp.server').info(f"{jwt_user}")
    auth = jwt.decode(jwt_user, SECRET, algorithms=[algorithm])
    user = find_user_by_login(auth['login'])
    logging.getLogger('aiohttp.server').info(f"{user}")
    if len(user) != 1:
        return web.Response(status=401)
    logging.getLogger('aiohttp.server').info(f"{datetime.datetime.strptime(auth['time'], time_format)}")
    if datetime.datetime.strptime(auth['time'], time_format) < datetime.datetime.now():
        return web.Response(status=401)

    token = __refresh_token__(auth)
    response: dict = dict()
    response['token'] = token
    response['refresh_token'] = request.headers.get('Authorization')
    return web.json_response(text=json.dumps(response), status=200)
