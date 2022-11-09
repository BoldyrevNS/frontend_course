import "../css/matrix.css";

function MatrixComponent(props: any){
    let values: JSX.Element[] = props.values.map((value: number)=><div className='matrix-cell'><div className='text'>{value}</div></div>);
    let columnClass: string="matrix-column mt-1 ";
    let value: number=2;
    if(12/props.size > 2){
        value=Math.floor(12/props.size);
    }
    columnClass=columnClass+`col-sm-${value} col-md-${value} col-lg-${value}`
    return (
        <>
            <div className={columnClass}>
                {values}
            </div>
        </>
    );
}

export default MatrixComponent;