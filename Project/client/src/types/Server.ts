
export default interface Server {
    id:number;
    name?: string;
    description?: string;
    countOfOnline?: number;
    preview?: string;
    icon?:string
    users: number,
    currentUser:boolean
}