import React, { useState, useEffect } from "react";
import ActionAdd from "./ActionRemove";
import axios from 'axios';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [AddShow, setAddShow] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            axios.get('https://localhost:7031/Booking')
                .then(response => {
                    setUsers(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        getUsers();
    }, []);

  return(
    <div className="app-container">
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                   <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.color}</td>
                        <td>{user.date}</td>
                        <td>
                            <button type="button" onClick={() => setAddShow(true)}>Add</button>
                            <ActionAdd show = {AddShow} onHide={() => setAddShow(false)}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default UserTable;