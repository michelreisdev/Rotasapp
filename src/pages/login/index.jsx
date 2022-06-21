import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../styled/globalStyled";
import * as exampleActions from '../../store/modules/example/actions';

export default function Login(){
    const dispatch = useDispatch();

    function handleClick(e){
        e.preventDefault();   
        dispatch(exampleActions.clicaBotaorRequest());
    }

    return (<>
    <Container>
        <h1>Login</h1>
        <button onClick={handleClick}>Click</button>
    </Container>
    </>);
}