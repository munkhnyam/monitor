import React from 'react';
import logo from './logo.svg';
import './App.css';
import login from './login'
import main from './main'
import {  BrowserRouter,  Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={login}/>      
     <Route exact path='/main' component={main}/>      
    </BrowserRouter>
  );
}

export default App;
