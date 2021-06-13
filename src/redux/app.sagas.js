import {put, take,takeEvery,takeLatest,delay} from 'redux-saga/effects';

export function* onIncrement(){
    yield console.log('I am incremented');
    yield delay(3000)
    yield put({type:'INCREMENT_SAGA'})
}

export function* incrementSaga(){
    yield takeLatest('INCREMENT',onIncrement)
    
    
}