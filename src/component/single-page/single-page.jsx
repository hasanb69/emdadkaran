import React from 'react'
import {withRouter,Route,useRouteMatch,Link,useParams} from 'react-router-dom'
import {ListItems} from '../single-page/single-page.style'
import ProductDetail from '../productdetail/productdetail'
import DATA from '../../data/data'
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

//  const le=DATA[match.params].items.length

//   for (let i = 0; i < le; i++) {
      
//   DATA[match.params].items[i].childitems.map(item=>console.log(item))
  
//   }
  



//  const product= DATA[match.params].find(item=>item.url==match.params)
//     console.log(match.params)
//     // const { path } = useRouteMatch();

//      const { productId } = useParams();
   
    // const product = DATA.find(p => p.id === Number(productId));
    // if (product) {
    //     console.log('find')
    // }
    // else{
    //     console.log('not found')
    // }



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
          <p>u</p>
         
        </div>
    )
}

export default withRouter(SinglePage)