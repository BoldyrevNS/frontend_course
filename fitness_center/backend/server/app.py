import logging

from aiohttp import web
import aiohttp_cors
from auth import get_authentication_handle, post_registration_handle, get_refresh_handle
from checkToken import check_token

logging.basicConfig(level=logging.DEBUG)
app = web.Application()


async def handle(request: web.Request):
    return web.Response(text="ff")


app.add_routes([
    web.get('/', handle),
    
    web.get('/authentication', get_authentication_handle),
    web.post('/authentication', post_registration_handle),
    web.get('/refresh', get_refresh_handle),
    web.get('/check-token', check_token)
])

cors = aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
        allow_credentials=True,
        expose_headers="*",
        allow_headers="*"
    )
})

for route in list(app.router.routes()):
    cors.add(route)
