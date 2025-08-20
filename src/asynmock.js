const ProductList =[
    {id:"1", nombre: "Auricular Gamer", precio: 95000, img: "/imagenes/auricularGamer.png", idCat: "perifericos", stock: 20},
    {id:"2", nombre: "Mouse Gamer", precio: 85000, img: "/imagenes/mouseGamer.png", idCat: "perifericos", stock: 50},
    {id:"3", nombre: "Mouse Pad Gamer", precio: 45000, img: "/imagenes/mousepadGamer.png", idCat: "perifericos", stock: 100},
    {id:"4", nombre: "Teclado Gamer", precio: 150000, img: "/imagenes/tecladoGamer.png", idCat: "perifericos", stock: 15},
    {id:"5", nombre: "Microfono Gamer", precio: 110000, img: "/imagenes/microfonoGamer.png", idCat: "perifericos", stock: 25},
    {id:"6", nombre: "Notebook Gamer", precio: 2450000, img: "/imagenes/notebookAsusRog.png", idCat: "notebooks", stock: 5},
    {id:"7", nombre: "PC Gamer", precio: 1850000, img: "/imagenes/pcGamer.png", idCat: "equipos", stock: 10},
    {id:"8", nombre: "Mother Gamer", precio: 860000, img: "/imagenes/motherGamer.png", idCat: "componentes", stock: 20},
    {id:"9", nombre: "AMD Ryzen 7", precio: 710000, img: "/imagenes/amdRyzen7.png", idCat: "componentes", stock: 25},
] 


export const getProductList = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(ProductList)
        }, 800);
    })
}

export const getUnProducto = (id) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            const producto = ProductList.find(item=>item.id=== id)
            resolve(producto)
        },800)
    })
}

export const getProductCat = (idCat) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const productCategoria = ProductList.filter(item => item.idCat === idCat)
            resolve(productCategoria)
        })
    },500)
}