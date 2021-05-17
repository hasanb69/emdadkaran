import React,{useEffect} from 'react'
import SubMainCategory from '../category/submaincategory'
import {addCollectionAndDocuments} from '../../firebase/firebase'
import {firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase'
import {connect} from 'react-redux'
import {updatadata} from '../../redux/shop/shop.action'
const Category=({data,updatadata})=>{

    const collection=Object.keys(data).map(key => data[key])
useEffect(()=>{
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updatadata(collectionsMap);
      //  console.log(collectionsMap)
      },[updatadata]);
   
})
    

   // addCollectionAndDocuments('collections',collection.map(({title,items})=>({title,items})))
    return(
    <div className="home-category">
        {collection.map(({id,...other})=>(
            <SubMainCategory key={id} {...other}  />
        ))}
    </div>

    )
}
const mapDispatchToProps=dispatch=>({
    updatadata:collectionMap=>dispatch(updatadata(collectionMap))
})
const mapStateToProps=state=>({
    data:state.shop.shopdata
  })
export default connect(mapStateToProps,mapDispatchToProps)(Category)