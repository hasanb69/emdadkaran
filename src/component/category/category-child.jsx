


import React from 'react'
import {ListContainer,ListItems} from './category-child-style'
import SubCategoryPage from '../subcatpage/subcetagory'
import {withRouter,Route,Link,useRouteMatch,useParams} from 'react-router-dom'
import SinglePage from '../single-page/single-pages'

const CategoryChild=({name,linkUrl,childitems,cat,subcat,history,match})=>{
    const { url } = useRouteMatch();
    //console.log(match)

     return(
         <div className="cildcat">

             <Link to={`category/${cat}/${linkUrl}`}>
             <h3 >{name}</h3>
             </Link>
           
         
             <ListContainer   >
            
          
                {
                
                childitems?
           
                (   childitems.map(item=>(
                    <ListItems  key={item.id}    >
                 
                        <Link to={`${match.path}/${item.cat}/${item.subcat}/${item.url}`}>
                        <img src={item.imageUrl} />
                        <p>{item.childname}</p>
                        
                        </Link>
                       
                      
                    
                   
                    </ListItems>   
                     
                   
                  
                ))):
                (<p>is empty</p>)
             }
            </ListContainer>
           
           
            {/* <Route path={`${match.url}/:productId`}>  <SinglePage data={childitems} /></Route>
            <Route exact path={url}> <p>Please select a product.</p> </Route> */}
              <Route path={`shops/:cated/:linkUrl`} component={SubCategoryPage}   /> 
         </div>
     )
}

export default withRouter(CategoryChild)