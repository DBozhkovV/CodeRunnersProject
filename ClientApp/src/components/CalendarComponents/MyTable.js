import React, { useState } from "react";
import data from "./test-data.json";
import { useParams } from "react-router-dom";

const MyTable = () => {
    let params = useParams();

    const [contacts, setContacts] = useState(data);
    console.log(params);

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
                {contacts.map((contact) => (
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