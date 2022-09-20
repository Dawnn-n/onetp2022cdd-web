import React, { useEffect } from 'react';
import './style.css'

export default function StandAdmin(params : {
    toggleHeader : (state : boolean) => void
}){
    useEffect(() => {
        params.toggleHeader(false)
    })

    return (
        <section className="stands-admin">
            
        </section>
    );
}