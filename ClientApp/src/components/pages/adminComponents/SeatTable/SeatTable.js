import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../../../App.css'; 
import ActionRemove from "./RemoveSeat";
import { useNavigate } from "react-router-dom";
import ActionAdd from "./AddSeat";
import checkAdmin from "../checkAdmin";

const SeatTable = () => {
    const navigate = useNavigate();
    const [seats, setSeats] = useState([]);
    const [RemoveShow, setRemoveShow] = useState(false);
    const [AddShow, setAddShow] = useState(false);
    const [IdRemove, setIdRemove] = useState();
    const [NameRemove, setNameRemove] = useState();

    checkAdmin();

    const token = localStorage.getItem("token");

    useEffect(() => {
        const getSeats = async () => {
            axios.get(`https://localhost:7031/Seat`, { headers: {"Authorization" : `Bearer ${token}`} })
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
                            <button className="buttonsmall" onClick={() => {
                                setRemoveShow(true);
                                setIdRemove(seat.id);
                                setNameRemove(seat.name);       
                            }
                            }>Remove</button>
                        </td>
                    </tr>
                ))}
               <ActionRemove name = {NameRemove} id = {IdRemove} show={RemoveShow} onHide={() => setRemoveShow(false)}/>
            </tbody>
        </table>
    </div>
  );
}

export default SeatTable;