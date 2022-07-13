import React, { useState, useEffect } from 'react';
import classes from './Profile.module.css'
import jwt from 'jwt-decode';
import axios from 'axios';
import '../../components/App.css';
import { Link } from 'react-router-dom';

function Profile() {
    const [user, setUser] = useState([]);
    const [age, setAge] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const t = jwt(localStorage.getItem("token"));
    const token = localStorage.getItem("token");
    console.log(token)
    console.log(t);
    
    let Id = t['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

    const targetDiv = document.getElementById("changeAge");
    const targetDiv2 = document.getElementById("changeNumber");
    const targetDiv3 = document.getElementById("changeImage");

    useEffect(() => {
        document.getElementById("changeAge").style.display = "none";
        document.getElementById("changeNumber").style.display = "none";
        document.getElementById("changeImage").style.display = "none";
    }, []);

  


    function btnfunc() {
        if (targetDiv.style.display !== "none") {
          targetDiv.style.display = "none";
        } else {
          targetDiv.style.display = "block";
        }
    };

    function btnfunc2() {
        if (targetDiv2.style.display !== "none") {
          targetDiv2.style.display = "none";
        } else {
          targetDiv2.style.display = "block";
        }
    };

    function btnfunc3() {
        if (targetDiv3.style.display !== "none") {
          targetDiv3.style.display = "none";
        } else {
          targetDiv3.style.display = "block";
        }
    };

    useEffect(() => {
        const getUser = async () => {
            axios.get(`https://localhost:7031/UserList/${Id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        }
        getUser();
    }, []);

    console.log(user)
    const changeAge = async () => {
        axios.put(`https://localhost:7031/Register/age?age=${age}&id=${user.id}`,{},{ headers: {"Authorization" : `Bearer ${token}`} })
            .catch(error => {
                console.log(error)
            })
        window.location.reload();
    }


    const changeNumber = async () => {
        axios.put(`https://localhost:7031/Register/phone?phone=${phoneNumber}&id=${user.id}`,{},{ headers: {"Authorization" : `Bearer ${token}`} })
            .catch(error => {
                console.log(error)
            })
        window.location.reload();
    }

    const changeImage = async () => {
        axios.put(`https://localhost:7031/Register/image?image=${imageUrl}&id=${user.id}`,{},{ headers: {"Authorization" : `Bearer ${token}`} })
            .catch(error => {
                console.log(error)
            })
        window.location.reload();
    }


    return(
        <div className={classes.background}>
            <div>
            <Link to={`/`} className="btn btn-outline-dark me-2">Go back</Link>
            <button className="btn btn-outline-dark me-2 float-right" id="toggle" onClick={btnfunc}>Change age</button>
            <button className="btn btn-outline-dark me-2 float-right" id="toggle1" onClick={btnfunc2}>Change phone number</button>
            <button className="btn btn-outline-dark me-2 float-right" id="toggle1" onClick={btnfunc3}>Change Image (URL)</button>
            </div>
        <div id="wrapper">
            <div id="changeAge">
                <input type="text" placeholder="Enter age" id="inpAge" onChange={(e) => { setAge(e.target.value) }}/>
                <button onClick={changeAge}>Submit</button>
            </div>           
            
            <div id="changeNumber">
                <input type="text" placeholder="Enter phone number" id="inpAge" onChange={(e) => { setPhoneNumber(e.target.value) }}/>
                <button onClick={changeNumber}>Submit</button>
            </div>

            <div id="changeImage">
                <input type="text" placeholder="Enter Image URL" id="inpAge" onChange={(e) => { setImageUrl(e.target.value) }}/>
                <button onClick={changeImage}>Submit</button>
            </div>

        </div>
            <div className = {classes.card}>
                <div className = {classes.content}>
                    <img className = {classes.photo} src={user.image} alt = "Profile pic"></img>
                    <div className = {classes.field}>
                        <h2><b>Name</b></h2>
                        <h4>{user.userName}</h4>
                    </div>
                    <div className = {classes.field}>
                        <h2><b>Email</b></h2>
                        <h4>{user.email}</h4>
                    </div>

                    <div className = {classes.field}>
                        <h2><b>Position</b></h2>
                        <h4>{user.position}</h4>  
                    </div>
                    <div className = {classes.field}>
                        <h2><b>Age</b></h2>
                        <h4>{user.age}</h4>
                    </div>
                    <div className = {classes.field}>
                        <h2><b>Phone number</b></h2>
                        <h4>{user.phoneNumber}</h4>
                    </div>    
                </div>
            </div>    
        </div>    
    );
}

export default Profile;
