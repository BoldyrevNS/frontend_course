import './Monster.css';
import Select from 'react-select';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';

type MonsterItem = {
    name: string,
    strenght: number,
    dexterity: number,
    physique: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
    description: string,
    image: string,
    category_id:number,
    level_id: number
}

type Category = {
    name: string
}

type Level ={
    value: string;
}


const Monster = () => {
    const {id} =useParams();
    const [monsterItem, setMonsterItem] = useState<MonsterItem>(
        {
            name: "",
            strenght: 1,
            dexterity: 1,
            physique: 1,
            intelligence: 1,
            wisdom: 1,
            charisma: 1,
            description: "",
            image: "",
            category_id:0,
            level_id: 0
        }
    );
    const [category, setCategory] = useState<string>("");
    const [level, setLevel] = useState<number>(0);

    const getMonster = () => {
        axios.get<MonsterItem>('http://localhost/api/monsters/info/'+id).then(({data})=> {
                axios.get<Category>('http://localhost/api/category/info/'+data.category_id.toString()).then(({data})=> {
                    setCategory(data.name);
                });
                axios.get<Level>('http://localhost/api/level/info/'+data.level_id.toString()).then(({data})=>{
                    setLevel(Number(data.value));
                });
                 setMonsterItem(data);
            });
    }

    React.useEffect(getMonster,[]);
    
    function getParamBonus(num:number):string{
        let bonusString = "";
        let buff = Math.floor(num/2) - 5;
        if (buff>0){
            bonusString += "+";
        }
        bonusString += buff.toString();
        return bonusString;
    }

    return (
        <main className="Main">
        <div className="MainList">
            <div className = "TopPage">
                <div className = "Name">
                    <p style={{fontSize: "20px", margin: "0px"}}>Имя персонажа: </p>
                    <div className = "NameField">
                        <p>{monsterItem?.name}</p>
                    </div>
                </div>
                <div className = "Race">
                    <p style={{fontSize: "20px", margin: "0px"}}>Раса: </p>
                    <div className = "NameField">
                        <p>{category}</p>
                    </div>
                </div>
            </div>
        
            <div className="MainTable">
                <div className = "ParametrTable">
                    <div className = "Bonus">
                        <div className = "Level">
                            {level}
                        </div>
            
                        <div className = "levelName">
                            Уровень<br/> угрозы
                        </div>
                    </div>
            
                    <div className="Parametrs">
                        <div className = "Param">
                            <p style={{fontSize: "20px", margin: "0px"}}><b>Сила</b></p>
                                    <p style={{fontSize:"35px", textAlign: "center", margin: "0px"}}><b>{monsterItem?.strenght}</b></p>
                            <div className="Bonus">
                                <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>{getParamBonus(monsterItem.strenght)}</p>
                            </div>
                        </div>
            
                        <div className = "Param">
                            <p style={{fontSize: "20px", margin: "0px"}}><b>Ловкость</b></p>
                                <p style={{fontSize:"35px", textAlign: "center", margin: "0px"}}><b>{monsterItem.dexterity}</b></p>
                            <div className="Bonus">
                                <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>{getParamBonus(monsterItem.dexterity)}</p>
                            </div>
                        </div>
            
                        <div className = "Param">
                            <p style={{fontSize:"20px", margin: "0px", textAlign: "center", lineHeight: '1'}}><b>Телос<br/>ложение</b></p>
                            <p style={{fontSize:"35px", textAlign: "center", marginTop: "-10px",  marginBottom: "0px"}}><b>{monsterItem.physique}</b></p>
                            <div className="Bonus">
                                <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>{getParamBonus(monsterItem.physique)}</p>
                            </div>
                        </div>
            
                        <div className = "Param">
                            <p style={{fontSize:"19px", margin: "0px"}}><b>Интеллект</b></p>
                            <p style={{fontSize:"35px", textAlign: "center", margin: "0px"}}><b>{monsterItem.intelligence}</b></p>
                            <div className="Bonus">
                                <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>{getParamBonus(monsterItem.intelligence)}</p>
                            </div>
                        </div>
            
                        <div className = "Param">
                            <p style={{fontSize:"20px", margin: "0px"}}><b>Мудрость</b></p>
                            <p style={{fontSize:"35px", textAlign: "center",  margin: "0px"}}><b>{monsterItem.wisdom}</b></p>
                            <div className="Bonus">
                                <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>{getParamBonus(monsterItem.wisdom)}</p>
                            </div>
                        </div>
            
                        <div className = "Param">
                            <p style={{fontSize:"20px", margin: "0px"}}><b>Харизма</b></p>
                            <p style={{fontSize:"35px", textAlign: "center",  margin: "0px"}}><b>{monsterItem.charisma}</b></p>
                            <div className="Bonus">
                            <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>{getParamBonus(monsterItem.charisma)}</p>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className = "CenterLayout">
                    <img  src={monsterItem.image} />
                    <div  style= {{fontSize: "16px"}}>
                        {monsterItem?.description}
                    </div>
                </div>
            </div>
        </div>
    </main>

    )
}

export default Monster;