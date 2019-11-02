import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container,Button} from 'react-bootstrap';

class PayBill extends React.Component{

	
	constructor(e){
		super(e);
		console.log('Paybill orson ***');	
		this.handleDataPaybill();
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(e){
		alert("Clicked button num: " + e);
	}

	handleDataPaybill(){
		console.log('Handling data *****');
		let rowbill = [];
		let cnt=0;
		for(var i = 0; i < 10 ; i++){
			let columnbill = [];
			

			for(var j =0; j < 4 ; j++)
			{
				columnbill.push(<td variant='col'>Row {i} {j}'</td>);
			}

			columnbill.push(<td> <Button className='btn-block' variant='outline-dark' onClick={ () => this.handleClick(cnt++)}>Update</Button></td>);


			console.log('Row' + i);
			rowbill.push(<tr>{columnbill}</tr>);
		}

		return rowbill

	}

	render() {
		return(
				<Container> PayBill Class 
					<Table striped bordered hover>
					<thead>
						<th>First</th>
						<th>Second</th>
						<th>Third</th>
						<th>Forth</th>
						<th>Fifth</th>
					</thead>
					<tbody>{this.handleDataPaybill()}</tbody>						
					</Table>
				</Container>	
				
			);
	}
}

export default PayBill