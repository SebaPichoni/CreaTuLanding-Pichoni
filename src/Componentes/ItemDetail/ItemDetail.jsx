import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/carritoContext';
import './ItemDetail.css';
import { toast } from 'react-toastify';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const { agregarAlCarrito } = useCartContext();

    const manejoCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        agregarAlCarrito({ id, nombre, precio, img, stock }, cantidad);
        toast.success("Producto agregado al carrito",{autoClose: 1000, theme:"dark", position:"top-right"})
    };

    return (
        <div className="contenedorItem">
            <h2>{nombre}</h2>
            <h3>Precio: ${precio}</h3>
            <p>ID: {id}</p>
            <p>Stock disponible: {stock}</p>
            <img src={img} alt={nombre} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam aspernatur nam quaerat ullam quasi odio suscipit itaque iste incidunt.</p>

            {
                agregarCantidad > 0 ? (
                    <Link to='/cart' className="finalizarCompra">
                        Finalizar Compra
                    </Link>
                ) : (
                    <ItemCount inicial={1} stock={stock} funcionAgregar={manejoCantidad} />
                )
            }
        </div>
    );
};

export default ItemDetail;