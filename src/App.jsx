import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './components/Profile';

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if(isLoading){
    return <div className='cargando'>
      Cargando...
    </div>
  }
  
  if(error){
    console.log("Error: "+error)
    return <div>
      Error en la autenticacion
    </div>
  }

  return <div>
    <nav className='navegacion'>
      <h3>Gestion de usuarios</h3>
      <div>
        
      </div>
    </nav>
    <div className='contenedor'>
      <h1>Aplicacion Autenticacion</h1>
      { isAuthenticated ? <div>
        <p>Sesion Iniciada</p>
        <Profile/>
      </div> : <div>
        <p>Inicia sesion para comenzar</p>
      </div>}
    </div>
  </div> 
  
}

export default App
