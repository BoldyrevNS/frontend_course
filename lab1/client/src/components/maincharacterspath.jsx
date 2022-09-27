import Maincharacters from './maincharacters';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import arrowLeft from './img/arrow-left.png';
import arrowRight from './img/arrow-right.png';
import filter from './img/filter.png';
import search from './img/zoom.png';
import './maincharacters.scss';

function MaincharactersPath(){

    const [CharactersList, setCharactersList] = useState([]);
    const [index, setIndex] = useState(0);
    const [getFilter, setGetFilter] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [word, setWord] = useState('');
    const [descriptRace, setDescriptRace] = useState("");
    const [password, setPassword] = useState(false);

    const handleChange = () => {
        setGetFilter(!getFilter)
    }

    useEffect(()=>{
        Axios.get('http://localhost:3001/maincharacters').then((response) => 
        {
            setCharactersList(response.data);
        });
        
    },[]);

    const slideLeft = () => {
        setIndex(index - 1);
        setDescriptRace("");
    };

    const slideRight = () => {
        setIndex(index + 1);
        setDescriptRace("");
    };

    const letsSearch = () =>{
        if (searchTerm === 'Боннибель' || searchTerm === 'Принцесса Жвачка' || searchTerm === 'ПЖ' || searchTerm === 'Бонни')
            setWord('Bonnie');
        if (searchTerm === 'Финн Мёртенс'|| searchTerm === 'Финн')
            setWord('Finn');
        if (searchTerm === 'Бетти Гроф' || searchTerm === 'Бетти')
            setWord('Betty');
        if (searchTerm === 'БиМО')
            setWord('BMO');
        if (searchTerm === 'Джейк')
            setWord('Jake');
        if (searchTerm === 'Леди Ливнерог' || searchTerm === 'Леди')
            setWord('Lady');
        if (searchTerm === 'Ледяной Король')
            setWord('IceKing');
        if (searchTerm === 'Марселин Абадир' || searchTerm === 'Марселин')
            setWord('Marselin');
        if (searchTerm === 'Принцесса Пламя (Фиби)' || searchTerm === 'Фиби'  || searchTerm === 'Принцесса Пламя')
            setWord('Phibie');
        if (searchTerm === 'Принцесса Пупырчатого Королевства' || searchTerm === 'ППК')
            setWord('PPK');
        if (searchTerm === 'Саймон Петриков' || searchTerm === 'Саймон')
            setWord('Saimon');
    }

    useEffect(() => {
        if (word !== ''){
            Axios.get(`http://localhost:3001/${word}`).then((response) => 
    {
        setCharactersList(response.data)
    });
        }
    },[word])

    const raceInfo = () =>{
        let race = CharactersList[index].Race
        let str = "";
        if (race === "Люди"){
            race = "People"
        }
        else if (race === "Роботы МО"){
            race = "MOs"
        }
        else if (race === "Конфетный народ"){
            race = "CandyPeople"
        }
        else if (race === "Собака"){
            race = "Dogs"
        }
        else if (race === "Радугарог"){
            race = "Rainicorns"
        }
        else if (race === "Волшебники"){
            race = "Magic"
        }
        else if (race === "Вампиры"){
            race = "Vampires"
        }
        else if (race === "Пламенный народ"){
            race = "Fire"
        }
        else if (race === "Пупырчатые люди"){
            race = "Lumpy"
        }
        Axios.get(`http://localhost:3001/DeskriptRace=${race}`).then((response) => 
            {
                str = JSON.stringify(response.data);
                race = str.slice(13)
                str = race;
                race = str.slice(1, -3)
                setDescriptRace(race)
            });
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
                    <div className="search">
                        <input placeholder="Введите имя персонажа" onChange={event => {setSearchTerm(event.target.value)}}></input>
                        <button onClick={letsSearch}> <img src={search} alt="search"></img> </button>
                    </div>    
                )
            }
            <div className="App__container__cards maindiv" >
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
                                <Maincharacters
                                    key = {CharactersList.Name}
                                    Image = {CharactersList[index].Image}
                                    Name = {CharactersList[index].Name}
                                    Age = {CharactersList[index].Age}
                                    Race = {CharactersList[index].Race}
                                    Descript = {CharactersList[index].Descript}
                                    FirstEpisode = {CharactersList[index].FirstEpisode}
                                    LastEpisode = {CharactersList[index].LastEpisode}
                                    getRaceInfo = {raceInfo}
                                    race = {descriptRace}
                                    canChange = {password}>
                                </Maincharacters>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MaincharactersPath;