import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavBar = ()=>{
    const { isAuthenticated } = useAuth0();

    return <nav className="navegacion">
        { isAuthenticated ? <div>
          <LogoutButton/>
        </div> : <div>
          <LoginButton/>
        </div>}
    </nav>
}

export default NavBar;