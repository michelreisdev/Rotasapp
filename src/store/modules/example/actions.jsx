import * as types from '../types';

export function clicaBotaorRequest(){
    return{
        type: types.BOTAO_CLICADO_REQUEST,
    };
}

export function clicaBotaorSuccess(){
    return{
        type: types.BOTAO_CLICADO_SUCCESS,
    };
}

export function clicaBotaorFailure(){
    return{
        type: types.BOTAO_CLICADO_FAILURE,
    };
}