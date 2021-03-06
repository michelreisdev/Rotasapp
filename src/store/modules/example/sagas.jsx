import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import { toast } from 'react-toastify';

const requisicao = () => 
    new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve();
    }, 2000);
});

function* exampleRequest() {
    
    try {
        yield call(requisicao);
        yield put(actions.clicaBotaorSuccess());
    } catch {
        toast.error("deu erro");
        yield put(actions.clicaBotaorFailure());
    }
}

export default all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
]);