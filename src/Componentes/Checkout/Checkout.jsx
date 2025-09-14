import { useContext, useState } from "react"
import { CarritoContext } from "../../context/carritoContext"
import {db} from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

export const checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] =useState("")

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext)


  return (
    <div>
        <h2>CheckOut</h2>

        <form>
            {
                carrito.map(producto=>(
                    <div key={producto.item.id}>
                        <p>{producto.item.nombre} x {producto.cantidad} </p>
                        <p>{producto.item.precio}</p>
                        <hr/>
                    </div>
                ))
            }
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" />
            </div>
             <div>
                <label htmlFor="">Apellido</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="number" />
            </div>
             <div>
                <label htmlFor="">Mail</label>
                <input type="email" />
            </div>



        </form>
    </div>
  )
}
