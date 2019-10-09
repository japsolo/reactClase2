import React, { Component } from 'react';

class Form extends Component {
	state = {
		notaNueva: '',
		notas: this.props.notas,
		api: ''
	}

	componentDidMount () {
		fetch('https://api.chucknorris.io/jokes/random')
			.then(res => res.json())
			.then(data => this.setState({api: data}));
	}

	handleChange = (e) => {
		const valorInput = e.target.value;
		this.setState({
			notaNueva: valorInput
		});
	}

	agregarNota = (e) => {
		e.preventDefault();
		const { notas, notaNueva } = this.state;
		this.setState({
			notas: [...notas, notaNueva],
			notaNueva: ''
		})
	}

	render () {
		const { notas, notaNueva, api } = this.state;
		return (
			<React.Fragment>
				<form onSubmit={this.agregarNota}>
					<input 
						name="txt" 
						onChange={this.handleChange} 
						value={notaNueva}	
					/>
					<button type="submit">Agregar</button>
				</form>
				<ul>
					{!!notas.length && notas.map((unaNota, i) => {
						return <li key={i}>{unaNota}</li>
					})}

					{!notas.length && <li>No hay notas</li>}
				</ul>

				<div>
					{
						<div>
							<img src={api.icon_url} alt="lo que sea" />
							<h1>{api.value}</h1>
						</div>
					}
				</div>
			</React.Fragment>
		)
	}
}

export default Form;