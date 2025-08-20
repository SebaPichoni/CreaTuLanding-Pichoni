
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

const mensaje = "Aprovecha nuestras ofertas exclusivas!";

  return (

    <>

    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
    <Route path='item/:idItem' element={<ItemDetailContainer/>}/>
    <Route/>



    </Routes>
    </BrowserRouter>
    
      
      {/*<ItemListContainer ofertas={mensaje}/>
      <ItemDetailContainer/>*/}

    </>
  )

}

export default App