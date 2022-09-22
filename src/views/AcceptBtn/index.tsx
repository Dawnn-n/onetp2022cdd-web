import React from 'react';
import style from './style.module.css'
export default function Pencil({action}: {action:()=>void}){
    return (
        <div onClick={action} className={style["accept-btn"]} />
    );
}