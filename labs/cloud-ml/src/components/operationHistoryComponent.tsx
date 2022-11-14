import OperationHistory from "../models/operationHistory";
import {fileBasePath} from "../apis/fileApi";

function OperationHistoryComponent(props: OperationHistory){
    return (
    <tr>
        <th scope="row">{props.id}</th>
        <td>{props.operation_name}</td>
        <td><a className = "history-link" href={`${fileBasePath}/${props.input_file_id}?user=${sessionStorage.getItem('user')}`}>{props.input_file_name}</a></td>
        <td><a className = "history-link" href={`${fileBasePath}/${props.output_file_id}?user=${sessionStorage.getItem('user')}`}>{props.output_file_name}</a></td>
    </tr>
    )
}

export default OperationHistoryComponent;