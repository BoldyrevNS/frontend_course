import {UserPorps} from "../types/user";

import {MdLocationPin} from 'react-icons/md';

import {Link} from 'react-router-dom';
import classes from "./User.module.css";
const User =({ 
            login,
            avatar_url,
            location,
            followes,
            following,
}:UserPorps) =>{
    return <div className={classes.user}>
        <img src={avatar_url} alt={login} />
        <h1>{login}</h1>
        {location && (
            <p>
            <MdLocationPin />
            <span>{location}</span>
        </p>
        )}
        <div className={classes.status}>
        <div className={classes.user_followes}>
            <p> EStá sendo seguido por: {followes}</p>
        </div>
        <div className={classes.user_following}>
            <p> EStá seguindo : {following}</p>
        </div>
        </div>
        <Link to={`/repos/${login}`}>Ver mais</Link>
    </div>
};
export default User