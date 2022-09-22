import React, { useEffect, useState } from 'react';
import EditPencil from '../EditPencil';
import style from './style.module.css';

const data = [ // To be migrated to Firebase
    [
        {
            title: "Motomami",
            values: [<>1:30</>, <>Rosalía</>, <>15 pers.</>, <div className={style["image-icon"]} />],
        },
        {
            title: "",
            values: [<>1:15</>, <>David</>, <>20 pers.</>, <div className={style["image-icon"]} />],
        },
        {
            title: "Motomami",
            values: [<>1:30</>, <>Rosalía</>, <>15 pers.</>, <div className={style["image-icon"]} />],
        },
        {
            title: "",
            values: [<>1:15</>, <>David</>, <>20 pers.</>, <div className={style["image-icon"]} />],
        },
    ],
    [

    ],
    [

    ],
    [

    ],
]

export default function AdminPage(params : {
    type : string,
}){
    const typeCode = (params.type==="tour")? 0 : (params.type==="stand")? 1 : (params.type==="point")? 2 : 3
    const titles = [<>Visitas guiadas</>, <>Exposiciones</>, <>Puntos Inteligentes</>]

    const [adminList, resetAdminList] = useState([<></>])

    useEffect(() => {
        resetAdminList([])
        const newAdminList : JSX.Element[] = []
        for (let i = 0; i < data[typeCode].length; i++) {
            // console.log("outer", i, adminList, newAdminList)
            console.log(i)
            newAdminList.push(<AdminListUnit type={params.type} id={i} />)
        }
        resetAdminList(newAdminList)
    }, [params.type])

    return (
        <section className={params.type+"s-admin"}>
            <h1 className={style["title"]}>{titles[typeCode]}<EditPencil action={function (): void {
                throw new Error('Function not implemented.');
            } } /></h1>
            <div className={style["list-container"]}>
                <ul>{adminList}</ul>
            </div>
        </section>
    );
}

function AdminListUnit(params : {
    type : string,
    id : number,
}){
    const typeCode = (params.type==="tour")? 0 : (params.type==="stand")? 1 : (params.type==="point")? 2 : 3
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
    if (title === null || title === "") title = layoutData[typeCode].defaultTitle+params.id

    const [fieldList, resetFieldList] = useState([<></>])

    useEffect(() => {
        resetFieldList([])
        const newFieldList : JSX.Element[] = []
        const subdata = data[typeCode][params.id].values
        for (let i = 0; i < subdata.length; i++) {
            // console.log("inner", i, newFieldList)
            newFieldList.push(<ListUnitField field={layoutData[typeCode].fields[i]} value={subdata[i]} />)
        }
        resetFieldList(newFieldList)
    }, [])

    return (
        <li className={style["admin-list-unit"]}>
            <div>
                <h2>{title}</h2>
                <form>{fieldList}</form>
            </div>
            <div className={style["unit-image"]}><h2>img holder</h2></div>
            <span className={style["corner-pencil"]}><EditPencil action={function (): void {
                throw new Error('Function not implemented.');
            } } /></span>
        </li>
    );
}

function ListUnitField(params : {
    field : string,
    value : JSX.Element,
}){
    return (
        <div className={style["field"]}>
            <h2 className={style["field-name"]}>{params.field}</h2>
            <div className={style["field-value"]}>
                <h2>{params.value}</h2>
                <input className={style["value-input"]} disabled />
            </div>
        </div>
    );
}