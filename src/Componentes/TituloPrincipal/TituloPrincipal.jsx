import React from 'react'

const TituloPrincipal = ({saludo, producto}) => {
 console.log(producto)

  return (
    <h1>{saludo}</h1>
  )
}

export default TituloPrincipal