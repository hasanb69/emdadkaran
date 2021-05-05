import React from 'react'
import SubMainCategory from '../category/submaincategory'
import DATA from '../../data/data'
const Category=()=>{
    return(
    <div className="home-category">
        {DATA.map(item=>{
        
            <SubMainCategory items={item.items}  />
        })}
    </div>

    )
}

export default Category