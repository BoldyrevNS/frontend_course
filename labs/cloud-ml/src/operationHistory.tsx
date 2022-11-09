interface OperationHistory {
    id: number;
    operation_name: string;
    input_file_name: string,
    output_file_name: string,
    input_file_id: number,
    output_file_id: number,
}

export default OperationHistory;