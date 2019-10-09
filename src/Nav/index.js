import React from 'react';

const Nav = (props) => {
	const { enlaces } = props;
	return (
		<nav>
			<ul>
				{
					enlaces.map((unEnlace, i) => {
						return (
							<li key={i} id={`item-${i}`}>
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