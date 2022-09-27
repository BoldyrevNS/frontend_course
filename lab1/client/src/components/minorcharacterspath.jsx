import Minorcharacters from './minorcharacters';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import filter from './img/filter.png';
import './minorcharacters.scss';

function MinorcharactersPath(){

    const [CharactersList, setCharactersList] = useState([]);
    const [getFilter, setGetFilter] = useState(false);
    const [getSeason, setGetSeason] = useState("0");
    const [password, setPassword] = useState(false);
    const [changeName, setChangeName] = useState(false);

    useEffect(()=>{
        Axios.get('http://localhost:3001/minorcharacters').then((response) => 
        {
            setCharactersList(response.data)
        });
    },[]);

    const handleChange = () => {
        setGetFilter(!getFilter)
    }

    const funcSeason= (value) => {
        setGetSeason(value);
        if (value !== "0"){
            Axios.get(`http://localhost:3001/Season=${value}`).then((response) => 
            {
                setCharactersList(response.data)
            });
        }
        else{
            Axios.get('http://localhost:3001/minorcharacters').then((response) => 
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

    const letsChange = () =>{
        setChangeName(true)
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
                        <select defaultValue="Выберите сезон" value={getSeason} onChange={(event) => funcSeason(event.target.value)}>
                            <option value="0"> Выберите сезон </option>
                            <option value="1" > Сезон 1 </option>
                            <option value="2" > Сезон 2 </option>
                            <option value="3" > Сезон 3 </option>
                            <option value="4" > Сезон 4 </option>
                            <option value="5" > Сезон 5 </option>
                            <option value="6" > Сезон 6 </option>
                            <option value="7" > Сезон 7 </option>
                            <option value="8" > Сезон 8 </option>
                            <option value="9" > Сезон 9 </option>
                            <option value="10" > Сезон 10 </option>
                        </select>
                    </div>
                )
            }
            <div className="App__container__characters">
            {
                CharactersList &&
                CharactersList.map((value) =>
                <Minorcharacters
                key = {value.Name}
                Image = {value.Image}
                Name = {value.Name}
                Season = {value.Season}
                canChange = {password}
                change = {letsChange}
                nameChange = {changeName}> 
                </Minorcharacters>
                )
            }
            </div>
        </div>
    )
}

export default  MinorcharactersPath;