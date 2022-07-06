import React, { useState } from "react";
import data from "./test-data.json";

const MyTable = () => {

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