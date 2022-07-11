import React, { useState, useRef,useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Register() {
    const navigate = useNavigate();
    const [result, setResult] = useState();
    const [pass, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showLengthMessage, setShowLengthMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    const firstName = useRef();
    const passwordField = useRef();
    const rePassword = useRef();
    const emailField = useRef();

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
        const name = firstName.current.value;
        const email = emailField.current.value;
        const password = passwordField.current.value;


        setResult(0);

        axios.post(`https://localhost:7031/Register`,{email,password,name})
        .then(response => {
            setResult(response.status)
        })
        .catch(error => {
            console.log(error)
        })
           
        console.log(result);
        navigate("/success");
        window.location.reload();
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
                    placeholder="Enter username"
                    name="firstName"
                    ref = {firstName}
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
                      id="pswd"
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={pass}
                      onChange={(e) => { setPassword(e.target.value) }}
                      minLength='8'
                      ref = {passwordField}
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
            <button className="btn btn-primary" type="submit" onClick={register}>Register</button>
            </form>
        </div>
    );
};

export default Register;