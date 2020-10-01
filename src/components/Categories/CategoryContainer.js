import React from "react";

function CategoryCard({category, handleDisplayDropdown}){

    let raceTotal = category.Races.length

    return(
        <div className="category-card">
            <div className="card-title">
                <p>{category.Name}</p>        
            </div>
            <div className="card-count">
                <p>(0/{raceTotal})</p>
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