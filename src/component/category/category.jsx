import React,{useEffect} from 'react'
import SubMainCategory from '../category/submaincategory'
import {addCollectionAndDocuments} from '../../firebase/firebase'
import {firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase'
import {connect} from 'react-redux'
import {updatadata} from '../../redux/shop/shop.action'


const Category=({data})=>{



   // addCollectionAndDocuments('collections',collection.map(({title,items,routeName})=>({title,items,routeName})))
    return(
    <div className="home-category">
        {data.map(({id,...other})=>(
            <SubMainCategory key={id} {...other}  />
        ))}
    </div>

    )
}

const mapStateToProps=state=>({
    data:state.shop.shopdata?Object.keys(state.shop.shopdata).map(key => state.shop.shopdata[key]):[]
  })
export default connect(mapStateToProps)(Category)