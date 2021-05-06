import React  from 'react'
import {ListContainer,ListItems} from './category-child-style'
const CategoryChild=({id,name,childitems})=>{
     return(
         <div className="cildcat">
             <h3>{name}</h3>
             <ListContainer >
                {childitems.map(item=>(
                    <ListItems key={item.id}>
                   
                    <img src={item.imageUrl} />
                    <p>{item.childname}</p>
                    </ListItems>
                ))}
            </ListContainer>
         </div>
     )
}

export default CategoryChild