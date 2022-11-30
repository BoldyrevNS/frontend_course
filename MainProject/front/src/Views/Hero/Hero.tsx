import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import './Hero.css';
import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type HeroParam ={
    name: string,
    level: number,
    strenght: number,
    dexterity: number,
    physique: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
    description: string,
    image: string
}

const Hero = () => {

    const navigate = useNavigate();
    const checkUser = () => {
        if (localStorage.getItem('token') === null){
            alert("Просматривать героя может только пользователь");
            navigate('/login');
        }
    }

    React.useEffect(checkUser);



    class Params {
        strength: number;
        dexterity: number;
        physique: number;
        intelligence: number;
        wisdom: number;
        charisma: number;

        constructor(strength: number, dexterity: number, physique: number, intelligence: number, wisdom: number, charisma: number){
            this.strength = strength;
            this.dexterity =dexterity;
            this.physique = physique;
            this.intelligence = intelligence;
            this.wisdom =wisdom;
            this.charisma = charisma;
        }
       }

    
       let [name, setName] = useState("");
       let [level, setLevel] = useState(1);
       let [levelBonus, setLevelBonus] = useState(getLevelBonus(level));
       let [params, setParams] = useState(new Params(10,10,10,10,10,10));
       let [paramBonus, setParamBonus] = useState (['0', '0', '0', '0', '0']);
       let [description, setDescription] = useState("");
       let [image, setImage] = useState("https://www.clipartmax.com/png/middle/474-4749661_question-mark-clipart-lime-green-question-mark-clipart-lime-green.png");
    


    let HeroSave:HeroParam = {
        name: name,
        level: level,
        strenght: params.strength,
        dexterity: params.dexterity,
        physique: params.physique,
        intelligence: params.intelligence,
        wisdom: params.wisdom,
        charisma: params.charisma,
        description: description,
        image: image
    };


    const getHero = () => {

        axios.get<HeroParam>("http://localhost/api/hero/get/" + localStorage.getItem("token")).then(({data}) => {
                setName(data.name);
                setLevel(data.level);
                setLevelBonus(getLevelBonus(data.level));
                setParams(new Params(data.strenght,data.dexterity,data.physique,data.intelligence,data.wisdom,data.charisma));
                setParamBonus([getParamBonus(data.strenght), getParamBonus(data.dexterity), getParamBonus(data.physique),
                                 getParamBonus(data.intelligence), getParamBonus(data.wisdom), getParamBonus(data.charisma)]);
                setDescription(data.description);
                setImage(data.image);

                HeroSave ={
                    name: name,
                    level: level,
                    strenght: params.strength,
                    dexterity: params.dexterity,
                    physique: params.physique,
                    intelligence: params.intelligence,
                    wisdom: params.wisdom,
                    charisma: params.charisma,
                    description: description,
                    image: image
                }; 
        }
    )}

    React.useEffect(getHero,[]);

   
    

    function getLevelBonus(level: number):string{
        return (Math.floor((level-1)/4) + 2).toString();
    }

    function getParamBonus(num:number):string{
        let bonusString = "";
        let buff = Math.floor(num/2) - 5;
        if (buff>0){
            bonusString += "+";
        }
        bonusString += buff.toString();
        return bonusString;
    }
    



    function checkParams():void{
        if (isValid()){
            HeroSave ={
                name: name,
                level: level,
                strenght: params.strength,
                dexterity: params.dexterity,
                physique: params.physique,
                intelligence: params.intelligence,
                wisdom: params.wisdom,
                charisma: params.charisma,
                description: description,
                image: image
            };
            axios.post("http://localhost/api/hero/update/" + localStorage.getItem("token"), {Hero: HeroSave, userID: localStorage.getItem("userId")});

            setLevelBonus(getLevelBonus(level));
            setParamBonus([getParamBonus(params['strength']), getParamBonus(params['dexterity']), getParamBonus(params['physique']),
                             getParamBonus(params['intelligence']), getParamBonus(params['wisdom']), getParamBonus(params['charisma'])]);
        }
        else{
            setName(HeroSave.name);
            setLevel(HeroSave.level);
            setParams(new Params(HeroSave.strenght,HeroSave.dexterity,HeroSave.physique,HeroSave.intelligence,HeroSave.wisdom,HeroSave.charisma));
            setDescription(HeroSave.description);
        }
    }

    function isValid():boolean{
        let isValid:boolean = true;
        if(name === ''){
            alert("Окей, если ты не хочешь называть своего персонажа, то я назову его косипошой");
            setName('Косипоша');
        }
        if (!checkLevel(level))
            isValid = false;
    
        for(let character in params){
            let num:number = params[character as keyof Params];
            if(num < 1 || num > 20){
                isValid = false;
                alert("Характеристика установлена неверно. Допускаемые параметры: [1...20]");
                break;
            }
        }

        if (description === ""){
            isValid = false;
            alert("Можно хоть немного описание, позязя?");
        }
        return isValid;
    
    }

    function checkLevel(level:number){
        if (level >= 1 && level <= 20){
            return true;
        }
        else{
            if(isNaN(level))
                alert("И как ты представляешь себе такой уровень? Пиши цифрами"); 
            if(level < 1)
                alert("Я понимаю, что развитие назад это тоже развитие, но уровень не может быть меньше 1"); 
            if(level >20)
                alert("Быть Богом это круто, но к сожалению вы обычный сверхчеловек так что ваш максимальный уровень 20");
            return false;
        }
    }

    
    return (
        <main className="Main">
<div className="MainInfo">
    <h2>Персонажи</h2>
    <p>
        Ага, и так мы добрались до самого весёлого. Хотите почуствовать себя Богом? Ну вообще перебьётесь, но вот персонажа создать можно. Стоит понимать,
        что ваш персонаж - это не ваше отражение(<i>не ну если хотите, то пожалуйста, но это же скушно</i>). Реализуйте все свои отбитые фантазии
        и проявите мастерство креатива. <br/>
        По поводу создания персонажа можно дать несколько советов:
        <ol>
            <li>Ваш персонаж-это новая личность. Так как играть с пелёнок долго и неинтересно то придётся это обдумывать самостоятельно. Потратьте немного времени
                ,чтобы придумать историю из которой будет понятно мотивация персонажа и его будущий путь развития. Это не только упрощает работу, но и делает историю
                куда интереснее и цельней. </li>   
            <li>Это фентези мир. К тому же ненастоящий. Так что не бойтесь экспериментов. Создайте максимально странного перса, от которого у ГМ-а глаза на потолок полезут.
                Орк-пацифист: неплохо. гном-берсеркер: замечательно. огр-учёный: ваще огонь(<i>кста у него 2 головы значит в 2 раза умнее, так что это ещё и логично</i>)</li>
        </ol>
        <b>P.s.</b> И напоследок запомните самое главное: <u><b>НЕ создавайте законно-доброго человека воина</b></u>. Нет ничего шаблоннней подобного персонажа.
        ГМ-ы такого не любят, поэтому такие персонажи обычно съедаются в первой миссии каким нибудь вурдалаком, так что будьте осторожны
    </p>
</div>

<div className="MainList">
    <div className = "TopPage">
        <div className = "Name">
            <p style={{fontSize: "20px", margin: "0px"}}>Имя персонажа: </p>
            <input type ="text" className = "NameField" value = {name}
            onChange={event => setName(event.target.value)}
            />

        </div>
        <div className = "Race">
            <p style={{font: "20px", margin: "0px"}}>Раса: </p>
            <div className = "NameField">
                Человек
            </div>
        </div>
        

        <div className = "Name">
            <p style={{font: "20px", margin: "0px"}}>Уровень персонажа: </p>
            <input type ="text" className = "NameField" id ="level"  value={level}
                onChange={event => setLevel(Number(event.target.value))} />
        </div>
    </div>

    <div className="MainTable">
        <div className = "ParametrTable">
            <div className = "BonusHero">
                <div className = "Count">
                    {levelBonus.toString()}
                </div>

                <div className = "Name">
                    Бонус мастерства
                </div>
            </div>

            <div className="Parametrs">

                <div className = "Param" id="strength">
                    <p className ="NameP" ><b>Сила</b></p>
                    <textarea value={params['strength']}
                        onChange={event => setParams(new Params( Number(event.target.value), params['dexterity'], params['physique'],
                                    params['intelligence'], params['wisdom'], params['charisma']))} 
                    ></textarea>
                    <div className="Bonus">
                        <p>{ paramBonus[0] }</p>
                    </div>
                </div>

                <div className = "Param" id="dexterity">
                    <p className ="NameP" ><b>Ловкость</b></p>
                    <textarea value={params['dexterity']}
                        onChange={event => setParams(new Params( params['strength'] , Number(event.target.value),  params['physique'],
                                    params['intelligence'], params['wisdom'], params['charisma']))} 
                    ></textarea>
                    
                    <div className="Bonus">
                        <p>{ paramBonus[1]}</p>
                    </div>
                </div>

                <div className = "Param" id="physique">
                    <p className ="NameP"  style={{height:"40px"}}><b>Телос<br/>ложение</b></p>
                    <textarea value={params['physique']}
                        onChange={event => setParams(new Params( params['strength'], params['dexterity'], Number(event.target.value),
                                    params['intelligence'], params['wisdom'], params['charisma']))} 
                    ></textarea>
                    <div className="Bonus" style={{marginTop: "-5px"}}>
                        <p>{ paramBonus[2]}</p>
                    </div>
                </div>

                <div className = "Param"  id="intelligence">
                    <p className ="NameP"><b>Интеллект</b></p>
                    <textarea value={params['intelligence']}
                        onChange={event => setParams(new Params( params['strength'], params['dexterity'], params['physique'],
                            Number(event.target.value), params['wisdom'], params['charisma']))} 
                    ></textarea>
                    <div className="Bonus">
                        <p>{ paramBonus[3]}</p>
                    </div>
                </div>

                <div className = "Param" id="wisdom">
                    <p className ="NameP" ><b>Мудрость</b></p>
                    <textarea value={params['wisdom']}
                        onChange={event => setParams(new Params( params['strength'], params['dexterity'], params['physique'],
                                    params['intelligence'], Number(event.target.value), params['charisma']))} 
                    ></textarea>
                    <div className="Bonus">
                        <p>{ paramBonus[4]}</p>
                    </div>
                </div>

                <div className = "Param" id="charisma" style = {{marginBottom: "0px"}}>
                    <p className ="NameP" ><b>Харизма</b></p>
                    <textarea value={params['charisma']}
                        onChange={event => setParams(new Params( params['strength'], params['dexterity'], params['physique'],
                                    params['intelligence'], params['wisdom'], Number(event.target.value)))} 
                    ></textarea>
                    <div className="Bonus">
                        <p>{ paramBonus[5]}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className = "CenterLayout">
            <img src= {image} />
            <div  style= {{ font: "16px" , width: '100%', maxHeight: '6%'}}>
                <textarea style = {{ whiteSpace: 'nowrap'}} value={image} placeholder="Введите новую ссылку на изображение. Если хотите чтобы оно не менялось, то оставьте пустым" onChange = {
                    event => setImage(event.target.value)
                }
                ></textarea>
            </div>

            <div className = "heroDescripton">
                <textarea value={description} onChange = {
                    event => setDescription(event.target.value) }></textarea>
            </div>
        </div>

        <div className="RightLayout">
            
            <div className="List">
                <p>Классы</p>
                <div>
                    <textarea placeholder="Введите описание класса"></textarea>
                </div>
            </div>

            <div className="List">
                <p>Предметы</p>
                <div className = "Field">
                    <textarea placeholder="Введите описание предметов"></textarea>

                </div>
            </div>

            <div className="List">
                <p>Заклинания</p>
                <div className = "Field">
                    <textarea placeholder="Введите описание заклинаний"></textarea>
                </div>
            </div>

            <div className="mb-5">
                <button type="submit" className="btn-green" onClick={checkParams}>Изменить</button>
            </div>

        </div>

    </div>
</div>
</main>)

}
export default Hero;