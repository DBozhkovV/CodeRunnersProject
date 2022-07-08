import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../../App.css'; 
import ActionRemove from "./ActionRemove";

const SeatTable = () => {
    const [seats, setSeats] = useState([]);
    const [RemoveShow, setRemoveShow] = useState(false);

    useEffect(() => {
        const getSeats = async () => {
            axios.get(`https://localhost:7031/Seat`)
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
        <table>
            <thead>
                <tr>
                    <th>Desk number</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {seats.map((seat) => (
                   <tr key={seat.id}>
                        <td>{seat.name}</td>
                        <td>{seat.color}</td>
                        <td>
                            <button type="button" onClick={() => setRemoveShow(true)}>Remove</button>
                            <ActionRemove id={seat.id} show={RemoveShow} onHide={() => setRemoveShow(false)}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default SeatTable;