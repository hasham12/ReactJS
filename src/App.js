import React from 'react';
import logo from './logo.svg';
import '../src/bulma.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './component/Login.component';
import SignUp from './component/signup.component';
import ForgetPassword from './component/Forget.component';
import Card from './component/Card.component';
import Navbar from './component/Navbar.component';
import Sidebar from './component/Sidebar.component';
import Bulma from './component/bulma'
import Dash from './component/Dashboard.component';
import Signin from './component/signin.component';

function App() {
  return (<Router>

    <div>
    {/* <Dash/> */}
    </div>

      {/* <div className="App"> 
       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Team Management</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/card-in"}>Card</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        {/* <Sidebar/> */}
        {/* <Bulma/>  */}

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Signin} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/forget-pass"component={ForgetPassword}/>
            <Route path="/Nav-bar"component={Navbar}/>
            <Route path="/card-in" component={Card}/> 
            <Route path="/Dash-board" component={Dash} />
           </Switch>
        </div>
       </div> 

     {/* </div>  */}

  

    </Router>
  );
}

export default App;
