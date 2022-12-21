import { UserPorps } from "../types/user";

import Search from "../components/Search";

import { useState } from 'react';

import User from "../components/User";

import Error from "../components/Error";

import classes from "../components/Home.module.css";

 const Home = () => {
    const [user, setUser] =useState<UserPorps | null>(null);

    const [error, setError] =useState(false);

    const loadUsers = async (userName: string) =>{

        setError(false);

        setUser(null);

        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        if(res.status === 404){

            setError(true);

            return;
        }
        const {avatar_url,login,location,followes,following} =data;

        const userData :UserPorps ={
            avatar_url,
            login,
            location,
            followes,
            following,
        };
        setUser(userData);
    };
  return (
    <div className={classes.home}>
        <Search  loadUsers ={loadUsers}/>
        {user && <User {...user} />}
        {error && <Error />}
    </div>
  )
}
export default Home;
