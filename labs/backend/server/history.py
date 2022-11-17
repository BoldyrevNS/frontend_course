import logging
import json
from aiohttp import web
from database_api import select_operations_by_user
from auth import get_user_from_auth, anonymous_user

def operation_to_dict(operation:tuple, number: int):
    result: dict = {}
    result['id'] = number
    result['operation_name'] = operation[0]
    result['input_file_id'] = operation[1]
    result['input_file_name'] = operation[2]
    result['output_file_id'] = operation[3]
    result['output_file_name'] = operation[4]
    return result

async def get_history_handler(request: web.Request) -> web.Response:
    try:
        user = get_user_from_auth(request)
    except Exception as e:
        return web.Response(status=401)
    if user == anonymous_user or user is None:
        return web.Response(status=401)

    results = select_operations_by_user(user)
    results.reverse()
    response = []
    for number, r in enumerate(results):
        response.append(operation_to_dict(r, len(results)-number))
    return web.json_response(text=json.dumps(response))