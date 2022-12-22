import React from "react"
import advantagesList from "./advantagesList";
import Element from "../element/Element";
import './advantages.css'

export function Advantages() {

    const elementComponents: JSX.Element[] = advantagesList.map(op =>
        <Element
            key={op.id}
            id={op.id}
            img_name={op.img_name}
            title={op.title}
            description={op.description}
        />);

    return(
        <div className="advantages-page">
            <div className="title">
                Почему Alternative Fitness?
            </div>
            <main className="container">
                <section className="grid grid-cols-3 gap-6">
                    {elementComponents}
                </section>
            </main>
        </div>
    )
}