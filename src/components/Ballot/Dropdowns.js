import React, {useState} from 'react'
import './Dropdowns.scss'

function Dropdowns({showStyle}){
    
    let style = showStyle ? 'open-dropdown' : 'closed-dropdown' 

    return(
        <>
            <h1 className={style}>Hi</h1>
        </>
    )
}

export default Dropdowns