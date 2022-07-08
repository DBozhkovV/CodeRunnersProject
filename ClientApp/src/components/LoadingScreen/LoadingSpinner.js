import React from "react";
import "./spinner.css";
import logo from '../images/coderunners.png'
import loading from '../images/loading.png'

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
    <img src={logo} alt = "Code Runners Logo" className="imgStyle1"/>
      <div className="loading-spinner"></div>
      <img src={loading} alt = "Loading logo" className="imgStyle"/> {/*PREMAHVA WORNINGI KATO SE PRAVI V OTDELEN CSS KOMPONENT*/}
    </div>
  );
}