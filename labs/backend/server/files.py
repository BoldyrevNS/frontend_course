from aiohttp import web

from images import image_prefix, get_image
from auth import get_user_from_auth, anonymous_user
from utils import csv_prefix, get_csv_file


async def get_file_handler(request: web.Request) -> web.Response:
    filename = request.match_info.get('filename', 'error')
    try:
        user = get_user_from_auth(request)
    except Exception:
        return web.Response(status=401)
    if user is None:
        return web.Response(status=401)
    if filename == 'error':
        return web.Response(status=400, text='Неправильный формат имени файла!')
    if filename[0] == image_prefix:
        return get_image(filename, user)
    elif filename[0] == csv_prefix:
        return get_csv_file(filename, user)
    else:
        return web.Response(status=400, text='Неправильный формат имени файла!')
