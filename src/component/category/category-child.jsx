// import React  from 'react'
// import {ListContainer,ListItems} from './category-child-style'
// import StartOrder from '../startoreder/startoreder'
// import {withRouter,Route,Link} from 'react-router-dom'
// import SinglePage from '../single-page/single-page'
// const CategoryChild=({name,linkUrl,childitems,history,match})=>{
//        console.log(match)
//      return(
//          <div className="cildcat">
//              <h3  onClick={()=> history.push(`${match.url}${linkUrl}`)}>{name}</h3>
         
//              <ListContainer   >
            
          
//                 {
                
//                 childitems?
           
//                 (   childitems.map(({id,...other})=>(
                   
//                     <SinglePage key={id} {...other} />
//                     // <ListItems  key={item.id} >
                   
//                     // <img src={item.imageUrl} />
//                     // <p>{item.childname}</p>
//                     // </ListItems>
//                 ))):
//                 (<p>is empty</p>)
//              }
//             </ListContainer>
            
//             {/* <Route path={`${match.path}/:childname`} component={StartOrder} />  */}
//          </div>
//      )
// }

// export default withRouter(CategoryChild)


import React from 'react'
import {ListContainer,ListItems} from './category-child-style'

import {withRouter,Route,Link,useRouteMatch,useParams} from 'react-router-dom'
import SinglePage from '../single-page/single-page'

const CategoryChild=({name,linkUrl,childitems,history,match})=>{
    const { url } = useRouteMatch();
    //console.log(match)

     return(
         <div className="cildcat">
             <h3  onClick={()=> history.push(`${linkUrl}`)}>{name}</h3>
         
             <ListContainer   >
            
          
                {
                
                childitems?
           
                (   childitems.map(item=>(
                    <ListItems  key={item.id} >
                 
                        <Link to={`${item.cat}/${item.subcat}/${item.url}`}>
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
         </div>
     )
}

export default withRouter(CategoryChild)