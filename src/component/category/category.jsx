import React from 'react'
import SubMainCategory from '../category/submaincategory'
import DATA from '../../data/data'
const Category=()=>{
    return(
    <div className="home-category">
        {DATA.map(({id,...other})=>(
          // console.log(item.title)
               
            <SubMainCategory key={id} {...other}  />
        ))}
    </div>

    )
}

export default Category