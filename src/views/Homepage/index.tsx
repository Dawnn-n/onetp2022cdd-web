import React, { useEffect, useState } from 'react';
import EditPencil from '../EditPencil';
import style from './style.module.css'

export default function Homepage(params : {
}){
  const [editTitle,setEditTitle]=useState(true)
  
  const [editText,setEditText]=useState(true)
    return (
        <section className="homepage">
            <div className={style["title-box"]}>
                <input disabled ={editTitle} value="Título Principal"/><EditPencil action={()=>setEditTitle(false)}/>
                <input disabled ={editText} value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore animi earum iste ipsum natus velit deleniti praesentium perspiciatis? Ea accusamus commodi animi!" /><EditPencil action={()=>setEditText(false)} />
                <div className={style["about-box"]}>Sobre el museo</div>
            </div>
        </section>
    );
}