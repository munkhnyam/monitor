import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container,Button} from 'react-bootstrap';
import axios from 'axios';
import cookie from 'react-cookies';
import crypto from 'crypto-js'


class PayBill extends React.Component{

	
	constructor(e){
		super(e);
		const num1 = 1;
		console.log('Paybill orson ***');	
		const sessData = JSON.parse(crypto.AES.decrypt(cookie.load('sessionData'),'secret').toString(crypto.enc.Utf8));	
		this.handleClick=this.handleClick.bind(this);
		this.state= {edit: num1, tableData: [],dataTable: [],sessionData: sessData,isLoggedIn: sessData.LoggedIn};
		this.addRow=this.addRow.bind(this);
		this.delRow=this.delRow.bind(this);		
		this.getData(sessData);
	}

	getData(e){
		var respdatatable = [];
			//console.log("SENDING REQUEST");
			axios.post('http://172.16.20.16:8080/rpc',{requestid:'GetPayBills', User: e.username, sessionid: e.apiSessId}).then(
				resp=>{
						respdatatable = JSON.parse(resp.data.data || '{}');
						this.setState({dataTable: respdatatable});
					}
				);
	}

	handleClick(e){
		alert("Clicked button num: " + e);
	}

	handleDataPaybill(e){
		console.log('Handling data *****');
		console.log('tables og data: '+ this.state.dataTable);
		let cnt=0;

		foreach(){
			
		}

		if(this.state.edit == 1)
		{

				//let columnbill = [];
				for(var i = 0; i < 3 ; i++){
					
					this.state.tableData[i] = [];

					//columnbill.push(<td variant='col'>{i}</td>);
					let columnbill=[];
					for(var j =0; j < 4 ; j++)
					{						
							columnbill[j]=<td variant='col' value = '{i}'>Row {i} {j}'</td>;
					}

					columnbill.push(<td> <Button className='btn-block' variant='outline-dark' onClick={ () => this.handleClick(cnt)}>Update</Button></td>);
					columnbill.push(<td> <Button className='btn-block' variant='outline-dark' onClick={ () => this.delRow(i)}>DELETE</Button></td>);
					this.state.tableData[i]=<tr>{columnbill}</tr>;
					
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

	delRow(e){
		alert("Clicked button num: " + e);		
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
						<th>Sixth</th>
					</thead>
					<tbody>{this.handleDataPaybill()}</tbody>						
					</Table>
				</Container>	
				
			);
	}
}

export default PayBill