import React from 'react'
import {withRouter,Route,Link,useRouteMatch} from 'react-router-dom'
import SinglePage from './single-page/single-pages'
import Category from '../component/category/category'
import SubCategoryPage from './subcatpage/subcetagory'
import {firestore,convertCollectionsSnapshotToMap } from '../firebase/firebase'
import {updatadata} from '../redux/shop/shop.action'
import {connect} from 'react-redux'
import {fetchStart} from '../redux/shop/shop.action'
class Shop extends React.Component {


  componentDidMount() {
    const {fetchStart}=this.props
    fetchStart()
    // const {updatadata}=this.props
    // const collectionRef = firestore.collection('collections');
    // collectionRef.get().then((snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     updatadata(collectionsMap);
    //   });

}


  render(){
    const {match}=this.props
    return(
      <div>
             <Route exact path={`${match.path}`} component={Category}   />  

             <Route path={`category/:cat/:linkUrl`} component={SubCategoryPage}   /> 
            <Route path={`${match.path}/:cat/:subcat/:url`} component={SinglePage}   />  
             
      </div>
  )
  }

}

const mapDispatchToProps=dispatch=>({
  updatadata:collectionMap=>dispatch(updatadata(collectionMap)),
  fetchStart:()=>dispatch(fetchStart())
})

export default connect(null,mapDispatchToProps) (Shop)