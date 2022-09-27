import Axios  from 'axios';
import { useState } from 'react';
import pen from './img/pen.png';
function Allcharacters(props) {
    const [nameCharacter, setNameCharacter] = useState(props.Name)
    const [sexCharacter, setSexCharacter] = useState(props.Sex)
    const [raceCharacter, setRaceCharacter] = useState(props.Race)
    const [infoName, setInfoName] = useState("");
    const [infoImage, setInfoImage] = useState("");
    const [flag, setFlag] = useState(false);

    const handleChange = () =>{
        if (!flag){
            setInfoName(props.Name);
            setInfoImage(props.Image);
            setFlag(true);
        }
        else{
            setFlag(false);
            updateCharacterName();
            setInfoName("");
            setInfoImage("");
        }
    }

    const updateCharacterName = () => {
        let promise = new Promise((resolve, reject) => {
        Axios.put('http://localhost:3001/allcharactersUpdate', {Name: nameCharacter, Sex: sexCharacter, Race: raceCharacter, Image: infoImage}).then
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
                setNameCharacter(props.Name);
                setSexCharacter(props.Sex);
                setRaceCharacter(props.Race);
                alert(error);
                }
            );
        };


    let main = 0;
    let minor = 0;
    let ruler = 0;
    let evil =  0;
    let str = props.Category;

    for(let i=0; i < str.length; i++){
        if (str[i] ==="1"){
            main = 1;
        }
        if (str[i] ==="2"){
            minor = 1;
        }
        if (str[i] ==="3"){
            ruler = 1;
        }
        if (str[i] ==="4"){
            evil = 1;
        }
    }
    if (props.canChange){
        if (main === 1 && minor === 0 && ruler === 0 && evil === 0){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text"> 
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={nameCharacter} onChange={event => {setNameCharacter(event.target.value)}}/> : <p className="name"> {nameCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Пол: ${sexCharacter}`} onChange={event => {setSexCharacter(event.target.value)}}/> : <p> Пол: {sexCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Раса: ${raceCharacter}`} onChange={event => {setRaceCharacter(event.target.value)}}/> : <p> Раса: {raceCharacter} </p>} </p>
                    <button className="edit" onMouseMove={props.change} onClick={handleChange}><img src={pen} alt="pen" ></img></button>
                    <p className="main"> Главный герой </p>
                    </div>
                </div>
            )
        }
        if (main === 0 && minor === 1 && ruler === 0 && evil === 0){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={nameCharacter} onChange={event => {setNameCharacter(event.target.value)}}/> : <p className="name"> {nameCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Пол: ${sexCharacter}`} onChange={event => {setSexCharacter(event.target.value)}}/> : <p> Пол: {sexCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Раса: ${raceCharacter}`} onChange={event => {setRaceCharacter(event.target.value)}}/> : <p> Раса: {raceCharacter} </p>} </p>
                    <button className="edit" onMouseMove={props.change} onClick={handleChange}><img src={pen} alt="pen"></img></button>
                    <p className="minor"> Второстепенный персонаж </p>
                    </div>
                </div>
            )
        }
        if (main === 0 && minor === 0 && ruler === 0 && evil === 1){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={nameCharacter} onChange={event => {setNameCharacter(event.target.value)}}/> : <p className="name"> {nameCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Пол: ${sexCharacter}`} onChange={event => {setSexCharacter(event.target.value)}}/> : <p> Пол: {sexCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Раса: ${raceCharacter}`} onChange={event => {setRaceCharacter(event.target.value)}}/> : <p> Раса: {raceCharacter} </p>} </p>
                    <button className="edit" onMouseMove={props.change} onClick={handleChange}><img src={pen} alt="pen"></img></button>
                    <p className="evil"> Злодей </p>
                    </div>
                </div>
            )
        }
        if (main === 0 && minor === 0 && ruler === 1 && evil === 0){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={nameCharacter} onChange={event => {setNameCharacter(event.target.value)}}/> : <p className="name"> {nameCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Пол: ${sexCharacter}`} onChange={event => {setSexCharacter(event.target.value)}}/> : <p> Пол: {sexCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Раса: ${raceCharacter}`} onChange={event => {setRaceCharacter(event.target.value)}}/> : <p> Раса: {raceCharacter} </p>} </p>
                    <button className="edit" onMouseMove={props.change} onClick={handleChange}><img src={pen} alt="pen"></img></button>
                    <p className="ruler"> Королевская власть </p>
                    </div>
                </div>
            )
        }
        if (main === 1 && minor === 0 && ruler === 1 && evil === 0){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={nameCharacter} onChange={event => {setNameCharacter(event.target.value)}}/> : <p className="name"> {nameCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Пол: ${sexCharacter}`} onChange={event => {setSexCharacter(event.target.value)}}/> : <p> Пол: {sexCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Раса: ${raceCharacter}`} onChange={event => {setRaceCharacter(event.target.value)}}/> : <p> Раса: {raceCharacter} </p>} </p>
                    <button className="edit" onMouseMove={props.change} onClick={handleChange}><img src={pen} alt="pen"></img></button>
                    <p className="main"> Главный герой </p>
                    <p className="ruler"> Королевская власть </p>
                    </div>
                </div>
            )
        }
        if (main === 0 && minor === 1 && ruler === 1 && evil === 0){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={nameCharacter} onChange={event => {setNameCharacter(event.target.value)}}/> : <p className="name"> {nameCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Пол: ${sexCharacter}`} onChange={event => {setSexCharacter(event.target.value)}}/> : <p> Пол: {sexCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Раса: ${raceCharacter}`} onChange={event => {setRaceCharacter(event.target.value)}}/> : <p> Раса: {raceCharacter} </p>} </p>
                    <button className="edit" onMouseMove={props.change} onClick={handleChange}><img src={pen} alt="pen"></img></button>
                    <p className="minor"> Второстепенный персонаж </p>
                    <p className="ruler"> Королевская власть </p>
                    </div>
                </div>
            )
        }
        if (main === 0 && minor === 0 && ruler === 1 && evil === 1){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p> {props.nameChange && infoName===props.Name ? <input ctype="text" placeholder={nameCharacter} onChange={event => {setNameCharacter(event.target.value)}}/> : <p className="name"> {nameCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Пол: ${sexCharacter}`} onChange={event => {setSexCharacter(event.target.value)}}/> : <p> Пол: {sexCharacter} </p>} </p>
                    <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Раса: ${raceCharacter}`} onChange={event => {setRaceCharacter(event.target.value)}}/> : <p> Раса: {raceCharacter} </p>} </p>
                    <button className="edit" onMouseMove={props.change} onClick={handleChange}><img src={pen} alt="pen"></img></button>
                    <p className="evil"> Злодей </p>
                    <p className="ruler"> Королевская власть </p>
                    </div>
                </div>
            )
        }
    }
    else{
        if (main === 1 && minor === 0 && ruler === 0 && evil === 0){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p className="name"> {nameCharacter} </p>
                    <p className="main"> Главный герой </p>
                    </div>
                </div>
            )
        }
        if (main === 0 && minor === 1 && ruler === 0 && evil === 0){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p className="name"> {nameCharacter} </p>
                    <p className="minor"> Второстепенный персонаж </p>
                    </div>
                </div>
            )
        }
        if (main === 0 && minor === 0 && ruler === 0 && evil === 1){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p className="name"> {nameCharacter} </p>
                    <p className="evil"> Злодей </p>
                    </div>
                </div>
            )
        }
        if (main === 0 && minor === 0 && ruler === 1 && evil === 0){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p className="name"> {nameCharacter} </p>
                    <p className="ruler"> Королевская власть </p>
                    </div>
                </div>
            )
        }
        if (main === 1 && minor === 0 && ruler === 1 && evil === 0){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p className="name"> {nameCharacter} </p>
                    <p className="main"> Главный герой </p>
                    <p className="ruler"> Королевская власть </p>
                    </div>
                </div>
            )
        }
        if (main === 0 && minor === 1 && ruler === 1 && evil === 0){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p className="name"> {nameCharacter} </p>
                    <p className="minor"> Второстепенный персонаж </p>
                    <p className="ruler"> Королевская власть </p>
                    </div>
                </div>
            )
        }
        if (main === 0 && minor === 0 && ruler === 1 && evil === 1){
            return (
                <div className='character-row'>
                    {/*eslint-disable-next-line*/}
                    <img src={props.Image} alt="Character picture" />
                    <div className="character-row__text">
                    <p className="name"> {nameCharacter} </p>
                    <p className="evil"> Злодей </p>
                    <p className="ruler"> Королевская власть </p>
                    </div>
                </div>
            )
        }
    }

    
}

export default Allcharacters;