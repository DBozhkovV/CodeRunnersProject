import React from 'react';
import photo from '../images/men.jpg'
import classes from './Profile.module.css'

function Profile() {
    return(
        <div className={classes.background}>
            <button>Go back</button>
            <div className = {classes.card}>
                <div className = {classes.content}>
                    <img className = {classes.photo} src={photo} alt = "Profile pic"></img>
                    <div className = {classes.field}>
                        <h2><b>Name</b></h2>
                        <h4>Georgi Petrov</h4>
                    </div>
                    <div className = {classes.field}>
                        <h2><b>Email</b></h2>
                        <h4>georgi.petrov@gmail.com</h4>
                    </div>
                    <div className = {classes.field}>
                        <h2><b>User ID</b></h2>
                        <h4>34324-gfb2345-ghfe4r5-ghr</h4>
                    </div>
                    <div className = {classes.field}>
                        <h2><b>Position</b></h2>
                        <h4>Mobile developer</h4>  
                    </div>
                    <div className = {classes.field}>
                        <h2><b>Age</b></h2>
                        <h4>23</h4>
                    </div>
                    
                </div>
            </div>    
        </div>    
    );
}

export default Profile;
