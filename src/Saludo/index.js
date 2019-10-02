import React from 'react';

const Saludo = ({ texto, prueba }) => {
	return (
		<React.Fragment>
			<h1>{texto}</h1>
			<p>{prueba}</p>
		</React.Fragment>
	)
}

export default Saludo;