import React from "react";
import "../spinner.css";
import logo from '../images/coderunners.png'
import loading from '../images/loading.png'

export default function LoadingSpinner() {
    const imgStyle= {
        display: 'block',
        margin: 'auto',
        width: '50%'
    }

    const imgStyle1 = {
        display: 'block',
        margin: 'auto',
        'margin-top' : '50%',
        width: '50%'
    }

  return (
    <div className="spinner-container">
    <img src={logo} alt = "Code Runners Logo" style={imgStyle1}/>
      <div className="loading-spinner"></div>
      <img src={loading} alt = "Loading logo" style={imgStyle}/>
    </div>
  );
}