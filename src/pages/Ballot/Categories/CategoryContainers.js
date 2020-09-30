import React, {useContext, useEffect, useState} from "react";
import { DataContext } from '../../../App'
import CategoryContainer from './CategoryContainer'

function CategoryContainers() {
    const {data} = useContext(DataContext);
    const [ categories, setCategories ] = useState([])
   
    useEffect(()=>{
        if(data.Categories !== undefined){
            if(data.Categories[0] !== undefined){
                setCategories(data.Categories)
            }
        }
    }, [data])

    return(
        <>
            {categories.map((category, index) =>
                <CategoryContainer 
                    category={category} />
            )}
        </>
    )
}

export default CategoryContainers