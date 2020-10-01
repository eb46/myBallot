import React, {useContext, useEffect, useState} from "react";
import { DataContext } from '../../App'

function CategoryCard({category, handleDisplayDropdown}){

    let raceTotal = category.Races.length

    return(
        <div className="category-card">
            <div className="card-title">
                <p>{category.Name}</p>        
            </div>
            <div className="card-count">
                <p>{raceTotal}</p>
            </div>
            <div 
                onClick={() => handleDisplayDropdown(category.Name)}
                className="card-arrow">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    )
}

export default CategoryCard