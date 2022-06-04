import React from "react";
import { Nav } from "./css";
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";

export default function Header(){
    return (<>
        <Nav>
            <Link to="/"><FaHome size={24}/></Link>
            <Link to="/login"><FaUserAlt size={24}/></Link>
            <Link to="/ss"><FaSignInAlt size={24}/></Link>
        </Nav>
    </>);
}