import React,{useEffect} from 'react'
import axios from 'axios'
import SubMainCategory from '../category/submaincategory'
import {AddCollectionAndDoc} from '../../firebase/firebase'
import {connect} from 'react-redux'
const Category=({data})=>{

   useEffect(()=>{



   /* AddCollectionAndDoc ('collections',collection.map(({title,items})=>({title,items})))*/
    axios.get('https://emdadkaran.com/wp-content/themes/betheme-child/jsondata.php').then(res=>{
       const s=  JSON.stringify(res.data)
       console.log(JSON.parse(s))
     })
   })

    const collection=Object.keys(data).map(key => data[key])
    return(
    <div className="home-category">
        {collection.map(({id,...other})=>(
            <SubMainCategory key={id} {...other}  />
        ))}
    </div>

    )
}
const mapStateToProps=state=>({
    data:state.shop.shopdata
  })
export default connect(mapStateToProps)(Category)