import React, { useEffect } from 'react';
import style from './style.module.css'

export default function Login(params : {
    toggleHeader : (state : boolean) => void
}){
    useEffect(() => {
        params.toggleHeader(false)
    })
    
    return (
        <section className="login-page">
            <header className={style["header"]}>
                <div className={style["title"]} />
            </header>
            <form className={style["form"]}>
                <input className={style["input"]} type="text" placeholder="USERNAME" />
                <input className={style["input"]} type="password" placeholder="PASSWORD" />
                <input className={style["input"]} type="submit" value="LOGIN" />
                <a className={style["a"]}>Forgot password?</a>
            </form>
        </section>
    );
}