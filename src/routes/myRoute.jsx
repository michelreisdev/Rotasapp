import React from "react";
import Login from "../pages/login";
import PropTypes from 'prop-types';


export default function MyRoute({element: Element, isClosed}){
    const isLoggidIn = false;

    if(isClosed !== !isLoggidIn){
        return <Login/>;
    }
    return <Element/>;
    
}

MyRoute.defaultProps ={
    isClosed: false,
}

MyRoute.propTypes ={
    isClosed: PropTypes.bool,
}



