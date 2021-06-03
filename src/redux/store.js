import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootreducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootsaga';


const sagaMiddleware=createSagaMiddleware()
//const middleWare=[thunk]

const middlewares = [logger,sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga)
export default store;