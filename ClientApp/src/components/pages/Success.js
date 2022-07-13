import React, { useState, useEffect }from 'react';
import {Helmet, HelmetProvider} from "react-helmet-async";
import classes from './Success.module.css';
import { useNavigate } from "react-router-dom";

function Success() {
    const navigate = useNavigate();
    const[isSecondLottieLoaded, setSecondLottieLoaed] = useState(false);

    useEffect(() => {
        setTimeout(() => setSecondLottieLoaed(true), 3000);
        setTimeout(() => navigate("/",{state:{isLoaded: true}}), 7000);
    }, []);

    return(
        <HelmetProvider>

        <div className = {classes.content}>
            <Helmet>
                <script
                src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
                async
                ></script>
            </Helmet>
            <div className = {classes.success}>
                <h1>You have been registered successfully!</h1>
                {isSecondLottieLoaded && <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_bhths1ye.json"  background="transparent"  speed="1"  style={{width: "400px", height: "400px"}}  autoplay></lottie-player>}
                {!isSecondLottieLoaded && <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_y9jgwjuc.json"  background="transparent"  speed="0.7"  style={{width: "350px", height: "400px"}} autoplay></lottie-player>}

            </div>
        </div>
        </HelmetProvider>
    );
}

export default Success;