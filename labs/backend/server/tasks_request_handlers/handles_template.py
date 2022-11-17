import logging
import re
import pandas as pd
from aiohttp import web, BodyPartReader
from sqlalchemy.sql import select

from utils import get_df_from_io

from auth import get_user_from_auth, anonymous_user

from models import task_table, Operation
from database_api import select_from_table, create_operation, get_operation_number, add_operation

class HandlesTemplate:

    def __init__(self, task_name: str):
        self.df: pd.DataFrame = None
        self.user: str = anonymous_user
        self.task_name: str = task_name
        self.task_id: str = ''
        self.inner_data_filename: str = ''
        self.data_filename: str = ''
        self.inner_result_filename: str = ''
        self.result_filename: str =''
        self.base_name: str = ''

    async def __call__(self, request: web.Request) -> web.Response:

        if self.task_id == '':
            result = select_from_table(select(task_table.c.id).where(task_table.c.inner_name == self.task_name))
            self.task_id = [_ for _ in result][0][0]
            logging.getLogger('aiohttp.server').info(f"Task id '{self.task_id}'")

        if request.headers.get('Content-type').find("multipart") == -1:
            return web.Response(status=400, text='Недопустимый Content-type')
        try:
            self.user = get_user_from_auth(request)
        except Exception:
            return web.Response(status=401)

        if self.user is None:
            self.user = anonymous_user

        is_checked, response = await self.check_parameters(request)

        if not is_checked:
            return response
        op_number = get_operation_number()
        logging.getLogger('aiohttp.server').info(f"Operations - {op_number}")
        logging.getLogger('aiohttp.server').info(f"Response by '{self.user}'")
        pattern = r".*\.csv$"
        async for field in (await request.multipart()):
            logging.getLogger('aiohttp.server').info(f'Get file - {field.name}')
            if re.match(pattern, field.name, re.M) is None:
                return web.Response(status=415, text=f"Недопустимый формат файла")
            self.data_filename = field.name
            data: bytearray = await field.read()
            self.base_name = f"{self.task_id}{op_number}{self.user}"
            self.df, self.inner_data_filename = await get_df_from_io(data, self.base_name + ".csv", self.user)
            response, self.inner_result_filename, self.result_filename = await self.work_with_df(request, field)
            if self.user != anonymous_user:
                operation = create_operation(self.user, self.task_id, self.inner_data_filename,
                                             self.data_filename, self.inner_result_filename, self.result_filename)
                add_operation(operation)
            return response

    async def check_parameters(self, request: web.Request) -> tuple:
        return True, None

    async def work_with_df(self, request: web.Request, field: BodyPartReader) -> tuple:
        return web.Response(status=405), None, None
