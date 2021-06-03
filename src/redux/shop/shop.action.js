import shoptype from './shop.type'


export const updatadata=item=>({
    type:shoptype.UPDATAE_DATA,
    payload:item
})


export const fetchStart=()=>({
    type:shoptype.Fetch_START
})

export const fetchSuccess=collectionsMap=>({
    type:shoptype.FETCH_SUCCSES,
    payload:collectionsMap
})

export const fetchFailur=errorMessage=>({
    type:shoptype.FETCH_FAILUR,
    payload:errorMessage
})