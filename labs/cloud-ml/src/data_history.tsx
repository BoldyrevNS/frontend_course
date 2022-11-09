import OperationHistory from './operationHistory';

let operationsHistory: OperationHistory[] = [
    {'id':1, 'operation_name': 'Построение регрессии','input_file_name':'input.csv','output_file_name':'output.png','input_file_id': 1, 'output_file_id': 2},
    {'id':2, 'operation_name': 'Подготовка данных','input_file_name':'input.csv','output_file_name':'output.csv','input_file_id': 2, 'output_file_id': 3},
    {'id':3, 'operation_name': 'Распределение данных','input_file_name':'input.csv','output_file_name':'output.png','input_file_id': 4, 'output_file_id': 5}

]

export default operationsHistory;