import React, { useState, useRef,useEffect } from "react";



function Register() {

    const [pass, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showLengthMessage, setShowLengthMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    const firstName = useRef();
    const lastName = useRef();
    const password = useRef();
    const rePassword = useRef();
    const email = useRef();

    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        setIsCPasswordDirty(true);
    }

    useEffect(() => {
        if (isCPasswordDirty) {
            if (pass === cPassword) {
                setShowErrorMessage(false)
                if(pass.length < 8){
                    
                    setShowLengthMessage(true)
                    setCPasswordClass('form-control is invalid')
                }
                else{

                    setShowLengthMessage(false)
                    setCPasswordClass('form-control is-valid')
                }
            } else {
                setShowErrorMessage(true)
                setCPasswordClass('form-control is-invalid')
            }
        }
    }, [cPassword])

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

        firstName.current.value = lastName.current.value = email.current.value = password.current.value = rePassword.current.value = "";
    
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
                      id="pswd"
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={pass}
                      onChange={(e) => { setPassword(e.target.value) }}
                      minLength='8'
                      ref = {password}
                      required
                />
              </div>
              <div className="form-group">
                  <input 
                      className="form-control"
                      type="password"
                      id="repswd"
                      placeholder="Confirm password"
                      value={cPassword}
                    onChange={handleCPassword}
                      name="re_password"
                      minLength='8'
                      ref = {rePassword}
                      required
                />
              </div>
              {showErrorMessage  && isCPasswordDirty ? <div> Passwords did not match </div> : ''}
              {showLengthMessage && isCPasswordDirty ? <div> Password must have at least 8 characters </div> : ''}
            <button disabled={showLengthMessage || showErrorMessage && isCPasswordDirty ? true : false}className="btn btn-primary" type="submit" onClick={register}>Register</button>
            </form>
        </div>
    );
};

export default Register;