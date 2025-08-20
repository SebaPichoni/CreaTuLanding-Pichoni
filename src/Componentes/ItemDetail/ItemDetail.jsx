import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id,nombre,precio,img, stock}) => {

  const [agregarCantidad, setAgregarCantidad] =useState(0)

  const manejoCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("productos agregados: " + cantidad)
  }
  
  return (

    <div className= 'contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam aspernatur nam placeat ullam quasi odio suscipit itaque iste incidunt eum hic sint dicta, ut repellat officia iusto! Perspiciatis, dignissimos?</p>
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Finalizar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejoCantidad} />)
        }
    </div>
  )
}

export default ItemDetail