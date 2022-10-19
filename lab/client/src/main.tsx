import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataContext from './components/context'
import meme from './assets/img/cover4.jpg'
import Problem from './components/Error/error';
import Loading from './components/Loading/loading'
import Axios from 'axios'
import { IServerData } from './interfaces/IServerData';
import { IUserD } from './interfaces/IUserD';


function Main(){

  const [data, setData] = useState<Array<IServerData>>([]);
  const [loading, setloading] = useState<boolean>(false);
  const [getError, setGetError] = useState<string>("");
  const [errorStatus, setErrorStatus] = useState<number>(-1);
  const [accept, setAccept] = useState<number>(0);
  const [usersD, setUsersD] = useState<Array<IUserD>>([]);
  const [userId, setUserId] = useState<number>(-1);
  const [userR, setUserR] = useState<number>(0);
  const [arrWords, setArrWords] = useState<Array<IServerData>>([]);


  const handlerAddWord = (newWord: IServerData) => {
    let promise = new Promise((resolve, reject) => {
      Axios.put('http://localhost:3001/wordsAdd', {english: newWord.english, transcription: newWord.transcription, russian: newWord.russian}).then
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
          alert("Слово добавлено!")
          const filteredArray = data.filter((word) => word.id !== newWord.id);
          filteredArray.unshift(newWord)
          setData(filteredArray);
        }
      );
  };

  const handlerInputSave = (updatedWord: IServerData) => {
    let promise = new Promise((resolve, reject) => {
      Axios.put('http://localhost:3001/wordsUpdate', {english: updatedWord.english, transcription: updatedWord.transcription, russian: updatedWord.russian, id: updatedWord.id}).then
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
          alert("Слово изменено!")
          const index = data.findIndex((h) => h.id === updatedWord.id);
          let array = data;
          array[index] = updatedWord;
          setData(array);
        }
      );
  };


  const handlerDelete = (id: number) => {
    let promise = new Promise((resolve, reject) => {
      Axios.put('http://localhost:3001/wordsDelete', {id: id}).then
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
          alert("Слово удалено!")
          const array = data.filter((el) => el.id !== id);
          setData(array)
        }
      );
  }


  useEffect(() => {
    setloading(true);
    Axios.get(`http://localhost:3001/words`)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        else {
          setErrorStatus(response.status)
          throw new Error('Something went wrong ...');
        }})
      .then((response) => {
        setData(response)
        setloading(false)})
      .catch(error => {
        setGetError(error.message);
        setloading(false);
      });

  },[])

  useEffect(() => {
    Axios.get(`http://localhost:3001/users`)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        else {
          setErrorStatus(response.status)
          throw new Error('Something went wrong ...');
        }})
      .then((response) => {
        setUsersD(response)
        setloading(false)})
      .catch(error => {
        setGetError(error.message);
        setloading(false);
      });

  }, [userR])



  if (getError.length!==0){
    console.log(getError)
    return(
      <Problem img={meme} header={errorStatus} p={getError}/>
    )
  }

  if (loading){
    return (
      <Loading/>
    )
  }
  else {
    return(
      <React.StrictMode>
        <DataContext.Provider value={{data, handlerAddWord, handlerDelete, handlerInputSave,
          errorStatus, getError, loading, userId, accept, setAccept, usersD, userR, setUserR,
          setUserId, setUsersD, arrWords, setArrWords}}>
          <App />
        </DataContext.Provider>
      </React.StrictMode>)
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

