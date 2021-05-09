import React from 'react'
import {withRouter,Route,Link,useRouteMatch} from 'react-router-dom'
import SinglePage from '../component/single-page/single-page'
import CategoryChild from '../component/category/category-child'
const Shop=({match})=>{
  return(
      <div>
             <Route path={`${match.path}`} component={CategoryChild}   />  
            <Route path={`${match.path}/:productId`} component={SinglePage}   />  
      </div>
  )
}

export default Shop