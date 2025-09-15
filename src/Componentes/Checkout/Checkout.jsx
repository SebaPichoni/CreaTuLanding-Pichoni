import { useContext, useState } from "react"
import { CarritoContext } from "../../context/carritoContext"
import {db} from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import { Button } from "bootstrap"

export const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] =useState("")

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext)

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if(!nombre || !apellido || !telefono || !email ){
            setError("Por favor completa todos los campos")
            return
        }
    

    const orden = {
        items: carrito.map (producto => ({
            id: producto.item.id,
            nombre: producto.item.nombre,
            cantidad: producto.cantidad,
        })),
        total: total,
        fecha: new Date,
        nombre,
        apellido,
        email
    }

    addDoc(collection(db,"ordenes"), orden)
    .then(docRef => {
        setOrdenId(docRef.id)
        vaciarCarrito()
    })
    .catch(error=> {
        console.log("Error al crear la orden", error)
        setError("Se produjo un error al crear la orden!")
    })

}


  return (
    <div>
        <h2>CheckOut</h2>

        <form onSubmit={manejadorFormulario}>
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
                <input type="text" onChange={(e) => setNombre(e.target.value)}/>
            </div>
             <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e) => setApellido(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="number" onChange={(e) => setTelefono(e.target.value)}/>
            </div>
             <div>
                <label htmlFor="">Mail</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            {
                error && <p style={{color: "red"}}>{error}</p>
            }

            <button type="submit"> Confirmar compra </button>
            {
                ordenId && (
                    <strong>Gracias por tu compra! Generamos un numero de orden: {ordenId}</strong>
                )
            }



        </form>
    </div>
  )
}
