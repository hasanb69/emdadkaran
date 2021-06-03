import {all,call} from 'redux-saga/effects'
import {startfetching} from './shop/shopsaga'
export default function* rootSaga(){
    yield all([call(startfetching)])
}