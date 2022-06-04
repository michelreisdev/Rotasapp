import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from '../pages/login';
import Erro404 from '../pages/erro404';
import MyRoute from "./myRoute";


export default function Routers(){
   
    return(
        <Routes>
            <Route index path="/"  element={<MyRoute isClosed={true} element={Login} />} />
            <Route path="*"  element={<Erro404 />} />
        </Routes>
    );
}
