import React, { useRef } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';

function Login() {
    const emailField = useRef();
    const passwordField = useRef();

    const loginAction = (event) => {
        event.preventDefault();
        const email = emailField.current.value;
        const password = passwordField.current.value;

        console.log(email);
        console.log(password);
        axios.post(`https://localhost:7031/controller`, {email, password})
            .then(response => {
                const token  =  response.data;
                localStorage.setItem("token", token);
                window.location.href = '/';
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div className="container mt-5">
            <h1>Sign in</h1>
            <p>Sign into your account</p>
            <form>
              <div className="form-group">
                  <input 
                      className="form-control"
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      ref = {emailField}
                      required
                  />
              </div>
              <div className="form-group">
                  <input 
                      className="form-control"
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      minLength='8'
                      ref={passwordField}
                      required
                />
              </div>
            <button className="btn btn-primary" type="submit" onClick={loginAction}>Sign in</button>
            </form>
            <p className="mt-3">
                <Link to={`/register`} className="btn btn-outline-dark me-2">Don't have an account?</Link>
            </p>
            <p className="mt-3">
            <Link to={''} className="btn btn-outline-dark me-2">Forgot your Password?</Link> 
            {/* DA SE DOBAVI LINK NA 55 red za zabravena parola */}
            </p>
        </div>
    );
};

export default Login;