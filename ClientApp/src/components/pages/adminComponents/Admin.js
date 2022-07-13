import React, { useRef } from "react";
import axios from 'axios';
import jwt from 'jwt-decode';

function Admin() {
    const emailField = useRef();
    const passwordField = useRef();

    const token = localStorage.getItem("token");
    if(token !== null){
        console.log("Error");
        window.location.href = '/';
        return null;
    }

    const SignInAdmin = async (event) => {
        event.preventDefault();
        const email = emailField.current.value;
        const password = passwordField.current.value;

        axios.post(`https://localhost:7031/controller`, {email, password})
            .then(response => {
                const token = response.data;
                const decodedToken = jwt(token);
                localStorage.setItem("token", token);
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

                if(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] !== "Admin"){
                    console.log("Error");
                    window.location.href = '/';
                    return null;
                }
                window.location.href = '/admin/selection';
            })
            .catch(error => {
                console.log(error)
            })
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
            <button className="btn btn-primary" onClick={SignInAdmin}>Sign in</button>
            </form>
        </div>
    );
};

export default Admin;