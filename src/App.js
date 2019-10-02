import React from 'react';
import Logo from './logo.svg';
import './App.css';

// Importar el component saludo
import Saludo from './Saludo';

// Importar el component nav
import Nav from './Nav';

function App () {
  const imgStyle = {
    width: '200px',
  }
  return (
    <React.Fragment>
      {/* Componente Nav  */}
      <Nav 
        enlaces={[
          {texto: 'Home', url:'/'},
          {texto: 'Quienes', url: '/quienes-somos'},
          {texto: 'Productos', url: 'productos'},
          {texto: 'Contacto', url: 'contacto'},
        ]}
      />

      {/* Componente Saludo  */}
      <Saludo texto='Hello world' prueba='123' />
      <Saludo texto='Hola mundo' prueba='34345' />
      <Saludo texto='Bon dia' prueba='sfsdf' />

      <label htmlFor="user">Username:</label>
      <input type="text" name="user" id="user" />
      <br />
      <input type="radio" name="hobbie" id="hobbie" />
      <label htmlFor="hobbie">Radio</label>
      <br />
      <header className="main-header"></header>
      <img src={Logo} alt="logo de React" style={imgStyle} />

      <Nav
        enlaces={[
          { texto: 'F.A.Q.', url: '/faq' },
          { texto: 'Legales', url: '/legales' },
        ]}
      />
    </React.Fragment>
  )
}

export default App;
