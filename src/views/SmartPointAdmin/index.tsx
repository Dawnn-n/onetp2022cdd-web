import React, { useEffect } from 'react';
import style from './style.module.css'

export default function SmartPointAdmin(params : {
    toggleHeader : (state : boolean) => void
}){
    useEffect(() => {
        params.toggleHeader(false)
    })

    return (
        <section className="points-admin">
            
        </section>
    );
}