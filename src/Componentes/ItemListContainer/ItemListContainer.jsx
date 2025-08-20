import { useEffect, useState } from 'react';
import { getProductList, getProductCat } from '../../asynmock';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  
  const {idCategoria} = useParams()

  useEffect(()=>{
    const funcionProduct = idCategoria ? getProductCat : getProductList

    funcionProduct(idCategoria)
    .then(res=>setProductos(res))


    /*getProductList()
    .then(respuesta=>setProductos(respuesta))
    .catch(error=>console.log(error))*/
  },[idCategoria])

  console.log(productos)

  return (
    <div>
      <h2 style={{textAlign: "center"}}> Productos Destacados </h2>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer
