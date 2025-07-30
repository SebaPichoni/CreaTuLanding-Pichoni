import "./CartWidget.css"

const CartWidget = () => {

    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/846/846423.png"

  return (
    <div>   
        <img className="imgCarrito" src={imgCarrito} alt="Imagen del carrito" />

    </div>
  )
}

export default CartWidget