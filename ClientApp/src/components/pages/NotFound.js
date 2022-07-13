import React from "react";
import "../../components/App.css";
import { useNavigate } from 'react-router-dom'

function NotFound(){
    const navigate = useNavigate();

    const navHome = () => {
        navigate("/");
        window.location.reload();
    }

    return(

            <div className="d-flex justify-content-center align-items-center" id="main">
                <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
                <div className="inline-block align-middle">
                    <h2 className="font-weight-normal lead" id="desc">The page you requested was not found.</h2>
                </div>
                <div className="inline-block align-middle" >
                <button className="btn-dark" onClick={navHome}>Go back</button>
                </div>
            </div>
            

    )
}

export default NotFound;