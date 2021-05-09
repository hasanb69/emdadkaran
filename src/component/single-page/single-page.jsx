import React from 'react'
import {withRouter,Route,useRouteMatch,Link,useParams} from 'react-router-dom'
import {ListItems} from '../single-page/single-page.style'
import ProductDetail from '../productdetail/productdetail'

// const SinglePage=({id,imageUrl,childname,url,history,match})=>{
//     const ProductData={imageUrl,childname,url}
//     const { path } = useRouteMatch();
//     console.log(match.url)
//     return(
//         <div className="singlepage">
//                { 
//                <div key={id}>
//              <Link to={`${path}/${id}`}>
//                <img src={imageUrl} />
//                <p>{childname}</p>

//                </Link>

//                </div>
            
//                 }
//             {/* <ListItems onClick={()=> history.push(`${path}/${id}`)}>
//             <img src={imageUrl} />
//              <p>{childname}</p>
//             </ListItems> */}
//             <Route path={`${path}/:productId`}>
//               <ProductDetail data={ProductData} />
//            </Route>   
//         </div>
//     )
// }

// export default withRouter(SinglePage)



const SinglePage=({data,history,match})=>{
    console.log(match.params)
    // const { path } = useRouteMatch();

     const { productId } = useParams();
   
    const product = data.find(p => p.id === Number(productId));
    if (product) {
        console.log('find')
    }
    else{
        console.log('not found')
    }



    return(
        <div className="singlepage">
                {/* {data.map(item=>(
                 <div key={item.id}>
                 
                   <Link to={`${path}/${item.id}`}>
                     <img src={item.imageUrl} />
                     <p>{item.childname}</p>
                   </Link>
                 </div>
                  ))}

             */}
          <p>{product}</p>
         
        </div>
    )
}

export default withRouter(SinglePage)