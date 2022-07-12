import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {
    const navigate = useNavigate();

    const logoutAction = () => {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
        navHome();
    }

    const navHome = () => {
        navigate("/");
        window.location.reload();
    }

    return(
        <div className="container mt-5">
            <h1>Logout</h1>
            <p>Do you want to logout?</p>
            <form>
                <button className="btn btn-primary" type="submit" onClick={logoutAction}>Yes</button>
                <Link to={'/'} className="btn btn-primary">No</Link> 
            </form>
        </div>
    );
};

export default Login;