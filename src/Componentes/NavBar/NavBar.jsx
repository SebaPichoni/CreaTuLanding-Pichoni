import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="main-header">
      <Link to="/">
      <img className="logoFeber" src={"../../../public/imagenes/logoFeber.png"} alt="Logo Feber" />
      </Link>

      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="categoria/equipos">
              Equipos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="categoria/componentes">
              Componentes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="categoria/perifericos">
              Perifericos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="categoria/notebooks">
              Notebooks
            </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
  )
}

export default NavBar;