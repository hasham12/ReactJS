import React, {Component} from 'react'

export default class ForgetPassword extends Component{
    render(){
        return(
            <div className="text-center">
            <form className="form-signin">
            <h3>Forget Password</h3>

            <div className="form-group">
                <label> Enter <b>Registerd</b> Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Sen you a Link on <b>register</b> email address
            </p>
        </form>
        </div>

            // <body class="text-center">
            // <form class="form-signin">
            // <img class="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
            // <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            // <label for="inputEmail" class="sr-only">Email address</label>
            // <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            // <label for="inputPassword" class="sr-only">Password</label>
            // <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            // <div class="checkbox mb-3">
            // <label>
            // <input type="checkbox" value="remember-me"> Remember me
            // </label>
            // </div>
            // <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            // <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
            // </form>
            // </body>

        )
    }
}