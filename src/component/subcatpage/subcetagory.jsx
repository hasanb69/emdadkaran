import React from 'react'
import {connect} from 'react-redux'

const SubCategoryPage=({match,data})=>{
    console.log(match)
   return(
       <div key={data.id}>
           {data.map(item=>(
                  <p> {item.childname}</p>

           ))}
         
       </div>
   )
}
const mapStateToProps=(state,{match})=>({
    data:state.shop.shopdata[match.params.cat].items.find(subcat=>subcat.linkUrl === match.params.linkUrl).childitems.map(item=>item)
    
  })

export default connect(mapStateToProps)(SubCategoryPage)