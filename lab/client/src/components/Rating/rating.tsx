interface IRatingProps{
  name: string,
  count: number
}

export function Rating({name, count}: IRatingProps){
    return(
        <div>
            <p> {name} = {count}</p>
        </div>
    )
}
    
export default Rating