// import Footer from "./components/Footer";
import Header from "./components/Header";
// import PageCadastro from "./pages/PageCadastro";
// import Login from "./pages/Login";
import Router from "./Router";

import { BrowserRouter } from "react-router-dom";

export default function App() {

  return (

    <BrowserRouter>
      <Header/>

      <Router/>

      
    </BrowserRouter>
    
  )
}

 
