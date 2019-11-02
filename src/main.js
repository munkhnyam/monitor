import React from 'react'
import {  withRouter } from 'react-router-dom';
import {  Redirect } from 'react-router-dom';
import cookie from 'react-cookies';
import crypto from 'crypto-js'
import axios from 'axios'
import PayBill from './PayBill'

class main extends React.Component{
	constructor(e){
		super(e);
		//this.state = {isLoggedIn: cookie.load('isLoggedInCookie')}

		//console.log('sessData: '+ sessData.LoggedIn + ' ' + sessData.username);
		//this.state={isLoggedIn: '',dataTable: []}
		const sessData = JSON.parse(crypto.AES.decrypt(cookie.load('sessionData'),'secret').toString(crypto.enc.Utf8));
		this.state={
			sessionData: sessData,
			isLoggedIn: sessData.LoggedIn,
			dataTable: []
		}
		this.handleSubmit=this.handleSubmit.bind(this);
		console.log('Loggin: ' + sessData.isLoggedIn);
	}

	componentDidMount() {
		var rettable = [];
		console.log('sessData: ' + this.state.sessionData);
		//this.handleData(this.state.sessionData);		
	/*	this.setState({dataTable: rettable}, ()=>{
				console.log('dataTable state has changed');
		});
	*/	
	}

	handleSubmit(e){
		//console.log('log out');
		//cookie.remove('isLoggedInCookie');
		cookie.remove('sessionData');
		//console.log('log out isLoggedIn: '+cookie.load('isLoggedInCookie'));
		//console.log('log out sessionData: '+cookie.load('sessionData'));
		this.setState({isLoggedIn: 'N'});
	}

	handleData(e){
			var respdatatable = [];
			console.log("SENDING REQUEST");
			axios.post('http://172.16.20.16:8080/rpc',{requestid:'GetPayBills', User: e.username, sessionid: e.apiSessId}).then(
				resp=>{
					console.log(resp.data.data);
					respdatatable = JSON.stringify(resp.data.data);
						this.setState({dataTable: respdatatable});
					}
				);
			}
//<div>dataTable {this.state.dataTable} </div>
	render(){
		if(this.state.isLoggedIn === 'Y'){
			return( <div>what up bithcessss
				<input type="submit" value="Sign out" onClick={this.handleSubmit} >
				</input>
					<div><PayBill /></div>
				</div>				
				);
		} 
		else{
			return(<Redirect to='/'/>)
		}
		



		//return(<div>Hello</div>);
		
	}
}


export default withRouter(main)

