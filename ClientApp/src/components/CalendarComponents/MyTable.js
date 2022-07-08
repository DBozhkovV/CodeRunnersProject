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

    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
        console.log(par);

        const getBookings = async () => {
            axios.get(`https://localhost:7031/Booking/${par}`)
                .then(response => {
                    setBookings(response.data)
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        }
        getBookings();
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
        window.location.reload();
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
        window.location.reload();
    }

    const navHome = () => {
        navigate("/");
        window.location.reload();
    }

  return(
    <div className="app-container">
        <div className="app-back">
            <button className="button" >Chosen date: {par}</button>
        </div> 
        <div className="app-back">
        <button className="button button1" onClick={prevDateChange}>Previous date</button>
        <button className="button button1" onClick={nextDateChange}>Next date</button>
        <button className="rightbutton button1" onClick={navHome}>Go Back</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Desk number</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((booking) => (
                   <tr key={booking.id}>
                        <td>{booking.name}</td>
                        <td>{booking.color}</td>
                        <td>Vreme</td>
                        <td><button type="button">Get</button> </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default MyTable;