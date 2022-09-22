import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'

const userA = "admin"
const passwordA = "admin"

export default function Login(params : {
}){

    const navigate = useNavigate();
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    function login() {
        if (userA === user && passwordA === password){
            console.log("Login exitoso")
            navigate("../home")
        } else
            console.log("Login fallido")
    }

    return (
        <section className="login-page">
            <header className={style["header"]}>
                <div className={style["title"]} />
            </header>
            <form className={style["form"]}>
                <input onChange={e => setUser(e.target.value)} id="user" className={style["input"]} type="text" placeholder="USERNAME" />
                <input onChange={e => setPassword(e.target.value)}  id="password" className={style["input"]} type="password" placeholder="PASSWORD" />
                <button onClick={e => login()} className={style["login"]} type="submit">LOGIN</button>
                <a className={style["a"]}>Forgot password?</a>
            </form>
        </section>
    );
}