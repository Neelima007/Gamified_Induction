import React, { Component } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
class Login extends Component {
  render() {
    return (
      <div id="login">
        <br />
        <br />
      <div className="Login"> 
      <div className="t"><h2> LOGIN </h2></div>
      <form>
      <div className='e'>
      &nbsp;&nbsp;Email ID :&nbsp; 
      <input type="email" placeholder="Email ID (xyz@abcd.com)" name="email"size ="30" required></input>
      </div>
      <br/>
       <div className='p'>
         Password :&nbsp;
       <input type="password" placeholder="Password" name="psw" size ="30" required></input>
       </div>
       <br />
       <br />
       <Link to="/SignUp"><button class="button2">Sign Up</button></Link>
       <Link to="/Butiles"><button class="button1"> Login</button></Link>
      <div>

          
      <Link to="/ForgotPassword"><button class ="button3">Forgot Password</button></Link>
        </div>
      </form>
      </div>
      </div>
    );

    }
  }
      export default Login