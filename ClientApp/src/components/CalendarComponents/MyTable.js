import React, { useState } from "react";
import {useEffect} from 'react';
import data from "./test-data.json";
import { useParams } from "react-router-dom";

const MyTable = () => {
    let params = useParams();
    var par = params.date;

    const [contacts, setContacts] = useState(data);



    
  return(
    <div className="app-container">
        <table>
            <thead>
                <tr>
                    <th>Desk number</th>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {contacts.filter(contact => contact.date == par).map((contact) => (
                   <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.firstName}</td>
                            <td>{contact.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );

}
export default MyTable;