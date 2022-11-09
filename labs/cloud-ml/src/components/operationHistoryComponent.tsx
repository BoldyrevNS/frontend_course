import OperationHistory from "../operationHistory";

function OperationHistoryComponent(props: OperationHistory){
    return (
    <tr>
        <th scope="row">{props.id}</th>
        <td>{props.operation_name}</td>
        <td>{props.input_file_name}</td>
        <td>{props.output_file_name}</td>
    </tr>
    )
}

export default OperationHistoryComponent;