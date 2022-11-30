import './Bestiary.css';
import axios from 'axios';
import React from 'react';
import {Link, useNavigate, useSearchParams, useLocation} from 'react-router-dom';
import Select from 'react-select';
import { useState } from 'react';
import {ProductView} from './Product';

type Category = {
    id: number,
    name: string
  }

type SelectItem = {
    value: string,
    label: string
}

type MonsterItem = {
    id:number,
    name: string,
    image: string,
    category_id: number,
    level_id: number
}

type Level = {
    id:number,
    value:number
}


const Bestiary = () => {

    const [monsterItems, setMonsterItems] = useState<MonsterItem[]>([]);
    const [optionsCategory, setCategory] = useState<SelectItem[]>([])
    const [optionsLevel, setLevels] = useState<SelectItem[]>([]);

    const getCategory = () => {
        axios.get<Category[]>('http://localhost/api/category/list').then(({data})=> {
            const category:SelectItem[] = []
            for (let item of data){
                category.push({value: item.id.toString(), label: item.name});
            }
            setCategory(category);
          })
      }

      const getLevel = () => {
        axios.get<Level[]>('http://localhost/api/level/list').then(({data})=> {
            const levels:SelectItem[] = []
            for (let item of data){
                levels.push({value: item.id.toString(), label: item.value.toString()});
            }
            setLevels(levels);
          })
      }
    
    const getMonsters = () => {
        axios.get<MonsterItem []>('http://localhost/api/monsters/list').then(({data})=> {
            setMonsterItems(data);
        })
    }
    

    React.useEffect(getCategory,[]);
    React.useEffect(getMonsters,[]);
    React.useEffect(getLevel,[]);


    const navigate = useNavigate();
    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();

    const [searchName, setSearcName] = useState(searchParams.get('name')|| '');
    const [selectedCategory,setSelectedCategory] = useState(searchParams.getAll('categorys'||[]));
    const [selectedLevel,setSelectedLevel] = useState(searchParams.getAll('level'||[]));


    const getSearch = (e:any) => {
        const searchParam = {
            name: searchName,
            categorys: selectedCategory,
            levels: selectedLevel
        }
        setSearchParams(searchParam);
    }


    return (
        <main className="Main">
            <div className="MainInfo">
                <h2>Бестиарий</h2>
                <p>
                    Примечание: прежде чем продолжать, убедитесь что ваш персонаж умеет читать. Не портите себе отыгрыш игровыми условностями).
                    <b>Помните, чтобы отыграть дебила надо самому стать дебилом.</b><br/>

                    Если вы начинающий искатель приключений, если вы отважный храбрец что ищет себе новые вызовы, если вы бомж, который не может себе купить всё что вам надо, то эта книга специально для вас.
                    Познайте окружающий мир, узнайте об интересных существах и о том, как их убить.

                    Бестиарий представляет собой очень богатый выбор. От обычных волчков и кабанчиков до буквально богов АДА. И пусть Бестиарий это книга для всех,
                    но стоит понимать, что ваши герои врядли найдут книгу в которой описаны слабые места местного Сатаны. Так что для лучшего отыгрыша следуйте этим рекомендациям.

                    <ol>
                        <li>Перед тем, как посмотреть какое то существо, подумайте о том, а может ли ваш персонаж знать что то о нём. Является ли он мега-професиональным охотником
                            книжным червём или просто достаточно наблюдательным. Возможно надо кинуть на характеристику, а то мало ли ответственный момент, а вы вдруг бац и всё забыли
                            Добавляет новых красок в ваше приключение (в основном коричневых конечно)
                        </li>
                        <li>
                            Постарайтесь не открывать Бестиарий во время боя. Согласитесь было бы страноо если бы во время боя с тиранозваром ваш герой достал и начал читать книгу о динозаврах.
                        </li>
                    </ol>
                    <b>P.s.</b> И напоследок запомните самое главное: Если вы можете победить существо 5 уровня это не значит, что вы сможете победить 5 существ 1 уровня. 
                </p>
            </div>

            <div className="MainList">
                <div className = "TopPage">
                    <div className="category" style = {{width: '300px'}}>
                        <p style={{fontSize: "20px", margin: "0px"}}>Категория: </p>
                        <Select
                            options={optionsCategory} 
                            value = {optionsCategory.filter(item=> selectedCategory.includes(item.value)===true)}
                            isMulti
                            placeholder = "Выбрать категорию"
                            onChange={
                                event =>{
                                    const valueArr= event.map(item => item.value);
                                    setSelectedCategory(valueArr);
                                    setSearchParams({name: searchName, categorys: valueArr, levels: selectedLevel});
                                }
                            }
                        />
                    </div>
                    <div className="category" style = {{width: '300px'}}>
                        <p style={{fontSize: "20px", margin: "0px"}}>Уровень(угрозы): </p>
                        <Select
                            options={optionsLevel} 
                            value = {optionsLevel.filter(item=> selectedLevel.includes(item.value)===true)}
                            isMulti
                            placeholder = "Выбрать уровень"
                            onChange={
                                event =>{
                                    const valueArr= event.map(item => item.value);
                                    setSelectedLevel(valueArr);
                                    setSearchParams({name: searchName, categorys: selectedCategory, levels: valueArr});
                                }
                            }
                        />
                    </div>
                    <input type="search" className="search" value= {searchName} onChange={
                        event => {
                            event.preventDefault();
                            setSearcName(event.target.value);
                            const name = event.target.value;
                            if (name!==""){
                                setSearchParams({name: event.target.value, categorys: selectedCategory, levels: selectedLevel});
                            }
                            else{
                                setSearchParams({categorys: selectedCategory, levels: selectedLevel});
                            }
                            
                        }
                    } />
                </div>

                <section className="products-list">
                    {monsterItems.filter(
                        item => {
                            const name = searchParams.get('name')|| '';
                            const categorys = searchParams.getAll('categorys')||[];
                            const levels = searchParams.getAll('levels')||[];
                            if (!item.name.includes(name!!)){
                                return false;
                            }
                            if (categorys.length !== 0 && !(categorys.includes(item.category_id.toString()))){
                                return false;
                            }
                            if (levels.length !== 0 && !(levels.includes(item.level_id.toString()))){
                                return false;
                            }
                            return true;
                            
                        }
                    ).map(item =>
                        <Link to={'/monster/' + item.id.toString()}><ProductView img = {item.image} name = {item.name}/> </Link>
                    )}

                </section>

            </div>
        </main>

    )
}

export default Bestiary;

