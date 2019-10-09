import React from 'react';

import Button from './Button';

import Counter from './Counter';

import Form from './Form';

function App2 (props) {
 
  return (
    <React.Fragment>
		<Form notas={props.notasUno} />
		<hr/>
		<Form notas={['hola', 'chau']} />
		<hr/>
	 	<Counter initialValue={5} />
		<hr/>
		<Counter initialValue={13} />
		<hr/>
		<Counter />
		<hr/>
      <Button />
    </React.Fragment>
  )
}

export default App2;
