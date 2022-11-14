import logging
import os
from aiohttp import web
import  matplotlib.pyplot as plt

image_dir = "images"
temp_image_dir = "temp_images"

image_base_path = f"{os.environ.get('BASE_PATH')}/{image_dir}/"
temp_image_base_path = f"{os.environ.get('BASE_PATH')}/{temp_image_dir}/"
image_prefix = '0'

from auth import anonymous_user, check_user

def get_image(image_name: str, user: str) -> web.Response:
    if user == anonymous_user:
        if not (image_name in os.listdir(temp_image_base_path)):
            return web.Response(status=400)
        response = web.FileResponse(temp_image_base_path + image_name)
    else:
        if not (image_name in os.listdir(image_base_path)):
            return web.Response(status=400)
        response = web.FileResponse(image_base_path + image_name)
    return response

async def get_image_handle(request) -> web.Response:
    image_name = request.match_info.get('image_name', 'error')
    user = check_user(request.rel_url.query.get('user', anonymous_user))
    logging.getLogger('aiohttp.server').info(f'Response by {user}')
    return get_image(image_name, user)

def save_figure_image(file_name: str, user:str, fig) -> tuple:
    path = temp_image_base_path
    if user != anonymous_user:
        path = image_base_path
    inner_image_name = f"{image_prefix}{file_name}.png"
    fig.savefig(path + inner_image_name)
    plt.close(fig)
    return inner_image_name