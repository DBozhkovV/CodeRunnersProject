import React, { useRef } from "react";
import axios from 'axios';
// !!! PROBLEM KOGATO SE REGISTRIRA URL-A se smenq na dannite na registriraliqt se
// !!! PROVERKA DALI REPASSWORD-A suvpada s passworda

function Register() {

    const firstNameField = useRef();
    const lastNameField = useRef();
    const passwordField = useRef();
    const rePasswordField = useRef();
    const emailField = useRef();

    const register = (event) => {
       
        event.preventDefault();
        const name = firstNameField.current.value;
        // const enteredlastName = lastName.current.value;
        const email = emailField.current.value;
        const password = passwordField.current.value;
        // const enteredRePassword = rePassword.current.value;

        axios.post(`https://localhost:7031/Register`, {email, password, name})
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div className="container mt-5">
            <h1>Sign up</h1>
            <p>Create your account</p>
            <form>
              <div className="form-group">
                <input 
                    className="form-control"
                    type="firstName"
                    placeholder="Enter first name"
                    name="firstName"
                    ref = {firstNameField}
                    required
                />
              </div>
              <div className="form-group">
                <input 
                    className="form-control"
                    type="lastName"
                    placeholder="Enter last name"
                    name="lastName"
                    ref = {lastNameField}
                    required
                />
              </div>
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
                      ref = {passwordField}
                      required
                />
              </div>
              <div className="form-group">
                  <input 
                      className="form-control"
                      type="password"
                      placeholder="Confirm password"
                      name="re_password"
                      minLength='8'
                      ref = {rePasswordField}
                      required
                />
              </div>
            <button className="btn btn-primary" type="submit" onClick={register}>Register</button>
            </form>
        </div>
    );
};

export default Register;