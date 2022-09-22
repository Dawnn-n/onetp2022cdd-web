import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './style.module.css'

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate();
    function go(ruta: string) {
        navigate("../" + ruta)
    }

    useEffect(() => {
        console.log(location.pathname)
    }, [location])

    if (location.pathname == "/")
        return <></>
    return (
        <header className={style["header"]}>
            <ul className={style["nav"]}>
                <li onClick={e => go("home")}><div className={style["home-icon"]}><a /></div></li>
                <li onClick={e => go("tours")}><a >Visitas Guiadas</a></li>
                <li onClick={e => go("stands")}><a >Exposiciones</a></li>
                <li onClick={e => go("points")}><a className={style["last"]}>Puntos Inteligentes</a></li>
            </ul>
        </header>
    );
}