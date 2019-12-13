import React from 'react';
import './producto.css';

function Producto (props) {
	return (
		<div className="un-producto">
			<h1>{props.nombre}</h1>
			<p>{props.descripcion}</p>
			<b>{props.precio}</b>
		</div>
	)
}

export default Producto;