import React from "react"
import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({productos}) => {
  return (
    <div className="itemListGrid">
        {productos.map(item => <Item
        key={item.id}
        id={item.id}
        nombre={item.nombre}
        precio={item.precio}
        img={item.img}
      />)}
    </div>
  )
}
export default ItemList

