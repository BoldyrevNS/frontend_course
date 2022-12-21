type Searchprops = {
    loadUsers :(userName:string) => Promise<void>;
};
import { useState, KeyboardEvent } from "react";

import {BsSearch} from 'react-icons/bs'

import classes from "./Search.module.css"

const Search = ({loadUsers }: Searchprops) => {

    const [userName, setUserName] =useState("");
    const handleKeyDown = (e: KeyboardEvent) =>{
        if(e.key === "Enter"){
            loadUsers(userName);
        }
    }
  return (
    <div className={classes.search}>
        <h1>Search usres</h1>
        <p>Find repo</p>
        <div className={classes.search_container}>
            <input type="text" placeholder ="find name users" onChange={(e)=>setUserName(e.target.value)} onKeyDown ={handleKeyDown}/>
            <button onClick={() => loadUsers(userName)}>
                <BsSearch />
            </button>
        </div>
    </div>
  )
}

export default Search