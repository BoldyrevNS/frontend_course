import React from "react"
import capabilitiesList from "./capabilitiesList";
import './capabilities.css'
import ElementWithButton from "../element_with_button/ElementWithButton";

export function Capabilities() {

    const elementComponents: JSX.Element[] = capabilitiesList.map(op =>
        <ElementWithButton
            key={op.id}
            id={op.id}
            img_name={op.img_name}
            title={op.title}
            description={op.description}
            moreInfo={op.moreInfo}
            info_image={op.info_image}
        />);

    return(
        <div className="capabilities-page">
            <div className="title">
                Фитнес-зоны
            </div>
            <div className= "description">
                Мы внимательны к мелочам. Заботимся о вашем времени и результате. Помогаем тренироваться с удовольствием.
            </div>
            <section className="grid grid-cols-4 gap-3">
                {elementComponents}
            </section>
        </div>
    )
}