import Allcharacters from './allcharacters';
import Descript from './descript';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import filter from './img/filter.png';
import './allcharacters.scss';

function AllcharactersPath(){

    const [CharactersList, setCharactersList] = useState([]);
    const [getFilter, setGetFilter] = useState(false);
    const [getSex, setGetSex] = useState("1");
    const [getRace, setGetRace] = useState("2");
    const [getDescript, setGetDescript] = useState([]);
    const [password, setPassword] = useState(false);
    const [changeName, setChangeName] = useState(false);

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

    useEffect(()=>{
        Axios.get('http://localhost:3001/allcharacters').then((response) => 
        {
            setCharactersList(response.data)
        });
    },[]);

    const handleChange = () => {
        setGetFilter(!getFilter)
    }

    const funcSex = (value) => {
        setGetSex(value);
        if (value !== "1"){
            Axios.get(`http://localhost:3001/Sex=${value}`).then((response) => 
            {
                setCharactersList(response.data)
            });
        }
    }

    const funcRace = (value) => {
        setGetRace(value);
        if (value !== "2"){
            Axios.get(`http://localhost:3001/Race=${value}`).then((response) => 
            {
                setCharactersList(response.data)
            });
            Axios.get(`http://localhost:3001/DeskriptRace=${value}`).then((response) => 
            {
                setGetDescript(response.data);
                
            });
        }
        else{
            setGetDescript("")
        }
    }

    useEffect(() => {
        if (getSex !== "1" && getRace !== "2"){
            Axios.get(`http://localhost:3001/Sex=${getSex}/Race=${getRace}`).then((response) => 
            {
                setCharactersList(response.data)
            }
            ).catch ( (error) => {
                alert("Таких персонажей не существует!");
                setGetSex("1");
                setGetRace("2");
                Axios.get('http://localhost:3001/allcharacters').then((response) => 
                {
                    setCharactersList(response.data)
                });
                setGetDescript([]);
            });
        }
        else if (getSex === "1" && getRace === "2"){
            Axios.get('http://localhost:3001/allcharacters').then((response) => 
            {
                setCharactersList(response.data)
            });
            setGetDescript([]);     
        }
    }, [getSex, getRace])

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
                        <select defaultValue="Выберите пол" value={getSex} onChange={(event) => funcSex(event.target.value)}>
                            <option value="1"> Выберите пол </option>
                            <option value="Female" > Женский </option>
                            <option value="Male" > Мужской </option>
                            <option value="No" > Бесполый </option>
                        </select>
                        <select defaultValue="Выберите расу" value={getRace} onChange={(event) => funcRace(event.target.value)}>
                            <option value="2"> Выберите расу</option>
                            <option value="Banana" > Бананы </option>
                            <option value="Vampires" > Вампиры </option>
                            <option value="Wolfes"> Волки </option>
                            <option value="Magic" > Волшебники </option>
                            <option value="Demons" > Демоны </option>
                            <option value="BreakfastP" > Завтрачные люди </option>
                            <option value="CandyPeople" > Конфетный народ </option>
                            <option value="SpaceThing" > Космическая сущность </option>
                            <option value="Lemons" > Лимонные люди </option>
                            <option value="People" > Люди </option>
                            <option value="Mars" > Марсианин </option>
                            <option value="None" > Неизвестно </option>
                            <option value="Orgalorg" > Оргалорг </option>
                            <option value="Fire" > Пламенный народ </option>
                            <option value="Lumpy" > Пупырчатые люди </option>
                            <option value="Rainicorns" > Радугарог </option>
                            <option value="MOs" > Роботы МО </option>
                            <option value="Rusalky" > Русалки </option>
                            <option value="Slime" > Слизь </option>
                            <option value="Elephant" > Слон </option>
                            <option value="Dogs" > Собака </option>
                            <option value="Peoplebutnot" > Человекоподобные </option>
                            <option value="Tortle" > Черепаший народ </option>
                            <option value="Wellberry" > Ягодный народ </option>
                        </select>
                    </div>
                )
            }
            <div className="App__container__characters">
            {
                CharactersList &&
                CharactersList.map((value) =>
                <Allcharacters
                key = {value.Name}
                Image = {value.Image}
                Name = {value.Name}
                Sex = {value.Sex}
                Race = {value.Race}
                Category = {value.Category}
                canChange = {password}
                change = {letsChange}
                nameChange = {changeName}>   
                </Allcharacters>
                )
            }
            </div>
            <div>
                {
                    getDescript &&
                    getDescript.map((value) =>
                    <Descript
                    key = {value.Descript}
                    Descript = {value.Descript}>
                    </Descript>
                    )
                }
            </div>
        </div>
    )
}

export default AllcharactersPath;