import React, { useEffect } from 'react';
import { useState } from 'react';
import LoadingSpinner from "../LoadingScreen/LoadingSpinner";
import {useLocation} from 'react-router-dom';
import Navbar from '../NavbarComponents/Navbar';

function Home() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(location.state===null){
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
    }
    else{
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="App" >
      {isLoading  ? <LoadingSpinner /> : <Navbar/>}
    </div>
  );
}

export default Home;