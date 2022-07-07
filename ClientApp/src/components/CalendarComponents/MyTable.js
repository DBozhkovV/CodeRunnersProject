import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import '../App.css'

const MyTable = () => {
    let params = useParams();
     var par = params.date;

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


  return(
    <div className="app-container">
        <body>Chosen date: {par}</body> 
        <body>
        <button class="button button1">prev date</button>
        <button class="button button1">next date</button>
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