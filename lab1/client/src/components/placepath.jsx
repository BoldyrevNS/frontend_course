import Place from './place';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import arrowLeft from './img/arrow-left.png';
import arrowRight from './img/arrow-right.png';
import filter from './img/filter.png';
import './minorcharacters.scss';
import './place.scss';

function PlacePath(){

    const [CharactersList, setCharactersList] = useState([]);
    const [index, setIndex] = useState(0);
    const [getFilter, setGetFilter] = useState(false);
    const [password, setPassword] = useState(false);
    

    const handleChange = () => {
        setGetFilter(!getFilter)
    }

    useEffect(()=>{
        Axios.get('http://localhost:3001/place').then((response) => 
        {
            setCharactersList(response.data);
        });
        
    },[]);

    const slideLeft = () => {
        setIndex(index - 1);
    };

    const slideRight = () => {
        setIndex(index + 1);
    };
  
    

    const funcType = (value) => {
        setIndex(0);
        if (value !== "0"){
            Axios.get(`http://localhost:3001/Type=${value}`).then((response) => 
            {
                setCharactersList(response.data)
            });
        }
        else{
            Axios.get('http://localhost:3001/place').then((response) => 
            {
                setCharactersList(response.data)
            });
        }
    }

    const handleChangebutton = () => {
        let input = prompt("Введите пароль")
        let str;
        Axios.get(`http://localhost:3001/administrator`).then((response) => 
                {
                    str = JSON.stringify(response.data);
                    str = str.slice(13)
                    str = str.slice(1, -3)
                    if (input === str){
                      setPassword(true)
                    }
                    else{
                        let no = alert("Неверный пароль!");
                    }
    
                });
        }
    
    return(
        <div>
            <button className="admin-btn" onClick={handleChangebutton}> Я администратор</button>
            <div className="App__container__filteres">
                <button><img src={filter} alt="Фильтр" onClick={handleChange}></img></button>
            </div>
            {
                getFilter && (
                    <div className="select-container">
                        <select defaultValue="Выберите тип" onChange={(event) => funcType(event.target.value)}>
                            <option value="0"> Выберите тип</option>
                            <option value="1" > Королевства </option>
                            <option value="2" > Другое </option>
                        </select> 
                    </div>
                )
            }
            <div className="App__container__place maindiv" >
                {
                    CharactersList.length > 0 && (
                        <div className="card-container">
                            {index > 0 && (
                            <button className="leftBtn" onClick={() => slideLeft()}>
                                <img src={arrowLeft} alt="arrow left"></img>
                            </button>
                            )}
                            {index < CharactersList.length - 1 && (
                            <button className="rightBtn" onClick={() => slideRight()}>
                                <img src={arrowRight} alt="arrow right"></img>
                            </button>
                            )}
                            {index > -1 && (
                                <Place
                                    key = {CharactersList.Name}
                                    Image = {CharactersList[index].Image}
                                    Name = {CharactersList[index].Name}
                                    Ruler = {CharactersList[index].Ruler}
                                    type = {CharactersList[index].type}
                                    Descript = {CharactersList[index].Descript}
                                    canChange = {password}
                                    >
                                </Place>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PlacePath;