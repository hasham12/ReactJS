import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default class Navbar extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
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

          

            </div>
            

        );
    }
}