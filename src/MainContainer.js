import React from 'react'
import {  withRouter } from 'react-router-dom';
import {  Redirect } from 'react-router-dom';
import cookie from 'react-cookies';
import crypto from 'crypto-js'
import axios from 'axios'
import PayBill from './PayBill'
import Another from './Another'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {  BrowserRouter,  Route} from 'react-router-dom';
import login from './login'


	function handleSubmit(e){
		//console.log('log out');
		//cookie.remove('isLoggedInCookie');
		console.log("HERE");
		cookie.remove('sessionData');
		//console.log('log out isLoggedIn: '+cookie.load('isLoggedInCookie'));
		//console.log('log out sessionData: '+cookie.load('sessionData'));
		//this.setState({isLoggedIn: 'N'});
		
	}

	function handleData(e){
			var respdatatable = [];
			//console.log("SENDING REQUEST");
			axios.post('http://172.16.20.16:8080/rpc',{requestid:'GetPayBills', User: e.username, sessionid: e.apiSessId}).then(
				resp=>{
			//		console.log(resp.data.data);
					respdatatable = JSON.stringify(resp.data.data);
						this.setState({dataTable: respdatatable});
					}
				);
			}

function MainContainer(props){

	const sessData = JSON.parse(crypto.AES.decrypt(cookie.load('sessionData'),'secret').toString(crypto.enc.Utf8));
	console.log(sessData.LoggedIn);
	if(sessData.LoggedIn=='N'){
		return(<h1>aldaa</h1>);
	} else {
			return(			
			<div>
				<Navbar bg="light" expand="lg">
				  <Navbar.Brand>Wassaaap-Bitcheees</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
				      <Nav.Link href="./PayBill" >PayBill</Nav.Link>
				      <Nav.Link href="./Another">Another</Nav.Link>
				  	</Nav>
				    <Form inline>						   
				      <Button variant="outline-dark" href='./login' onClick={handleSubmit}>Logout</Button>
				    </Form>
				  </Navbar.Collapse>
				</Navbar>						
				<div>
					{
					 props.children
					}
				</div>
			</div>);
	}
}



export default MainContainer