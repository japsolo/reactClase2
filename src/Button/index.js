import React from 'react';

import styled from 'styled-components';

const Button = (props) => {
	let mainBg = '0, 0, 0';

	const ButtonStyled = styled.button`
		background-color: rgba(${mainBg}, 0.4);
		color: #fff;
		padding: 15px 30px;
		border: solid 1px #ccc;
		&:hover {
			background-color: rgba(${mainBg}, 1);
		}
		i {
			font-size: 1.5em;
		}
	`;

	return (
		<ButtonStyled>
			<i>Hola, soy un botón</i>
		</ButtonStyled>
	)
}

export default Button;