import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from '../pages/login';
import Erro404 from '../pages/erro404';
import MyRoute from "./myRoute";
import Fotos from "../pages/fotos";
import Alunos from "../pages/alunos";
import Aluno from "../pages/aluno";
import Register from "../pages/register";



export default function Routers(){
   
    return(
        <Routes>
            <Route index path="/"  element={<MyRoute isClosed={true} element={Login} />} />
            <Route index path="/fotos/:id"  element={<MyRoute isClosed={false} element={Fotos} />} />
            <Route index path="/alunos"  element={<MyRoute isClosed={false} element={Alunos} />} />
            <Route index path="/aluno/:id/edit"  element={<MyRoute isClosed={false} element={Aluno} />} />
            <Route index path="/register"  element={<MyRoute isClosed={true} element={Register} />} />
            <Route path="*"  element={<Erro404 />} />
        </Routes>
    );
}
