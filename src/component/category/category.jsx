import React from 'react'
import SubMainCategory from '../category/submaincategory'

import {connect} from 'react-redux'
const Category=({data})=>{
    const collection=Object.keys(data).map(key => data[key])
    return(
    <div className="home-category">
        {collection.map(({id,...other})=>(
            <SubMainCategory key={id} {...other}  />
        ))}
    </div>

    )
}
const mapStateToProps=state=>({
    data:state.shop.shopdata
  })
export default connect(mapStateToProps)(Category)