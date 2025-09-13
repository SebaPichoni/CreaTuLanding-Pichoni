// src/Componentes/Cart/Cart.jsx

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/carritoContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div>
                <h2>No existen productos!</h2>
                <Link to="/">Ver productos</Link>
            </div>
        );
    }

    return (
        <div>
            {carrito.map(prod => (
                <CartItem key={prod.item.id} {...prod} />
            ))}
            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <button onClick={() => vaciarCarrito()}> Vaciar Carrito</button>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    );
};

export default Cart;