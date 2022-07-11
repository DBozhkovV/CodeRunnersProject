import React, { useState } from "react";
import axios from 'axios';

function Admin() {
    const [password, setPassword] = useState(0);
    const [email, setEmail] = useState(0);
    const [result, setResult] = useState();

    const SignInAdmin = async () => {
        console.log(email);
        console.log(password);
        axios.post(`https://localhost:7031/controller`, {email, password})
            .then(response => {
                setResult(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        console.log(result);
    }
    
    return(
        <div className="container mt-5">
            <h1>Sign in</h1>
            <p>Sign into your Admin account</p>
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
            <button className="btn btn-primary" onClick={SignInAdmin}>Sign in</button>
            </form>
        </div>
    );
};

export default Admin;