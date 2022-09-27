import Axios from 'axios'
import { useEffect, useState } from 'react';
import pen from './img/pen.png';

function Place(props) {
    const [getRuler, setGetRuler] = useState("");
    const [name, setName] = useState(props.Name);
    const [nameRuler, setNameRuler] = useState(props.Ruler);
    const [type, setType] = useState(props.type);
    const [descriptPlace, setDescriptPlace] = useState(props.Descript);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        setName(props.Name);
        setNameRuler(props.Ruler);
        setType(props.type);
        setDescriptPlace(props.Descript);
        setGetRuler("");
    },[props.Name, props.Ruler, props.type, props.Descript])

    const rulerInfo = () =>{
        let ruler = nameRuler;
        let str = "";
        switch (ruler){
            case "Принцесса Черепаха":
                ruler = 1;
                break;
            case "Великий Мастер Волшебник":
                ruler = 2;
                break;
            case "Граф Лимонохват":
                ruler = 3;
                break;
            case "Боннибель":
                ruler = 4;
                break;
            case "Принцесса Завтрак":
                ruler = 5;
                break;
            case "Ледяной Король":
                ruler = 6;
                break;
            case "Гроб Гоб Глоб Грод":
                ruler = 7;
                break;
            case "Бог Тусовок":
                ruler = 8;
                break;
            case "Принцесса Пламя (Фиби)":
                ruler = 9;
                break;
            case "Принцесса Пупырчатого Королевства":
                ruler = 10;
                break;
            case "Принцесса Слизь":
                ruler = 11;
                break;
            case "Принцесса Хот-Дог":
                ruler = 12;
                break;
            case "Принцесса Ягода":
                ruler = 13;
                break;
            case "Хансон Абадир":
                ruler = 14;
                break;
        
            }
         
        Axios.get(`http://localhost:3001/ImgRuler=${ruler}`).then((response) => 
            {
                str = JSON.stringify(response.data);
                ruler = str.slice(18)
                str = ruler;
                ruler = str.slice(1, -3)
                setGetRuler(ruler)
            });
    }



    const handleChange = () =>{
        if (!flag){
            setFlag(true);
        }
        else{
            setFlag(false);
            updateCharacterName();
        }
    }

    const updateCharacterName = () => {
        let promise = new Promise((resolve, reject) => {
            Axios.put('http://localhost:3001/placeUpdate', {Name: name, Ruler: nameRuler, type: type, Descript: descriptPlace, Image: props.Image}).then
            (response => {
                resolve(response);
            });
            setTimeout(() => {
                reject(new Error("Не удалось внести изменения!"));
              }, 2000)
        });
        promise
        .then(
            result => {
            alert("Информация о месте изменена!")
            },
            error => {
                setName(props.Name);
                setNameRuler(props.Ruler);
                setType(props.type);
                setDescriptPlace(props.Descript);
                alert(error);
            }
        );
    };

    if (props.canChange){
        return (
            <div className='place-card'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Place picture" />
                <div className="character-card__text">
                    <button className="editplacebtn" onMouseMove={props.change} onClick={handleChange}><img className="edit_img" src={pen}></img></button>
                    <p> {flag ? <input type="text" className="input-small" placeholder={`Название: ${name}`} onChange={event => {setName(event.target.value)}}/> : <p className="name"> <b> Название: </b> {name} </p>} </p> 
                    <p> {flag ? <input type="text" className="input-small" placeholder={`Правитель: ${nameRuler}`} onChange={event => {setNameRuler(event.target.value)}}/> : <a href="#" onClick={rulerInfo}> <b> Правитель: </b> {nameRuler} </a>} </p> 
                    <p className={getRuler !== "" ? "show" : "hide"}> <img src={getRuler} alt="Ruler picture"/> </p>
                    <p> {flag ? <input type="text" className="input-small" placeholder={`Тип: ${type}`} onChange={event => {setType(event.target.value)}}/> : <p className="name"> <b> Тип: </b> {type} </p>} </p> 
                    <p> {flag ? <textarea type="text" className="input-big" placeholder={`Описание: ${descriptPlace}`} onChange={event => {setDescriptPlace(event.target.value)}}/> : <p className="name"> <b> Описание: </b> {descriptPlace} </p>} </p> 
                </div>
            </div>
        )
    }
    else{
        return (
            <div className='place-card'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Place picture" />
                <div className="character-card__text">
                    <p className="name"> <b> Название: </b> {props.Name} </p>
                    <a href="#" onClick={rulerInfo} className="name"> <b> Правитель: </b> {props.Ruler} </a>
                    <p className={getRuler !== "" ? "show" : "hide"}> <img src={getRuler} alt="Ruler picture"/> </p>
                    <p className="name"> <b> Тип: </b> {props.type} </p>
                    <p className=".descript-place"> <b> Описание: </b> {props.Descript} </p>
                </div>
            </div>
        )
    }
}

export default Place;