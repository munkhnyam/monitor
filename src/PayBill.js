import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container,Button} from 'react-bootstrap';

class PayBill extends React.Component{

	
	constructor(e){
		super(e);
		const num1 = 1;
		console.log('Paybill orson ***');	
		//this.handleDataPaybill("");
		this.handleClick=this.handleClick.bind(this);
		this.state= {edit: num1, tableData: []};
		this.addRow=this.addRow.bind(this);
	}

	handleClick(e){
		alert("Clicked button num: " + e);
	}

	handleDataPaybill(e){
		console.log('Handling data *****');
		
		let cnt=0;
		if(this.state.edit == 1){


				for(var i = 0; i < 10 ; i++){
					let columnbill = [];
					

					for(var j =0; j < 4 ; j++)
					{
						columnbill.push(<td variant='col'>Row {i} {j}'</td>);
					}

					columnbill.push(<td> <Button className='btn-block' variant='outline-dark' onClick={ () => this.handleClick(cnt++)}>Update</Button></td>);


					console.log('Row' + i);
					this.state.tableData.push(<tr>{columnbill}</tr>);
				}			
		}
		return this.state.tableData;

	}

	addRow(){		
		alert("state: " + this.state.edit);
		alert("table length: " + this.state.tableData.length);
		this.setState({edit: this.state.edit + 1 });
		let rowbill = [];
		this.state.tableData.push(<tr><td variant='col'></td><td variant='col'></td><td variant='col'></td><td variant='col'></td>
			<td><Button className='btn-block' variant='outline-dark' onClick={ () => this.handleClick(this.state.tableData.length-1)}>Update</Button></td></tr>);
		
	}

	render() {
		return(
				<Container noGutters={true}>
					<h1 style={{marginLeft:0}}> PayBill Class </h1>
					<Button variant="outline-success" className="float-left"  onClick={this.addRow}>ADD</Button>
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