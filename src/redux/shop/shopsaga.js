import {takeLatest,put,call}  from 'redux-saga/effects'
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase'
import {fetchSuccess,fetchFailur} from './shop.action'
import shoptype from './shop.type'

export function* asyncfetching(){
    try{
        const collectionRef=firestore.collection('collections')/*==>read collections data from database */
        const snapshot=yield collectionRef.get()
        const collectionsMap=yield call(convertCollectionsSnapshotToMap,snapshot)
        yield put(fetchSuccess(collectionsMap))
     }
     catch (error){
         yield put(fetchFailur(error.message))
     }
} 



export function* startfetching(){
    yield takeLatest(
        shoptype.Fetch_START,
        asyncfetching
    )
}