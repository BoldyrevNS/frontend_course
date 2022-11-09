import os
from aiohttp import web
image_base_path = './images/'

async def handleImageGet(request):
    image_name = request.match_info.get('image_name', 'error')
    if not (image_name in os.listdir(image_base_path)):
        return web.Response(status=400)
    return web.FileResponse(image_base_path + image_name)