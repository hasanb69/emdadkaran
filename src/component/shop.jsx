import React from 'react'
import {withRouter,Route,Link,useRouteMatch} from 'react-router-dom'
import SinglePage from './single-page/single-pages'
import Category from '../component/category/category'
import SubCategoryPage from './subcatpage/subcetagory'
const Shop=({match})=>{
  return(
      <div>
             <Route exact path={`${match.path}`} component={Category}   />  

             <Route path={`category/:cat/:linkUrl`} component={SubCategoryPage}   /> 
            <Route path={`${match.path}/:cat/:subcat/:url`} component={SinglePage}   />  
             
      </div>
  )
}

export default Shop