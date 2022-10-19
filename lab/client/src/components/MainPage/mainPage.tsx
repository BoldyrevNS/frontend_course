import './mainpage.scss';
import cat from '../../assets/img/cat.png';
import { useContext, useEffect } from 'react';
import DataContext from '../context';
import Axios from 'axios'
import Rating from '../Rating/rating';

export function MainPage(){

    const context = useContext(DataContext);

    const handleChange = () =>{

      let login = prompt("Введите имя пользователя");
        
            if (login === null){
              context!.setAccept(0)
            }
            else{
              let password: string | null;
        
              let i = 0;
              let count = 0;
              let flag = false;

              for (let key in context!.usersD) {
                  count++
              }

              while (i < count && !flag){
                if (login===context!.usersD[i].login){
                  flag = true;
                }
                i++;
              }
              if(flag){
                password = prompt("Введите пароль");
                i = i-1;
                if (password === context!.usersD[i].password){
                  alert("Добро пожаловать!")
                  context!.setAccept(1);
                  context!.setUserId(context!.usersD[i].id)
                  context!.setUserR(context!.usersD[i].rating)
                  // @ts-ignore
                  let a = JSON.parse(localStorage.getItem(context!.usersD[i].login));
                  if (a !== null){
                    context!.setArrWords(a)
                  }
                  else{
                    context!.setArrWords([])
                  }
                }
                else{
                  alert("Неверный пароль!")
                  context!.setAccept(0);
                }
              }
              else{
                alert("Имя пользователя не найдено, пожалуйста, пройдите процедуру регистрации!")
                password = prompt(`Введите пароль для имени пользователя ${login}`)
                if (password!.length !== 0){
                  let promise = new Promise((resolve, reject) => {
                    Axios.put('http://localhost:3001/usersAdd', {login: login, password: password}).then
                    (response => {
                        resolve(response);
                    });
                    setTimeout(() => {
                      reject(new Error("Ошибка на стороне сервера, попробуйте еще раз!"));
                    }, 2000)
                  });
                  promise
                  .then(
                      result => {
                        alert("Добро пожаловать!")
                        context!.setAccept(1);
                        context!.setUserId(count + 1);
                        context!.setUserR(0);
                           
                      }
                    );
                }
                else{
                  alert("Попробуйте ещё раз!")
                }
              }
            }
    }
    
    if (context!.accept === 1){
        return(
            <div className="main-container">
                <h1>Let's learn English!</h1>
                <div className="main-container__rating">
                    <p> <b>Рейтинг пользователей</b> </p>
                    {
                      context!.usersD.sort(function (a,b) {
                        return b.rating - a.rating
                      }).map((value) => 
                      <Rating
                      key = {value.login}
                      name = {value.login}
                      count = {value.rating}
                      />)
                    }
                </div>
                <div>
                  <p>Нажмите на <b>"All words"</b>, чтобы увидеть все слова</p>
                  <p>Нажмите на <b>"My cards"</b>, чтобы играть и учиться!</p>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="main-container">
                <h1>Let's learn English!</h1>
                <img src={cat} alt={"cat"}></img>
                <button onClick={handleChange}>
                    login in or sing up
                </button>
            </div>
        );
    }
}

export default MainPage;