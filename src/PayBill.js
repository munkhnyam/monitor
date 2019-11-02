import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

class PayBill extends React.Component{

	
	constructor(e){
		super(e);
		console.log('Paybill orson ***');	
		this.handleDataPaybill();
	}

	handleDataPaybill(){
		console.log('Handling data *****');
		let rowbill = [];
		for(var i = 0; i < 10 ; i++){
			let columnbill = [];

			for(var j =0; j < 5 ; j++)
			{
				columnbill.push(<td variant='col'>Row {i} {j}'</td>);
			}


			console.log('Row' + i);
			rowbill.push(<tr>{columnbill}</tr>);
		}

		return rowbill

	}

	render() {
		return(
				<div> PayBill Class 
					<Table striped bordered hover>
					<thead></thead>
					<tbody>{this.handleDataPaybill()}</tbody>						
					</Table>
				</div>	
				
			);
	}
}

export default PayBill