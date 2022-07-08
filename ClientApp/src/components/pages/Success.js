import React, { useState, useEffect }from 'react';
import {Helmet} from "react-helmet";
import classes from './Success.module.css'
import photo from '../images/banana.svg'

function Success() 
{
    const[isSecondLottieLoaded, setSecondLottieLoaed] = useState(false);

    useEffect(() => 
    {
        const timer = setTimeout(() => setSecondLottieLoaed(true), 3000);
    }, []);

    return(
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
    ) 

}

export default Success;