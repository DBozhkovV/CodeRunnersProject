import React, { useState } from "react";

// !!! PROBLEM KOGATO SE REGISTRIRA URL-A se smenq na dannite na registriraliqt se
// !!! PROVERKA DALI REPASSWORD-A suvpada s passworda

function Register() {
    const [firstName, setFirstName] = useState(0);
    const [lastName, setLastName] = useState(0);
    const [password, setPassword] = useState(0);
    const [rePassword, setRePassword] = useState(0);
    const [email, setEmail] = useState(0);

    const register = () => {
        
        const requestOptions = {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({
                firstName: firstName, 
                lastName: lastName,
                password: password,
                rePassword: rePassword,
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
                    type="firstName"
                    placeholder="Enter first name"
                    name="firstName"
                    onChange={e => setFirstName(e.target.value)}
                    required
                />
              </div>
              <div className="form-group">
                <input 
                    className="form-control"
                    type="lastName"
                    placeholder="Enter last name"
                    name="lastName"
                    onChange={e => setLastName(e.target.value)}
                    required
                />
              </div>
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
              <div className="form-group">
                  <input 
                      className="form-control"
                      type="password"
                      placeholder="Confirm password"
                      name="re_password"
                      minLength='8'
                      onChange={e => setRePassword(e.target.value)}
                      required
                />
              </div>
            <button className="btn btn-primary" type="submit" onClick={register}>Register</button>
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

export default Register;