import React, {useContext, useEffect, useState} from "react";
import { DataContext } from '../../App'
import CategoryContainer from './CategoryContainer'
import Dropdowns from '../Ballot/Dropdowns'

function CategoryContainers() {
    const {data} = useContext(DataContext);
    const [ showDropdown, setShowDropdown ] = useState("closed")
    const [ categories, setCategories ] = useState([])
    
    useEffect(()=>{
        if(data.Categories !== undefined){
            if(data.Categories[0] !== undefined){
                setCategories(data.Categories)
            }
        }
    }, [data])

    const handleDisplayDropdown = (name) => {
        setShowDropdown(showDropdown === "closed" ? "open" : "closed")
        console.log(name)
    }

    let style

    if (showDropdown === "open") {
        style = true
    }   else if (showDropdown === "closed") {
        style = false
    }

    return(
        <>
            {categories.map((category, index) =>
                <>
                    <CategoryContainer 
                        category={category} 
                        handleDisplayDropdown={handleDisplayDropdown} />
                    <Dropdowns 
                        showStyle={style} />
                </>
            )}
        </>
    )
}

export default CategoryContainers