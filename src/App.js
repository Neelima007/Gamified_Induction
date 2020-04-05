import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Butiles from './components/Butiles';
import ForgotPassword from './components/ForgotPassword';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
 
  const routing = (
    <BrowserRouter>
        
        
         <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <Route path="/Login" component={Login} />
        <Route path="/Butiles" component={Butiles} />
    </BrowserRouter>
)

 
 
  return (
    <div className="App">
    {routing}
      
    </div>
  );
}

export default App;
