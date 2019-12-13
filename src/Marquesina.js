import React from 'react';
import './marquesina.css';

function Marquesina (props) {
	var marqueStyles = {
		fontSize: '60px',
		color: 'red'
	}
	return (
		<h1 style={marqueStyles}>
			{props.texto}
		</h1>
	);
};

export default Marquesina;