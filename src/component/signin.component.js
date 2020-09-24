import React from 'react'
import './signin.component.css'
import logo from './bulma.png';

export default class Signin extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(

            <div className="text-center body-div">
            <form className="form-signin">
          <img className="mb-4" src={logo} alt="" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit"> <a href="/Dash-board"></a> Sign in</button>
          <p className="forgot-password text-right">
                Forgot <a href="/forget-pass">password?</a>
            </p>
            <p className="sign-up text-muted"> New user wanna <a href="/sign-up"> Sign Up?</a></p>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
        </form>
        </div>

        );
    }
}