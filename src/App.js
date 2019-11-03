import React from 'react';
import logo from './logo.svg';
import './App.css';
import login from './login'
import main from './main'
import Another from './Another'
import PayBill from './PayBill'
import MainContainer from './MainContainer'
import {  BrowserRouter,  Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Route exact path='/' component={login}/>      
     <Route path='/main' render={()=><MainContainer><PayBill /></MainContainer>}/>
     <Route path='/PayBill' render={()=><MainContainer><PayBill /></MainContainer>}/>
     <Route exact path='/Another' render={()=><MainContainer><Another /></MainContainer>}/>
    </BrowserRouter>
  );
}

export default App;
