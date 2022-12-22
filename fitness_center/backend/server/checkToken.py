import json
from aiohttp import web

from auth import get_user_from_auth


async def check_token(request: web.Request) -> web.Response:
    try:
        user = get_user_from_auth(request)
        response: dict = dict()
        response['login'] = user[1]
    except Exception:
        return web.Response(status=401)
    if user is None:
        return web.Response(status=401)
    return web.json_response(text=json.dumps(response))
