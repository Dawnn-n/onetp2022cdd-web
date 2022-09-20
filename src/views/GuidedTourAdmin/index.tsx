import React, { useEffect } from 'react';
import './style.css'

export default function GuidedTourAdmin(params : {
    toggleHeader : (state : boolean) => void
}){
    useEffect(() => {
        params.toggleHeader(true)
    })


    return (
        <section className="tours-admin">

        </section>
    );
}