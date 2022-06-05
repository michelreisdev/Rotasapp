import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../styled/globalStyled";

export default function Login(){
    const dispatch = useDispatch();

    function handleClick(e){
        e.preventDefault();

        dispatch({
            type:"BOTAO_CLICADO",
        });
       
    }
    return (<>
    <Container>
        <h1>Login</h1>
        <button onClick={handleClick}>Click</button>
    </Container>
    </>);
}