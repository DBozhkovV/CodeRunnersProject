import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../../App.css'; 
import ActionRemove from "./ActionRemove";
import { useNavigate } from "react-router-dom";
import ActionAdd from "./ActionAdd";

const SeatTable = () => {
    const navigate = useNavigate();
    const [seats, setSeats] = useState([]);
    const [RemoveShow, setRemoveShow] = useState(false);
    const [AddShow, setAddShow] = useState(false);
    let deskId = 0;    
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

    const navSelection = () => {
        navigate("/admin/selection");
        window.location.reload();
    }

  return(
    <div className="app-container">
        <div className="app-back">
            <button className="button button1" onClick={navSelection}>Go Back</button>
            <button className="rightbutton button1" onClick={() => setAddShow(true)}>Add</button>
                <ActionAdd show={AddShow} onHide={() => setAddShow(false)}/>
        </div>
        <table className="seatTable">
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
                            <button className="buttonsmall" onClick={() => {
                                setRemoveShow(true);
                                deskId = seat.id       
                            }
                            }>Remove</button>
                        </td>
                    </tr>
                ))}
                <ActionRemove id = {deskId} show={RemoveShow} onHide={() => setRemoveShow(false)}/>
            </tbody>
        </table>
    </div>
  );
}

export default SeatTable;