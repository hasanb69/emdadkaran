import React from 'react'
import {withRouter,Route,Link,useRouteMatch} from 'react-router-dom'
import SinglePage from '../component/single-page/single-page'
import CategoryChild from '../component/category/category-child'
import Category from '../component/category/category'
const Shop=({match})=>{
  return(
      <div>
             <Route path={`${match.path}`} component={Category}   />  
            <Route path={'/cat/subcat/url'} component={CategoryChild}   />  
      </div>
  )
}

export default Shop