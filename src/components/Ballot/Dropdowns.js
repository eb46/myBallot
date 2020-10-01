import React, {useState} from 'react'
import './Dropdowns.scss'


function Dropdowns({name, clickedName}){
    
    let style = name === clickedName ? 'open-dropdown' : 'closed-dropdown' ;

    return(
        <>
            <h1 className={style}>{name}</h1>
        </>
    )
}

export default Dropdowns