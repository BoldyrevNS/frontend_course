import "../css/table.css";

import OperationHistory from "../models/operationHistory";
import OperationHistoryComponent from "./operationHistoryComponent";
interface Operations{
    data: OperationHistory[]
}
function TableHistory(props: Operations){

    let operationsHistoryComponents: JSX.Element[] = props.data.map(value => 
        <OperationHistoryComponent 
        key={value.id} 
        id={value.id} 
        operation_name={value.operation_name} 
        input_file_name={value.input_file_name} 
        output_file_name={value.output_file_name} 
        input_file_id={value.input_file_id} 
        output_file_id={value.output_file_id}  
    />);

    return (
        <table className="table table-striped mb-3 col-md-8 col-lg-12">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Действие</th>
                    <th scope="col">Исходные данные</th>
                    <th scope="col">Результат</th>
                </tr>
            </thead>
            <tbody>
                {operationsHistoryComponents}
            </tbody>
        </table>
    );
}

export default TableHistory;