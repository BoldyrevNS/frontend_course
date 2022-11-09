import logging
import re
import pandas as pd
from aiohttp import web, BodyPartReader

from utils import get_df_from_io

class HandlesTemplate:

    def __init__(self):
        self.df: pd.DataFrame = None

    async def __call__(self, request: web.Request) -> web.Response:
        if request.headers.get('Content-type').find("multipart") == -1:
            return web.Response(status=400, text='Недопустимый Content-type')

        is_checked, response = await self.check_parameters(request)

        if not is_checked:
            return response

        pattern = r".*\.csv$"
        async for field in (await request.multipart()):
            logging.getLogger('aiohttp.server').info(f'Get file - {field.name}')
            if re.match(pattern, field.name, re.M) is None:
                return web.Response(status=415, text=f"Недопустимый формат файла")
            data: bytearray = await field.read()
            self.df = await get_df_from_io(data, field.name)

            return await self.work_with_df(request, field)

    async def check_parameters(self, request: web.Request) -> tuple:
        return True, None

    async def work_with_df(self, request: web.Request, field: BodyPartReader) -> web.Response:
        return web.Response(status=405)
