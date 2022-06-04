import React from "react";
import Erro404 from '../pages/erro404';
import PropTypes from 'prop-types';


export default function MyRoute({element: Element, isClosed}){
    const isLoggidIn = false;

    if(isClosed !== !isLoggidIn){
        return <Erro404/>;
    }
    return <Element/>;
    
}

MyRoute.defaultProps ={
    isClosed: false,
}

MyRoute.propTypes ={
    isClosed: PropTypes.bool,
}



