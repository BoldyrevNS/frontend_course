
import {addUserToServer} from "../../../redux/features/servers/ServerSlice";
import {toast, ToastContainer} from "react-toastify";
import {FC, useEffect, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import Server from "../../../types/Server";
import {useAppDispatch, useAppSelector} from "../../../hooks";

interface ServerItemProps{

    props:Server
}

const ServerItem:FC<ServerItemProps>=({props}) => {

    const dispatch = useAppDispatch()
    const isAuth: boolean = useAppSelector(state => Boolean( state.auth.token));
    const {currentServers, serverWithUsers} = useAppSelector(state => state.servers)

    const [isCurrent, setIsCurrent] = useState<number>(props.users)


    useEffect(() => {
        if (currentServers.includes(props.id)){
            setIsCurrent(props.users+1)
        }
        else {
            setIsCurrent(props.users)
        }
    }, []);


    console.log(props.id, props.users,currentServers)

    return <div className={'flex flex-row mb-[5%]'}>

        <img src={`http://localhost:4000/${props?.preview}`} className="discover-img-category" alt={'img'}/>

        <div className={'flex flex-col'}>
            <div className="discover-acc-line items-center">

                <img className="discover-img-acc" alt={'img'} src={`http://localhost:4000/${props?.icon}`}/>
                <div className="discover-acc-name ">{props?.name}</div>


                {isAuth ?
                    currentServers.includes(props.id) ? <button onClick={() => {
                            dispatch(addUserToServer( props.id))
                            toast('Сервер удален')
                            setIsCurrent(props.users)

                        }} className={' w-6 h-6 bg-gray-200 text-xl radius-xl ml-4 rounded-md'}>
                            -
                        </button> :
                        <button onClick={() => {

                            toast('Сервер добавлен')
                            dispatch(addUserToServer(props.id))
                            setIsCurrent(props.users+1)
                        }} className={' w-6 h-6 bg-gray-200 text-xl radius-xl ml-4 rounded-md'}>
                            +
                        </button>
                    : null}


            </div>

            <div className="discover-about">
                {props.description}
            </div>

            <div className="discover-acc-line">
                {/*<div className="discover-info"> {currentServers.includes(props.id)?1:0} Members</div>*/}
                <div className="discover-info"> {isCurrent} Members</div>
                {/*<div className="discover-info"> 907485 Members</div>*/}
            </div>
        </div>

        <ToastContainer/>
    </div>
}

export default ServerItem