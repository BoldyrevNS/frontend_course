import Episode from './episode';
import { useEffect, useState } from 'react';
import Axios  from 'axios';
import pen from './img/pen.png';


function Maincharacters(props) {

    const [ageCharacter, setAgeCharacter] = useState(props.Age)
    const [descriptCharacter, setDescriptCharacter] = useState(props.Descript)
    const [flag, setFlag] = useState(false);
    const [firstE, setFirstE] = useState(props.FirstEpisode)
    const [lastE, setLastE] = useState(props.LastEpisode)
    const [episode1, setEpisode1] = useState([]);
    const [episode2, setEpisode2] = useState([]);

    useEffect(() => {
        setAgeCharacter(props.Age);
        setDescriptCharacter(props.Descript)
        setFirstE(props.FirstEpisode)
        setLastE(props.LastEpisode);
        setEpisode1([])
        setEpisode2([])
    },[props.Age, props.Descript, props.FirstEpisode, props.LastEpisode])

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
        Axios.put('http://localhost:3001/maincharactersUpdate', {Age: ageCharacter, Descript: descriptCharacter, FirstEpisode: firstE, LastEpisode: lastE, Name: props.Name}).then
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
                setAgeCharacter(props.Age);
                setDescriptCharacter(props.Descript)
                setFirstE(props.FirstEpisode)
                setLastE(props.LastEpisode);
                alert(error);
                }
            );
        };

    const getEpInfo1 = () => {
        let episode = firstE;
        let counter;
        if (episode === "Весёлые секреты, Часть 2"){
            counter = "1";
        }
        else if (episode === "Время Бизнеса"){
            counter = "2";
        }
        else if (episode  === "Заварушка на пирушке"){
            counter = "3";
        }
        else if (episode === "Заложники любви"){
            counter = "4";
        }
        else if (episode === "Изгнаны!"){
            counter = "5";
        }
        else if (episode === "Адское пламя"){
            counter = "0";
        }
        else if (episode === "Неладно что-то в Пупырчатом Королевстве"){
            counter = "6";
        }
        Axios.get(`http://localhost:3001/Episode=${counter}`).then((response) => 
        {
            setEpisode1(response.data)
        });
    }

    const getEpInfo2 = () => {
        let episode = lastE;
        let counter;
        if (episode === "Пойдём со мной"){
            counter = "7";
        }
        else if (episode === "Три ведра"){
            counter = "8";
        }
        Axios.get(`http://localhost:3001/Episode=${counter}`).then((response) => 
        {
            setEpisode2(response.data)
        });
    }


    if(props.canChange){
        return (
            <div className='character-card'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Character picture" />
                <div className="character-card__text">
                    <button className="edit" onMouseMove={props.change} onClick={handleChange}><img className="edit_img" src={pen}></img></button>
                    <p className="name"> <b> Имя: </b> {props.Name} </p>
                    <p> {flag ? <input type="text" placeholder={`Возраст: ${props.Age}`} onChange={event => {setAgeCharacter(event.target.value)}}/> : <p> <b> Возраст </b>  {ageCharacter} </p>} </p>
                    <a href="#" className="race" onClick={props.getRaceInfo}> <b> Раса: </b> {props.Race} </a>
                    <p> {props.race} </p>
                    <p> {flag ? <textarea className="descript" type="text" placeholder={`Описание: ${props.Descript}`} onChange={event => {setDescriptCharacter(event.target.value)}}/> : <p> <b> Описание </b> {descriptCharacter} </p>} </p>
                    <p> {flag ? <input className="inputEp" type="text" placeholder={`Первое появление: ${firstE}`} onChange={event => {setFirstE(event.target.value)}}/> : <a href="#"  
                    className="first-episode" onClick={getEpInfo1}> <b> Первое появление: </b>  "{firstE}" </a> } </p>
                    <div>
                        {
                            episode1 &&
                            episode1.map((value) =>
                            <Episode
                            key = {value.Name}
                            Image = {value.Image}
                            Name = {value.Name}
                            Season = {value.Season}
                            Episode = {value.Episode}
                            Premiere = {value.Premiere}
                            Descript = {value.Descript}
                            flag = {props.canChange}>
                            </Episode>
                            )
                        }
                    </div>
                    <p> {flag ? <input className="inputEp" type="text" placeholder={`Последнее появление: "${lastE}"`} onChange={event => {setFirstE(event.target.value)}}/> : <a href="#"  
                    className="first-episode" onClick={getEpInfo2}> <b> Последнее появление: </b>  "{lastE}" </a> } </p>
                    <div>
                    {
                        episode2 &&
                        episode2.map((value) =>
                        <Episode
                        key = {value.Name}
                        Image = {value.Image}
                        Name = {value.Name}
                        Season = {value.Season}
                        Episode = {value.Episode}
                        Premiere = {value.Premiere}
                        Descript = {value.Descript}
                        flag = {props.canChange}>
                        </Episode>
                        )
                    }
                </div>
                </div>
            </div>
        )
    }
    else{
        return(
        <div className='character-card'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Character picture" />
                <div className="character-card__text">
                    <p className="name"> <b> Имя: </b> {props.Name} </p>
                    <p> <b> Возраст </b> {props.Age} </p>
                    <a href="#" className="race" onClick={props.getRaceInfo}> <b> Раса: </b> {props.Race} </a>
                    <p> {props.race} </p>
                    <p> <b> Описание </b> {props.Descript} </p>
                    <p> <a href="#"  className="first-episode" onClick={getEpInfo1}> <b> Первое появление: </b> "{props.FirstEpisode}" </a> </p>
                    <div>
                        {
                            episode1 &&
                            episode1.map((value) =>
                            <Episode
                            key = {value.Name}
                            Image = {value.Image}
                            Name = {value.Name}
                            Season = {value.Season}
                            Episode = {value.Episode}
                            Premiere = {value.Premiere}
                            Descript = {value.Descript}
                            flag = {props.canChange}>
                            </Episode>
                            )
                        }
                    </div>
                    <p> <a href="#"  className="last-episode" onClick={getEpInfo2}> <b> Последнее появление: </b> "{props.LastEpisode}" </a> </p>
                    <div>
                    {
                        episode2 &&
                        episode2.map((value) =>
                        <Episode
                        key = {value.Name}
                        Image = {value.Image}
                        Name = {value.Name}
                        Season = {value.Season}
                        Episode = {value.Episode}
                        Premiere = {value.Premiere}
                        Descript = {value.Descript}
                        flag = {props.canChange}>
                        </Episode>
                        )
                    }
                </div>
                </div>
            </div>
        )
    }

}

export default Maincharacters;