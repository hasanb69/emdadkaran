import DATA from '../../data/data'
import shoptype from './shop.type'
const INITHIAL_STATE={
    shopdata:DATA
}
const shopReducer=(state=INITHIAL_STATE,action)=>{
      switch(action.type){
          case shoptype.UPDATAE_DATA:
              return{
                  ...state,
                  shopdata:action.payload
              }
          default:
              return  state
              
      }
}

export default shopReducer