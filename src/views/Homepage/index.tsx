import React, { useEffect } from 'react';
import style from './style.module.css'

export default function Homepage(params : {
    toggleHeader : (state : boolean) => void,
}){
    useEffect(() => {
        params.toggleHeader(true)
    })

    return (
        <section className="homepage">
            <div className={style["title-box"]}>
                <h1>Título Principal<div className={style["edit-btn"]} /></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore animi earum iste ipsum natus velit deleniti praesentium perspiciatis? Ea accusamus commodi animi!<div className={style["edit-btn"]} /></p>
                <div className={style["about-box"]}>Sobre el museo</div>
            </div>
        </section>
    );
}