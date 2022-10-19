import { useState, useEffect, ButtonHTMLAttributes, DetailedHTMLProps, LegacyRef, Ref, RefObject } from "react";
import "./card.scss";
import React from "react";
import { IWord } from "../../../interfaces/IWord";

interface cardProps {
  word: string;
  transcription: string;
  translate: string;
  index: number;
  length: number;
  ref?: RefObject<HTMLButtonElement>

  addToCard(): void;
}

const Card = React.forwardRef((
  {word, transcription, translate, index, length, ref, addToCard}: cardProps) => {
  const [learned, setLearned] = useState(false);
  const [initialState, setInitialState] = useState<IWord>({
    word: "server load",
    transcription: "",
    translate: "",
    index: 0,
    length: 0,
  });

  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  const handleChange = () => {
    setPressed(!pressed);
    if (!learned) {
      addToCard();
    }
    setLearned(true);
  };

  if (word === undefined) {
    return (
      <div className={"card"}>
        <div className="card__front">
          <p className="card__front__word">{initialState.word}</p>
          <p className="card__front__transcription">
            {initialState.transcription}
          </p>
          <button
            onClick={handleChange}
            className={
              pressed ? "card__front__translate" : "card__front__button"
            }
          >
            {pressed ? `${initialState.translate}` : "Перевод"}
          </button>
          <p className="card__front__numbers">
            {initialState.index}/{initialState.length}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"card"}>
        <div className="card__front">
          <p className="card__front__word">{word}</p>
          <p className="card__front__transcription">{transcription}</p>
          <button ref={ref}
            onClick={handleChange}
            className={
              pressed ? "card__front__translate" : "card__front__button"
            }
          >
            {pressed ? `${translate}` : "Перевод"}
          </button>
          <p className="card__front__numbers">
            {index}/{length}
          </p>
        </div>
      </div>
    );
  }
});
export default Card;