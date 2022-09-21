import React, { useEffect, useState } from 'react';
import EditPencil from '../EditPencil';
import style from './style.module.css';

const data = [ // To be migrated to Firebase
    [
        {
        title: "Motomami",
        fields: [<>1:30</>, <>Rosalía</>, <>15 pers.</>, <div className="image-icon" />],
        },
    ],
]

export default function AdminPage(params : {
    type : string,
    toggleHeader : (state : boolean) => void,
}){
    useEffect(() => {
        params.toggleHeader(true)
    })
    const typeCode = (params.type=="tour")? 0 : (params.type=="stand")? 1 : (params.type=="point")? 2 : 3
    const titles = [<>Visitas guiadas</>, <>Exposiciones</>, <>Puntos Inteligentes</>]

    const [adminList, resetAdminList] = useState([<></>])
    useEffect(() => {
        const subdata = data[typeCode]
        for (let i = 0; i < subdata.length; i++) {
            adminList.push(<AdminListUnit type={params.type} id={i} />)
    }
    })
    

    return (
        <section className={params.type+"s-admin"}>
            <h1 className={style["title"]}>{titles[typeCode]}<EditPencil/></h1>
            <div className={style["list-container"]}>
                <ul>
                    
                </ul>
            </div>
        </section>
    );
}

function AdminListUnit(params : {
    type : string,
    id : number,
}){
    const typeCode = (params.type=="tour")? 0 : (params.type=="stand")? 1 : (params.type=="point")? 2 : 3
    const layoutData = [
        {
            defaultTitle: "Visita ",
            fields: ["Duración", "Guía", "Capacidad Máxima", "Recorrido"],
        },
        {
            defaultTitle: "Exposición ",
            fields: ["Autor", "Antiguedad", "Ubicación"],
        },
        {
            defaultTitle: "Punto ",
            fields: ["Ubicación", "Contenido"],
        },
    ]
    var title = data[typeCode][params.id].title
    if (title == null || title == "") title = layoutData[typeCode].defaultTitle+params.id

    return (
        <li className="admin-list-unit">
            <h2>{title}</h2>
        </li>
    );
}

function ListUnitField(params : {
    field : string,
    value : string,
}){
    return (
        <li className="field">
            <h2></h2>
        </li>
    );
}