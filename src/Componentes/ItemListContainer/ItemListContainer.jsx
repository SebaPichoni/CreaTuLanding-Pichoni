import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = (mensaje) => {
  return (
    <div className="item-list-container">
      <h2>{mensaje.ofertas}</h2>
      <p>Proximamente los mejores componentes de informática</p>
    </div>
  )
}

export default ItemListContainer