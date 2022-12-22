import React from "react";
import "./element.css"
import ElementWithInfoData from "../../data/ElementWithInfoData";

function Element(props: ElementWithInfoData){
    return (
        <div className="element">
            <div className="image">
                <img src={require(`../../images/${props.img_name}`)} alt="" />
            </div>
            <div className="element-title">{props.title}</div>
            <div className="element-description">
                {props.description}
            </div>
        </div>
    );
}

export default Element;