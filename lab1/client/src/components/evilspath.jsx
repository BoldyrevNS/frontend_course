import Evils from './evilcharacters';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import filter from './img/filter.png';

function EvilsPath(){

    const [CharactersList, setCharactersList] = useState([]);
    const [getFilter, setGetFilter] = useState(false);
    const [password, setPassword] = useState(false);
    const [changeName, setChangeName] = useState(false);

    useEffect(()=>{
        Axios.get('http://localhost:3001/evils').then((response) => 
        {
            setCharactersList(response.data)
        });
    },[]);

    const handleChange = () => {
        setGetFilter(!getFilter)
    }

    const funcAbilities= (value) => {
        
        if (value !== "0"){
            Axios.get(`http://localhost:3001/Abilities=${value}`).then((response) => 
            {
                setCharactersList(response.data)
            });
        }
        else{
            Axios.get('http://localhost:3001/evils').then((response) => 
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
                        <select defaultValue="Выберите способности" onChange={(event) => funcAbilities(event.target.value)}>
                            <option value="0"> Выберите способности </option>
                            <option value="1" > Интеллектуальные </option>
                            <option value="2" > Магические </option>
                            <option value="3" > Физические </option>
                        </select>
                    </div>
                )
            }
            <div className="App__container__characters">
            {
                CharactersList &&
                CharactersList.map((value) =>
                <Evils
                key = {value.Name}
                Image = {value.Image}
                Name = {value.Name}
                Abilities = {value.Abilities}
                canChange = {password}
                change = {letsChange}
                nameChange = {changeName}>   
                </Evils>
                )
            }
            </div>
        </div>
    )
}

export default  EvilsPath;