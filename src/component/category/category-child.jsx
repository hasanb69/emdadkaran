import React  from 'react'
import {ListContainer,ListItems} from './category-child-style'
import StartOrder from '../startoreder/startoreder'
import {withRouter,Route} from 'react-router-dom'
const CategoryChild=({name,linkUrl,childitems,history,match})=>{
       console.log(match)
     return(
         <div className="cildcat">
             <h3  onClick={()=> history.push(`${match.url}${linkUrl}`)}>{name}</h3>
         
             <ListContainer>
            
          
                {
                
                childitems?
           
                (   childitems.map(item=>(
                    <ListItems  key={item.id} >
                   
                    <img src={item.imageUrl} />
                    <p>{item.childname}</p>
                    </ListItems>
                ))):
                (<p>is empty</p>)
             }
            </ListContainer>
            
            {/* <Route path={`${match.path}/:childname`} component={StartOrder} />  */}
         </div>
     )
}

export default withRouter(CategoryChild)