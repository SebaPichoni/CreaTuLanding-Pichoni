import { useEffect, useState } from 'react';
//import { getProductList, getProductCat } from '../../asynmock';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import {db} from "../../services/config"
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  
  const {idCategoria} = useParams()

  useEffect(()=>{
    const  misProductos = idCategoria ? query(collection(db,"productos"), where("idCat", "==", idCategoria)) : collection(db,"productos")
    
    getDocs(misProductos)
      .then(res=> {
        const nuevosProductos = res.docs.map(doc=>{
          const data = doc.data()
          return {id: doc.id, ... data}
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log (error))
  },[idCategoria])

//  useEffect(()=>{
//    const funcionProduct = idCategoria ? getProductCat : getProductList

//   funcionProduct(idCategoria)
//   .then(res=>setProductos(res))


    /*getProductList()
    .then(respuesta=>setProductos(respuesta))
    .catch(error=>console.log(error))*/
//  },[idCategoria])



  return (
    <div>
      <h2 style={{textAlign: "center"}}> Productos Destacados </h2>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer
