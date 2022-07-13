import Login from "./pages/Login";
import PageCadastro from "./pages/PageCadastro";
import PageUser from "./pages/PageUser";

import { Route, Routes } from "react-router-dom";
import PageAtendente from "./pages/PageAtendente";
import PageDuvidas from "./pages/PageDuvidas";
import EditarCadastro from "./pages/EditarCadastro";
import PageDoe from "./pages/PageDoe";


export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/cadastro" element={<PageCadastro/>} />
            <Route path="/pagina-usuario" element={<PageUser/>} />
            <Route path="/pagina-atendente" element={<PageAtendente/>} />
            <Route path="/duvidas" element={<PageDuvidas/>} />
            <Route path="/doe" element={<PageDoe/>} />
            <Route path="/editar-cadastro" element={<EditarCadastro/>} />

        </Routes>
    )
}