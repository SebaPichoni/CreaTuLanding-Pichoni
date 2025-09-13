import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img,}) => {
  return (
    <div className="itemCard">
        <img src={img} alt={nombre} />
        <h3 style={{fontSize: "1.1rem"}}> Nombre: {nombre} </h3>
        <p> Precio: {precio}</p>
        <p> Id: {id}</p>
        <Link to={`/Item/${id}`}>
          <button> Ver detalles </button>
        </Link>
        
    </div>
  )

}

export default Item

