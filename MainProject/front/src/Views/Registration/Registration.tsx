import {Link, useNavigate} from 'react-router-dom'
import internal from 'stream';
import './Registration.css';
import { FormEventHandler, ReactEventHandler, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

type Props = {
    setNickName: (name: string) => void
  }
  
const Login:React.FC<Props> = ({setNickName}) => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function regist(event: any) {
        event.preventDefault();
        axios.post("http://localhost/api/user/registration", {name: userName, email: email, password: password}).then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('name', response.data.name);
            setNickName(response.data.name);
            navigate('/hero');
        }).catch(
            error => alert("Пользователь с такой почтой уже есть")
        )
        
    }

    
    return (
    <div className="login-form">
    <h1>Регистрация</h1>
    <hr/>
    <form className="mt-4" method="post" onSubmit={regist} >
    <div className="mb-4">
        <div><label>Логин</label></div>
        <div><input type="text" required className="w-100" name="name"
                onChange={event => setUserName(event.target.value)}/></div> 
    </div>
    <div className="mb-4">
      <div><label>Email</label></div>
      <div><input type="email" required className="w-100" name="email"
            onChange={event => setEmail(event.target.value)}/></div> 
    </div>
    <div className="mb-4">
      <div><label>Пароль</label></div>
      <div><input type="password" required className="w-100" name="password"
            onChange={event => setPassword(event.target.value)}/></div>
    </div>
    <div className="mb-4">
      <button type="submit" className="btn btn-yellow">Зарегистрироваться</button>
    </div>
  </form>
  </div>
  )

}
export default Login;


/*<main classNameName="Main">
<div classNameName="MainInfo">
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

<div classNameName="MainList">
    <div classNameName = "TopPage">
        <div classNameName = "Name">
            <p style={{font: "20px", margin: "0px"}}>Имя персонажа: </p>
            <input type ="text" classNameName = "NameField" v-model="name" />

        </div>
        <div classNameName = "Race">
            <p style={{font: "20px", margin: "0px"}}>Раса: </p>
            <div classNameName = "NameField">
                Человек
            </div>
        </div>
        <div classNameName="WorldView">
            <p style={{font: "20px", margin: "0px"}}>Мировозрение: </p>
            <select id="selectvalue">
                <option>Законно-добрый</option>
                <option>Нейтрально-добрый</option>
                <option>Хаотично-добрый</option>
                <option>Законно-нейтральный</option>
                <option>Нейтрально</option>
                <option>Хаотично-нейтральный</option>
                <option>Законно-злой</option>
                <option>Нейтрально-злой</option>
                <option>Хаотично-злой</option>
            </select>
        </div>

        <div classNameName = "Name">
            <p style={{font: "20px", margin: "0px"}}>Уровень персонажа: </p>
            <input type ="text" classNameName = "NameField" id ="level" v-model="level.param"/>
        </div>
    </div>

    <div classNameName="MainTable">
        <div classNameName = "ParametrTable">
            <div classNameName = "Bonus">
                <div classNameName = "Count">
                    {HeroSave.getLevelBonus()}
                </div>

                <div classNameName = "Name">
                    Бонус мастерства
                </div>
            </div>

            <div classNameName="Parametrs">

                <div classNameName = "Param" id="strength">
                    <p classNameName ="Name" ><b>Сила</b></p>
                    <textarea v-model="params['strength'].param"></textarea>
                    <div classNameName="Bonus">
                        <p>{ HeroSave.getParamBonus(HeroSave.params['strength'])}</p>
                    </div>
                </div>

                <div classNameName = "Param" id="dexterity">
                    <p classNameName ="Name" ><b>Ловкость</b></p>
                    <textarea v-model="params['dexterity'].param"></textarea>
                    <div classNameName="Bonus">
                        <p>{ HeroSave.getParamBonus(HeroSave.params['dexterity'])}</p>
                    </div>
                </div>

                <div classNameName = "Param" id="physique">
                    <p classNameName ="Name" ><b>Телос<br/>ложение</b></p>
                    <textarea v-model="params['physique'].param"></textarea>
                    <div classNameName="Bonus" style={{marginTop: "-5px"}}>
                        <p>{ HeroSave.getParamBonus(HeroSave.params['physique'])}</p>
                    </div>
                </div>

                <div classNameName = "Param"  id="intelligence">
                    <p classNameName ="Name"><b>Интеллект</b></p>
                    <textarea v-model="params['intelligence'].param"></textarea>
                    <div classNameName="Bonus">
                        <p>{ HeroSave.getParamBonus(HeroSave.params['intelligence'])}</p>
                    </div>
                </div>

                <div classNameName = "Param" id="wisdom">
                    <p classNameName ="Name" ><b>Мудрость</b></p>
                    <textarea v-model="params['wisdom'].param"></textarea>
                    <div classNameName="Bonus">
                        <p>{ HeroSave.getParamBonus(HeroSave.params['wisdom'])}</p>
                    </div>
                </div>

                <div classNameName = "Param" id="charisma" style = {{marginBottom: "0px"}}>
                    <p classNameName ="Name" ><b>Харизма</b></p>
                    <textarea v-model="params['charisma'].param"></textarea>
                    <div classNameName="Bonus">
                        <p>{ HeroSave.getParamBonus(HeroSave.params['charisma'])}</p>
                    </div>
                </div>
            </div>
        </div>

        <div classNameName = "CenterLayout">
            <p style={{font: "20px", margin: "0px"}}><img src="https://regnum.ru/uploads/pictures/news/2015/09/01/1441099985_остров-сокровищ-rejpg_normal.jpg" /></p>
            <div  style= {{ font: "16px" }}>
                <textarea v-model = "description"></textarea>
            </div>
        </div>

        <div classNameName="RightLayout">
            
            <div classNameName="List">
                <p>Классы</p>
                <div>
                    <textarea placeholder="Введите описание класса"></textarea>
                </div>
            </div>

            <div classNameName="List">
                <p>Предметы</p>
                <div classNameName = "Field">
                    <textarea placeholder="Введите описание предметов"></textarea>

                </div>
            </div>

            <div classNameName="List">
                <p>Заклинания</p>
                <div classNameName = "Field">
                    <textarea placeholder="Введите описание заклинаний"></textarea>
                </div>
            </div>

            <div classNameName="m b-5">
                <button type="submit" classNameName="btn btn-green" onClick={checkParams}>Изменить</button>
            </div>

        </div>

    </div>
</div>
</main>*/