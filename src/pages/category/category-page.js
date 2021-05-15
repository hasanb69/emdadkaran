import React from 'react'
import {withRouter,Route,Link,useRouteMatch} from 'react-router-dom'
import SubCategoryPage from '../../component/subcatpage/subcetagory'
const CategoryPage=({match})=>{
    return(
        <div>
             <Route path={`${match.path}/:cat/:linkUrl`} component={SubCategoryPage}   /> 
        </div>
    )
}

export default CategoryPage