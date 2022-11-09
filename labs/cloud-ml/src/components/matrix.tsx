import "../css/matrix.css";
import "../css/result_default.css";
import MatrixComponent from "./matrixComponent";

function Matrix(props: any){
    let values: JSX.Element[] = [];
    for(let i: number=0; i < props.names.length;i++){
        values.push(<MatrixComponent key={i} size={props.names.length} values={props.values.slice(i*props.names.length, (i+1)*props.names.length).map((value:number)=>value.toFixed(3))}/>)
    }
    let matrixClass='matrix-result result-default mt-1';
    if(props.names.length === 0){
        matrixClass+=' matrix-result-height';
    }
    return (
        <div className = {matrixClass}>
            {props.names.length > 0 &&
                <div className="matrix row">
                    {values}
                </div>
            }
            {props.names.length === 0 &&
             <div className="matrix-replacement"> Здесь будет матрица</div>
            }
        </div>
    );
}

export default Matrix;