import React, { Component } from 'react';

let login = 'dd'
let password = ''

const handleChangeEmailField = (e) => {
    e.preventDefault();
    //console.log(e.target.value.trim())
    password = e.target.value.trim()
    console.log(password)
    return (new Promise(async (resolve, reject) => {
        await resolve(e.target.value.trim());
    }))
}

const handleNameChangeField = (e) => {
    e.preventDefault();
    //console.log(e.target.value.trim())
    login = e.target.value.trim()
    console.log(login)
    return (new Promise(async (resolve, reject) => {
        await resolve(e.target.value.trim());
    }))
}



const submitCredentials = (e) => {
    e.preventDefault();
    //callback function would be to call toggleAuth
    return (new Promise(async (resolve, reject) => {
        console.log(e.target.value.trim());

        if ((login.trim() === 'ishanicroos') && (password.trim() === 'pass1234')) {
            console.log("good")
            window.location = "/app"
        }


    }))
}

class LoginAuth extends Component {

   
    render() {
        return (
            
            <form class= "container p-3 my-3 bg-light text-dark">
                <h3> Login</h3>
                {/* <div className='half-width white-bg'>
        <h4>Login</h4>
        <br/>
        <form action="">
          <div className='form-group'>
            <input type="text"  onChange={(e) => handleNameChangeField(e)}  className='form-control' placeholder='User Name'/>
          </div>
          <div className='form-group'>
            <input type="password" onChange={(e) => handleChangeEmailField(e)} className='form-control' placeholder='Password'/>
          </div>
          <button type="submit" onClick={(e) => submitCredentials(e)} className='btn btn-primary right-btn'>Log in</button>
        </form>
      </div> */}

                <div className="form-group">
                    <label>Email address/ User Name</label>
                    <input type="email" onChange={(e) => handleNameChangeField(e)} className="form-control" placeholder="Enter email/ User Name" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={(e) => handleChangeEmailField(e)} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" onClick={(e) => submitCredentials(e)} className="btn btn-primary btn-block">Login</button>

                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

            </form>
        );
    }
}

export default LoginAuth;