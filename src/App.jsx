
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Componentes/Cart/Cart";
import { CarritoProvider } from './context/carritoContext';
import { ToastContainer } from "react-toastify";
import { Checkout } from "./Componentes/Checkout/checkout";

const App = () => {



  return (

<>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
              <Route path='item/:idItem' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path="/Checkout" element={<Checkout/>}/>
            </Routes>
        </CarritoProvider>
        <ToastContainer/>
      </BrowserRouter>
    
    </>
  )
}

export default App