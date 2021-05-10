import React from 'react'
import SubMainCategory from '../category/submaincategory'
import DATA from '../../data/data'
const Category=()=>{
    const collection=Object.keys(DATA).map(key => DATA[key])
    return(
    <div className="home-category">
        {collection.map(({id,...other})=>(
            <SubMainCategory key={id} {...other}  />
        ))}
    </div>

    )
}

export default Category