import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../../../App.css';
import AddUser from "./AddUser";
import RemoveUser from "./RemoveUser";

const UserTable = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [AddShow, setAddShow] = useState(false);
    const [RemoveShow, setRemoveShow] = useState(false);
    const [IdRemove, setIdRemove] = useState();

    useEffect(() => {
        const getUsers = async () => {
            axios.get('https://localhost:7031/UserList')
                .then(response => {
                    setUsers(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        getUsers();
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
                <AddUser show={AddShow} onHide={() => setAddShow(false)}/>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                   <tr key={user.id}>
                        <td>{user.userName}</td>
                        <td>
                        <button className="buttonsmall" onClick={() => {
                                setRemoveShow(true);
                                setIdRemove(user.id);       
                            }
                            }>Remove</button>
                        </td>
                    </tr>
                ))}
                <RemoveUser id = {IdRemove} show={RemoveShow} onHide={() => setRemoveShow(false)}/>
            </tbody>
        </table>
    </div>
  );
}

export default UserTable;