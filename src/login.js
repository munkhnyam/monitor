import React from 'react';
import './login.css'
import App from './App'
import {  Redirect } from 'react-router-dom';
import cookie from 'react-cookies';
import md5 from 'md5';
import crypto from 'crypto-js';
import axios from 'axios'
import {Form, Container, Row, Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component{
  constructor(props){
   super(props);
  this.state={username:'',pass:'', isLoggedIn: 'N'}
  this.handlePwd = this.handlePwd.bind(this);
  this.handleUsername = this.handleUsername.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  
  handleSubmit = () =>{       
    
  /*  axios.post('http://172.16.20.16:8080/rpc',{requestid:'Login', User: this.state.username, Pass: this.state.pass}).then(
        res =>{
            console.log(res.data);                      
            if(res.data.status === 'Success'){
              //  console.log('Success *******************************');
                this.setState({isLoggedIn: 'Y'}, ()=>{
                 console.log('State bolsn');
                this.handleLogin(res.data.sessionid);
                });
            } else
            {
                //console.log('Failure *******************************');
                this.setState({isLoggedIn: 'N'}, ()=>{
                  //console.log('State bolsn');
                this.handleLogin();
                });
            }
        }
      );
    */


    this.setState({isLoggedIn: 'Y'}, this.handleLogin);
  }

  handleLogin(){
    console.log('isLoggedIn login.js: '+this.state.isLoggedIn);

    console.log('handlelogin in *************');

    const data = {username: this.state.username, apiSessId: 'daraaniEbolgooroi', LoggedIn: this.state.isLoggedIn};
    //console.log('data: '+ JSON.stringify(data).toString());
    const dataenc = crypto.AES.encrypt(JSON.stringify(data), 'secret').toString();
    //console.log('dataenc: ' + dataenc);
    cookie.save('sessionData', dataenc , {path: '/'});
    //console.log('cookie sessionData: ' + cookie.load('sessionData'));
  }

  handleUsername(e){
    //console.log('username');
    this.setState({username: e.target.value});
    

  }

  handlePwd(e){
  //console.log('pwd');
  this.setState({pass: e.target.value});
 // cookie.save('isLoggedInCookie','Y',{path:'/'});
  }

  

   render(){
    if(this.state.isLoggedIn ==='Y'){
        return(<Redirect to='/main'/>);
      } else {        
              return (  
           /* <div className="App">
              <div className="login">
                <input type="text" placeholder="Username"  name="uname" value={this.state.username} onChange={this.handleUsername}></input>
                <input type="password" placeholder="Password"  id="pwd" value={this.state.pass} onChange={this.handlePwd}></input>
                <input type="submit" value="Sign in" onClick={this.handleSubmit} ></input>
                 </div>
                </div>        
              */

              <Container>
                   <Row className="justify-content-md-center mt-5" >
                        <Col  md="auto">
                          <Form >
                            <Form.Group>
                              <Form.Control type='text' placeholder="Username"/>
                            </Form.Group>
                            <Form.Group>
                              <Form.Control type='password' placeholder="************"/>
                            </Form.Group>
                            <Form.Group>
                              <Button className='btn-block' variant='outline-dark'>Submit</Button>
                            </Form.Group>                
                          </Form>
                        </Col>
                   </Row>              
              </Container>

        );  
      }
 }
}

export default Login
