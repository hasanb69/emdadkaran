import React from 'react'
import {withRouter,Route,useRouteMatch,Link,useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import DATA from '../../data/data'





const SinglePage=({history,match,data})=>{


   console.log(data)

var product=DATA[match.params.cat].items.find(subcat=>subcat.subcat === match.params.subcat)
  const findporduct= product.childitems.find(item=>item.url===match.params.url)
  //console.log(findporduct)






    return(
        <div className="singlepage">
       
           
          <p>{data.childname}</p>
         
        </div>
    )
}

const mapStateToProps=(state,{match})=>({
  data:state.shop.shopdata[match.params.cat].items.find(subcat=>subcat.subcat === match.params.subcat).childitems.find(item=>item.url===match.params.url)
  
  
})


export default connect (mapStateToProps)(SinglePage)