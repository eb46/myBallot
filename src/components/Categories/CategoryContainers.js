import React, {useContext, useEffect, useState} from "react";
import { DataContext } from '../../App'
import CategoryContainer from './CategoryContainer'
import Dropdowns from '../Ballot/Dropdowns'

function CategoryContainers({ categoryName, setCategoryName, handleDropCardClick}) {
    const {data} = useContext(DataContext);
    const [ categories, setCategories ] = useState([])
    
    useEffect(()=>{
        if(data.Categories !== undefined){
            if(data.Categories[0] !== undefined){
                setCategories(data.Categories)
            }
        }
    }, [data])

    const handleDisplayDropdown = (name) => {
        setCategoryName(name)
        if( categoryName === name) setCategoryName('')
    }

    return(
        <>
            {categories.map((category, index) =>
                <>
                    <CategoryContainer 
                        category={category} 
                        handleDisplayDropdown={handleDisplayDropdown} />
                    <Dropdowns
                        category={category}
                        name={category.Name}
                        clickedName={categoryName}
                        handleDropCardClick={handleDropCardClick}
                         />
                </>
            )}
        </>
    )
}

export default CategoryContainers