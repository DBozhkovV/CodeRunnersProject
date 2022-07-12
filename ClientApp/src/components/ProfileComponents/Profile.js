import React, { useState, useEffect } from 'react';
import photo from '../images/men.jpg'
import classes from './Profile.module.css'
import jwt from 'jwt-decode';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Profile() {
    const [user, setUser] = useState([]);
    const t = jwt(localStorage.getItem("token"));
    let Id = t['http://schemas.microsoft.com/ws/2008/06/identity/claims/primarygroupsid'];

    useEffect(() => {
        const getUser = async () => {
            axios.get(`https://localhost:7031/UserList/${Id}`)
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        }
        getUser();
    }, []);
   
    return(
        <div className={classes.background}>
            <Link to={`/`} className="btn btn-outline-dark me-2">Go back</Link>
            <div className = {classes.card}>
                <div className = {classes.content}>
                    <img className = {classes.photo} src={photo} alt = "Profile pic"></img>
                    <div className = {classes.field}>
                        <h2><b>Name</b></h2>
                        <h4>{user.userName}</h4>
                    </div>
                    <div className = {classes.field}>
                        <h2><b>Email</b></h2>
                        <h4>{user.email}</h4>
                    </div>
                    <div className = {classes.field}>
                        <h2><b>User ID</b></h2>
                        <h4>{user.id}</h4>
                    </div>
                    <div className = {classes.field}>
                        <h2><b>Position</b></h2>
                        <h4>{user.position}</h4>  
                    </div>
                    <div className = {classes.field}>
                        <h2><b>Age</b></h2>
                        <h4>{user.age}</h4>
                    </div>  
                </div>
            </div>    
        </div>    
    );
}

export default Profile;
