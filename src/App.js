import React from 'react';
import Logo from './logo.svg';
import './App.css';
import Marquesina from './Marquesina';
import Producto from './Producto';
import Counter from './Counter'

function App () {
  var diaDeLaSemana = 'Jueves';
  var productos = [
    {
      nombre: 'TV',
      descripcion: 'Lorem ipsumo sdfs ert d',
      precio: 234234
    },
    {
      nombre: 'Compu',
      descripcion: 'Lorem ipsumo sdfs ert d',
      precio: 75675
    },
    {
      nombre: 'Celu',
      descripcion: 'Lorem ipsumo sdfs ert d',
      precio: 890890
    },
    {
      nombre: 'TV',
      descripcion: 'Lorem ipsumo sdfs ert d',
      precio: 234234
    },
    {
      nombre: 'Compu',
      descripcion: 'Lorem ipsumo sdfs ert d',
      precio: 75675
    },
    {
      nombre: 'Celu',
      descripcion: 'Lorem ipsumo sdfs ert d',
      precio: 890890
    },
    {
      nombre: 'TV',
      descripcion: 'Lorem ipsumo sdfs ert d',
      precio: 234234
    },
    {
      nombre: 'Compu',
      descripcion: 'Lorem ipsumo sdfs ert d',
      precio: 75675
    },
    {
      nombre: 'Celu',
      descripcion: 'Lorem ipsumo sdfs ert d',
      precio: 890890
    },
  ];
  var styles = {
    width: '900px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    border: 'solid 5px red',
  };
  return (
    <React.Fragment>
      <div style={styles}>
      {
        productos.map(function (unProducto) {
          return (
            <Producto 
              nombre={unProducto.nombre} 
              descripcion={unProducto.descripcion}
              precio={unProducto.precio}
            />
          )
        })
      }
      </div>

      <Counter />

      <Marquesina texto="Saludo" />
      <Marquesina texto="Hello" />
      <Marquesina texto="Bon Dia" />
      <Marquesina texto="Otro saludo" />

      <div className="caja-verde">
        Soy el div caja verde
      </div>
      <div>
        <h2>¡Hola hoy es {diaDeLaSemana}!</h2>
        <img src={Logo} alt="el logotipo" />
      </div>
      <section>
        <h3>Sección de productos</h3>
      </section>
    </React.Fragment>
  )
}

export default App;
