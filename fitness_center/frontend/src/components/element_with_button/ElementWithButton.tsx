import {NavigateFunction, useNavigate} from "react-router-dom";
import React from "react";
import Element from "../element/Element";
import "./elementWithButton.css"
import ElementWithInfoData from "../../data/ElementWithInfoData";


function ElementWithButton(props: ElementWithInfoData) {
    const navigate: NavigateFunction = useNavigate();

    function HandleMouseEvent() {
        navigate('/infoPage', {
            state: {
                title: props.title,
                info: props.moreInfo,
                info_image: props.info_image
            }
        });
    }

    return (
        <div className="elementWithButton">
            <Element id={props.id} img_name={props.img_name} title={props.title} description={props.description} info_image={props.info_image}
                     moreInfo={props.moreInfo}></Element>
            <div
                className="pointer-events-auto ml-8 rounded-md bg-black py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-gray-900">
                <button type="button" onClick={() => HandleMouseEvent()} className="button-more-info">Подробнее
                </button>
            </div>
        </div>
    );
}

export default ElementWithButton;