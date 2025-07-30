import Boton from "./componentes/Boton/Boton";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal";
import ItemCount from "./componentes/ItemCount/ItemCount";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

const App = () => {

const mensaje = "Aprovecha nuestras ofertas exclusivas!";

  return (

    <>
      <NavBar/>
      <ItemListContainer ofertas={mensaje}/>


    </>
  )

}

export default App