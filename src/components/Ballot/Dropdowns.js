import React from 'react'
import './Dropdowns.scss'
import DropdownCard from './DropdownCard'


function Dropdowns({category, name, clickedName}){
    
    let style = name === clickedName ? 'open-dropdown' : 'closed-dropdown';

    // console.log(category);
    // console.log(category.Races[0]);

    return(
        <> 
            <div className={style}>
                {category.Races.map((races, index) => 
                    <>
                        <DropdownCard
                            key={index}
                            races={races} />
                    </>
                )}
            </div>
        </>
    )
}

export default Dropdowns