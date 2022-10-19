import { useState, useEffect, ChangeEvent } from 'react';
import { IServerData } from '../../../interfaces/IServerData';

interface IAddWordFormProps{
    data: IServerData[],
    handlerAddWord(newWord: IServerData): void,
}

export function AddWordForm({data, handlerAddWord}: IAddWordFormProps) {

    const [word, setWord] = useState("Word");
    const [transcript, setTranscription] = useState("Transcription");
    const [translate, setTranslate] = useState("Translate");

    const [validation, setValidation] = useState(true);

    const [classInput, setClassInput] = useState("");

    useEffect(() => {
        if (!validation) {
            setClassInput("input-block");
        }
        else {
            setClassInput("");
        }

    }, [validation])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        if (value.length === 0) {
            setValidation(false);
        }
        else {
            setValidation(true)
        }
        if (name === "word")
            setWord(value)
        else if (name === "transcription")
            setTranscription(value)
        else
            setTranslate(value)

    }

    function checkForm(wVal: string, scripV: string, tVal: string) {
        let flag = 1;
        let wordTest = /^[a-zA-Z\s]+$/;
        let TranscriptionTest = /[^0-9]/;
        let TranslateTest = /^[А-Яа-яЁё\s]+$/;


        if (wordTest.test(wVal))
            flag = flag * 1;
        else {
            flag = 0;
            alert("Поле Word заполнено некорректно! Убедитесь, что вы вводите символы на латинице.")
        }

        if (TranscriptionTest.test(scripV))
            flag = flag * 1;
        else {
            flag = 0;
            alert("Поле Transcription заполнено некорректно! Убедитесь, что вы не вводите цифры.")
        }

        if (TranslateTest.test(tVal))
            flag = flag * 1;
        else {
            flag = 0;
            alert("Поле Translate заполнено некорректно! Убедитесь, что вы вводите символы на кириллице.")
        }
        return flag;
    }

    const checkWords = (len: number) => {
        let flag = 0;
        let i = 0;
        while (i < len && !flag) {
            if (data[i].english === word)
                flag = flag + 1;
            i++;
        }

        i = 0;
        while (i < len && !flag) {
            if (data[i].transcription === transcript)
                flag = flag + 1;
            i++;
        }

        i = 0;
        while (i < len && !flag) {
            if (data[i].russian === translate)
                flag = flag + 1;
            i++;
        }
        return flag === 3;

    }

    const addWord = () => {
        let flag = checkForm(word, transcript, translate)
        if (flag) {
            let len = data.length;
            let id = data[len - 1].id + 1;
            let english = word;
            let transcription = transcript;
            let russian = translate;
            let check = checkWords(len - 1);
            if (check) {
                alert("Такое слово уже существует!")
            }
            else {
                let tags = "";
                const word = { id, english, transcription, russian, tags }
                handlerAddWord(word);
            }
        }
    }

    return (
        <div className='form'>
            <input type="text" placeholder={word} className={`${classInput}`} onChange={handleInputChange} name="word" />
            <input type="text" placeholder={transcript} className={`${classInput}`} onChange={handleInputChange} name="transcription" />
            <input type="text" placeholder={translate} className={`${classInput}`} onChange={handleInputChange} name="translate" />
            <button onClick={addWord}> Add </button>
        </div>
    )
}


export default AddWordForm