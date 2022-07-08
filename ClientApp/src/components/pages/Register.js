import React, { useState, useRef } from "react";

// !!! PROBLEM KOGATO SE REGISTRIRA URL-A se smenq na dannite na registriraliqt se
// !!! PROVERKA DALI REPASSWORD-A suvpada s passworda

function Register() {

    const firstName = useRef();
    const lastName = useRef();
    const password = useRef();
    const rePassword = useRef();
    const email = useRef();
    /*const [firstName, setFirstName] = useState(0);
    const [lastName, setLastName] = useState(0);
    const [password, setPassword] = useState(0);
    const [rePassword, setRePassword] = useState(0);
    const [email, setEmail] = useState(0);*/

    const register = (event) => {
       
        event.preventDefault();
        const enteredFirstName = firstName.current.value;
        const enteredlastName = lastName.current.value;
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;
        const enteredRePassword = rePassword.current.value;

        const requestOptions = {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({
                firstName: enteredFirstName, 
                lastName: enteredlastName,
                password: enteredPassword,
                rePassword: enteredRePassword,
                email: enteredEmail
            }),
            mode: 'cors'   
        };     
        
        console.log(requestOptions);
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
                    ref = {firstName}
                    required
                />
              </div>
              <div className="form-group">
                <input 
                    className="form-control"
                    type="lastName"
                    placeholder="Enter last name"
                    name="lastName"
                    ref = {lastName}
                    required
                />
              </div>
              <div className="form-group">
                  <input 
                      className="form-control"
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      ref = {email}
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
                      ref = {password}
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
                      ref = {rePassword}
                      required
                />
              </div>
            <button className="btn btn-primary" type="submit" onClick={register}>Register</button>
            </form>
        </div>
    );
};

export default Register;