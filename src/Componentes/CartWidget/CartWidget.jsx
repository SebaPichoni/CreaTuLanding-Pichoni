import "./CartWidget.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const {cantidadTotal} = useContext(CarritoContext)

    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/846/846423.png"

    return (
        <div> 
            <Link to="/cart"> {/* <-- Aquí está la corrección */}
                <img className="imgCarrito" src={imgCarrito} alt="Imagen del carrito" />
                {cantidadTotal > 0 && <strong>{cantidadTotal}</strong>}      
            </Link>
        </div>
    )
}

export default CartWidget