import React, { useState } from "react";

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
            <button className="btn btn-primary" type="submit" onClick={register}>Login</button>
            </form>
            <p className="mt-3">
                <button>Don't have an account?</button>
            </p>
            <p className="mt-3">
                <button>Forgot your Password?</button>
            </p>
        </div>
    );
};

export default Login;