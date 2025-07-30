import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header className="main-header">
      <h1>Tienda Feber</h1>

      <nav>
        <ul className="nav-list">
          <li className="nav-item">Equipos</li>
          <li className="nav-item">Componentes</li>
          <li className="nav-item">Perifericos</li>
          <li className="nav-item">Notebooks</li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
  )
}

export default NavBar;