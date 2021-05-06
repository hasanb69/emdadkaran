import React from 'react'
import CategoryChild from './category-child'
import {HeaderTitile}  from './submaincategory-style'
const SubMainCategory=({id,title,items})=>{
    return(
        <div>
            <HeaderTitile> {title}</HeaderTitile>
            <div className="submaincat">
                {items.map(({id,...otherdata})=>(
                  <CategoryChild  key={id}  {...otherdata}/>
                ))}
            </div>
        </div>
    )
     
}

export default SubMainCategory