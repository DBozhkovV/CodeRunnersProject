import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const MyTable = () => {
    let params = useParams();

    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
        console.log(params);
        const getBookings = async () => {
            axios.get(`https://localhost:7031/Booking/${params}`)
                .then(response => {
                    setBookings(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        getBookings();
    }, []);


    // const actionAdd = () => {
        // return(
            // <button type="button" onClick={handleClick}>Book</button>
        // )
    // }

    const handleClick = () => {
        // implementation details
    };

  return(
    <div className="app-container">
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
                        <td>{booking.UserId}</td>
                        <td>{booking.SeatId}</td>
                        <td>{booking.Time}</td>
                        <td><button type="button" onClick={handleClick}>Get</button> </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default MyTable;