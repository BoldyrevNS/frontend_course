import React from "react"
import { Link } from "react-router-dom";
import "./header.css"

export function Header() {

    return(
        <header className="mt-auto">
            <div className="container">
                <Link className="navbar-brand" to="/"> Alternative </Link>
                <Link className="navbar-item" to="/capabilities"> Фитнес-зоны </Link>
                <Link className="navbar-item" to="/advantages"> Преимущества </Link>
                <Link className="navbar-item" to="/profile"> Личный кабинет </Link>
            </div>
        </header>
    )
}