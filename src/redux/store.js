import {createStore,applyMiddleware} from 'redux';

import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import {incrementSaga} from '../redux/app.sagas';

const sagaMiddleware=createSagaMiddleware();

const middleware=[logger,sagaMiddleware]

export const store = createStore(rootReducer,applyMiddleware(...middleware));
sagaMiddleware.run(incrementSaga)

export default store;

