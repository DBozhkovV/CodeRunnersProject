import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import '../App.css'; 
import { useNavigate } from "react-router-dom";

const MyTable = () => {
    const navigate = useNavigate();
    let params = useParams();
    var par = params.date;

    var currentday = new Date(par);

    var prevDate = new Date(currentday);
    prevDate.setDate(prevDate.getDate() - 1);

    var nextDate = new Date(currentday);
    nextDate.setDate(nextDate.getDate() + 1);

    const [seats, setSeats] = useState([]);
    
    useEffect(() => {
        const getSeats = async () => {
            axios.get('https://localhost:7031/Seat')
                .then(response => {
                    setSeats(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        getSeats();
    }, []);


    const prevDateChange = () => {
        var dated = prevDate.getDate();
        var datey = prevDate.getYear() + 1900;
        var datem = prevDate.getMonth() + 1;
        if(dated < 10){
          dated = '0' + dated;
        }
        if(datem < 10){
          datem = '0' + datem;
        }
        navigate("/table/" + datem + '-' + dated + '-' + datey);
    }

    const nextDateChange = () => {
        var dated = nextDate.getDate();
        var datey = nextDate.getYear() + 1900;
        var datem = nextDate.getMonth() + 1;
        if(dated < 10){
          dated = '0' + dated;
        }
        if(datem < 10){
          datem = '0' + datem;
        }
        navigate("/table/" + datem + '-' + dated + '-' + datey);
    }

  return(
    <div className="app-container">
        <body className="app-back">
            <button class="button" >Chosen date: {par}</button>
        </body> 
        <body className="app-back">
        <button class="button button1" onClick={prevDateChange}>Previous date</button>
        <button class="button button1" onClick={nextDateChange}>Next date</button>
        </body>
        <table>
            <thead>
                <tr>
                    <th>Desk number</th>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {seats.map((seat) => (
                   <tr key={seat.id}>
                            <td>{seat.name}</td>
                            <td>{seat.color}</td>
                            {/* <td>{seat.date}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );

}
export default MyTable;