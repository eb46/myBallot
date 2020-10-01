import React, {useContext, useEffect, useState} from "react";
import { DataContext } from '../../App'
import CategoryContainer from './CategoryContainer'
import Dropdowns from '../Ballot/Dropdowns'

function CategoryContainers() {
    const {data} = useContext(DataContext);
    const [ categoryName, setCategoryName ] = useState('')
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
                        name={category.Name}
                        clickedName={categoryName}
                         />
                </>
            )}
        </>
    )
}

export default CategoryContainers