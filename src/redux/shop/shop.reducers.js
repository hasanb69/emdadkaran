import DATA from '../../data/data'
import shoptype from './shop.type'
const INITHIAL_STATE={
    shopdata:null,
    errormessage:null
}
const shopReducer=(state=INITHIAL_STATE,action)=>{
      switch(action.type){
          case shoptype.UPDATAE_DATA:
              return{
                  ...state,
                  shopdata:action.payload
              }
          case shoptype.Fetch_START:
              return{
                  ...state
              }  
          case shoptype.FETCH_SUCCSES:
              return{
                ...state,
                shopdata:action.payload
              }
           case shoptype.FETCH_FAILUR:
               return{
                   ...state,
                   errormessage:action.payload
               }  

          default:
              return  state
              
      }
}

export default shopReducer