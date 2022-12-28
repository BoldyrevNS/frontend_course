import React, { useEffect } from 'react';
import '../css/curs.css';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import CursData from '../models/CursData'
import LectionsData from '../models/LectionsData'
import {getCurs} from '../apis/cursApi';
import {getLections} from '../apis/lectionsApi';
import CursLentaPart from '../components/cursLentaPart';
import { cursSet } from "../apis/cursSetApi";
import { useNavigate, NavigateFunction} from "react-router-dom";
import accContext from "../components/authContext";

const Curs = () =>  {


    const navigate: NavigateFunction = useNavigate();
    const isLogin = React.useContext(accContext);
    const {cursId} = useParams()
    const [cursData, setCursData] = React.useState<CursData>({
        id: 0,code:'',name:'',descr:'', preview_img:'', main_img:'', author:'', date:''});
    const [lectionData, setLectionsData] = React.useState<LectionsData[]>([]);
    const [cursCode, setCursCode] = React.useState<string>('');
    const [flagCurs, setFlagCurs] = React.useState<number>(-1);

    useEffect( () =>{
        getCurs(setCursData, cursId)
    }, [cursId])

    useEffect( () =>{
        getLections(setLectionsData,'', cursId)
    }, [cursId])

    useEffect( () =>{
        if (flagCurs===1){
            const setCurs = async () => {
                const temp = await cursSet(cursCode, 0, isLogin, navigate)
                setFlagCurs(-1)
                navigate("/buff")
            }
            setCurs()
        }
        
    }, [cursCode, isLogin, navigate, flagCurs])
    

    function handleSubmit(event: any) {
        event.preventDefault()
        setCursCode(cursData.code)
        setFlagCurs(1)
    };

return (
    <div className="container">
        <div className="title-all">
            <img className="curs-logo" src={cursData.main_img} alt="curs-main-img"  />
            <div className="title">
                    <h3> {cursData.name} </h3>

            </div>
            <div className='descr'><h5>{cursData.descr}</h5></div>
        </div>
       
        <section className="lenta">
        {lectionData.map(lections => <CursLentaPart {...lections} key={lections.id} />)}

        {isLogin?.auth === true &&
        <div className="leave-button"> <button type="button" onClick={(event) => handleSubmit(event)}  className="btn   btn-outline-danger btn-lg">Покинуть курс</button></div>    
        }
        </section>
    </div>

)
}

export default Curs;