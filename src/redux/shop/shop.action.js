import shoptype from './shop.type'


export const updatadata=item=>({
    type:shoptype.UPDATAE_DATA,
    payload:item
})