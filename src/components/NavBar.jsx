import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavBar = ()=>{
    const { isAuthenticated } = useAuth0();

    return <nav className="navegacion">
      <h3>Gestion de usuarios</h3>
      <div className="submenus">
        <a href="#home">Inicio</a>
        <a href="#users">Usuarios</a>
        <a href="#about">Sobre Nosotros</a>
      </div>
      { isAuthenticated ? <div>
        <LogoutButton/>
      </div> : <div>
        <LoginButton/>
      </div>}
    </nav>
}

export default NavBar;