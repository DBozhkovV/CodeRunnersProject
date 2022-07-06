import React, { useState } from "react";
import { Link } from 'react-router-dom'

function Login() {
    const [password, setPassword] = useState(0);
    const [email, setEmail] = useState(0);

    const register = () => {
        console.log(email);
        
        const requestOptions = {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({
                password: password,
                email: email
            }),
            mode: 'cors'   
        };     
        console.log(requestOptions);
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
                      onChange={e => setEmail(e.target.value)}
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
                      onChange={e => setPassword(e.target.value)}
                      required
                />
              </div>
            <button className="btn btn-primary" type="submit" onClick={register}>Sign in</button>
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