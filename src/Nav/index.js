import React from 'react';

const Nav = (props) => {
	const enlaces = props.enlaces;
	return (
		<nav>
			<ul>
				{
					enlaces.map(unEnlace => {
						return (
							<li>
								<a href={unEnlace.url}>{unEnlace.texto}</a>
							</li>
						)
					})
				}
			</ul>
		</nav>
	)
}

export default Nav;