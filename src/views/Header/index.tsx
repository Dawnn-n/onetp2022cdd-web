import React from 'react';
import style from './style.module.css'

export default function Header(){
    return (
        <header className={style["header"]}>
            <ul className={style["nav"]}>
                <li><div className={style["home-icon"]}><a href="../home" /></div></li>
                <li><a href="../tours">Visitas Guiadas</a></li>
                <li><a href="../stands">Exposiciones</a></li>
                <li><a href="../points" className={style["last"]}>Puntos Inteligentes</a></li>
            </ul>
        </header>
    );
}