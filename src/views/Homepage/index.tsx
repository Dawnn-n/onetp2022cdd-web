import React, { useEffect, useState } from 'react';
import AcceptBtn from '../AcceptBtn';
import EditPencil from '../EditPencil';
import style from './style.module.css'

export default function Homepage(params : {
}){
  const [editTitle,setEditTitle]=useState(true)
  const [editText,setEditText]=useState(true)
  const [title,setTitle]=useState("")
  const [text,setText]=useState("")
  const acceptText = (editText)? <EditPencil action={()=>setEditText(false)}/>:
    <AcceptBtn action={()=>setEditText(true)}/>
const acceptTitle = (editTitle)? <EditPencil action={()=>setEditTitle(false)}/>:
    <AcceptBtn action={()=>setEditTitle(true)}/>
  
    return (
        <section className="homepage">
            <div className={style["title-box"]}>
                <input className={style["title-input"]} placeholder='Título' disabled ={editTitle} value={title} onChange={ e=>setTitle(e.target.value)}/>{acceptTitle}
                <input className={style["text-input"]}placeholder='Texto descriptivo' disabled ={editText} value={text} onChange={ e=>setText(e.target.value)}/>{acceptText}
                <div className={style["about-box"]}>Sobre el museo</div>
            </div>
        </section>
    );
}