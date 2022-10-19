import Card from './Card/card';
import './cards.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import arrowRight from '../../assets/img/arrow-right.png'
import { CSSTransition } from 'react-transition-group'
import DataContext from '../context';
import Loading from '../Loading/loading'
import meme from '../../assets/img/cover4.jpg'
import Problem from '../Error/error';
import Axios from 'axios'
import { IDefaultContextValue } from '../../interfaces/IDefaultContextValue';
import { IServerData } from '../../interfaces/IServerData';


function Cards() {

    const [index, setIndex] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);
    const [itemsCard, setItemsCard] = useState<number>(0);
    const [itemsCard2, setItemsCard2] = useState<number>(0);
    const [arr, setArr] = useState<Array<number>>([]);
    const context = useContext(DataContext);
    const [count, setCount] = useState(context!.userR);
    const [dataSort, setDataSort] =
      useState<Array<IServerData>>(context!.data.filter(f => !context!.arrWords.includes(f)))


    const slideRight = () => {
        setIndex(index + 1);
        setShow(!show);

        context!.setArrWords(context!.arrWords);
        localStorage.setItem(context!.usersD[context!.userId-1].login, JSON.stringify(context!.arrWords));

        if (arr[index] !== 1) {
            arr[index] = 1;
            setItemsCard2(itemsCard2 + 1);
            setCount(count + 1)
        }
    };


    const addToCard = () => {
        if (arr[index] !== 1) {
            arr[index] = 1;
            setItemsCard(itemsCard + 1);
            setCount(count - 1)
        }
    }

    useEffect(() => {
        Axios.put('http://localhost:3001/ratingUpdate', {rating: count, id: context!.userId}).then(response => { 
        })
        context!.setUserR(count)
    }, [count])

    const ref = useRef();

    if (context!.getError) {
        return (
            <Problem img={meme} header={context!.errorStatus} p={context!.getError} />
        )
    }
    else if (dataSort.length !== 0) {
        return (
            <div className="App">
                <div className="card-container">
                    {index < dataSort.length - 1 && (
                        <button className="rightBtn" onClick={() => slideRight()}>
                            <img src={arrowRight} alt="arrow right"></img>
                        </button>
                    )}
                    {index > -1 && (
                        <CSSTransition in={show} classNames="alert" timeout={300}>
                            <Card
                                key={dataSort[index].id}
                                word={dataSort[index].english}
                                transcription={dataSort[index].transcription}
                                translate={dataSort[index].russian}
                                index={index + 1}
                                length={dataSort.length}
                                addToCard={addToCard}
                                ref={ref}
                            />
                        </CSSTransition>
                    )}
                    <div className="card-container__buttons-container">
                        <button className="card-container__buttons-container__btn1 card-container__buttons-container__buttons">
                            Don't know ({itemsCard})
                        </button>
                        <button className="card-container__buttons-container__btn2 card-container__buttons-container__buttons">
                            Know ({itemsCard2})
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <Loading />
        )
    }
}

export default Cards;