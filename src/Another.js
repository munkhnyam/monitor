import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container,Button} from 'react-bootstrap';

class Another extends React.Component{

	
	constructor(e){
		super(e);
		console.log('Another orson ***');	
	
	}


	render() {
		return(
				<Container noGutters={true}>
					<h1> Another Class </h1>				
				</Container>	
				
			);
	}
}

export default Another
