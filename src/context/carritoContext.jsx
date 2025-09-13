// src/context/carritoContext.jsx

import React, { createContext, useContext, useState } from "react";

export const CarritoContext = createContext();

export const useCartContext = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarAlCarrito = (item, cantidad) => {
        // Lógica para agregar productos
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (productoExistente) {
            setCarrito(prev => prev.map(prod => prod.item.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod));
        } else {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    };

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    };

    // Objeto 'value' que contiene los estados y funciones
    const contextValue = {
        carrito,
        total,
        cantidadTotal,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito
    };

    return (
        <CarritoContext.Provider value={contextValue}>
            {children}
        </CarritoContext.Provider>
    );
};