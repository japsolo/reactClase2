import React from 'react';
 
// PropTypes
import PropTypes from 'prop-types';

const Saludo = (props) => {
	const { texto, prueba } = props;
	return (
		<React.Fragment>
			<h1>{texto}</h1>
			<p>{prueba}</p>
			<hr/>
			{props.children}
		</React.Fragment>
	)
}

Saludo.propTypes = {
	texto: PropTypes.string.isRequired,
	prueba: PropTypes.string.isRequired
}

Saludo.defaultProps = {
	texto: 'VALOR DEFAULT',
	prueba: 'PRUEBA'
}

export default Saludo;