import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle } from 'react-bootstrap';
import axios from 'axios';

const AddUser = (props) => {
    const [name, setName] = useState();    
    const [email, setEmail] = useState();   
    const [password, setPassword] = useState();

    const RegisterUser = async () => {
        axios.post(`https://localhost:7031/Register`, {email, password, name})
            .catch(error => {
                console.log(error)
            })
        props.onHide();
        window.location.reload();
    }

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <ModalTitle>
                    Add user
                </ModalTitle>
            </Modal.Header>
            <ModalBody className="form-inputs" >
                <input
                    type='text'
                    name='name'
                    className="form-input"
                    placeholder="Enter name:"
                    onChange={e => setName(e.target.value)}
                    required
                />
                <p />
                <input
                    type='email'
                    name='email'
                    className="form-input"
                    placeholder="Enter email:"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <p />
                <input
                    type='password'
                    name='password'
                    className="form-input"
                    placeholder="Enter password:"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </ModalBody>
            <Modal.Footer>
            <Button className="form-input-btn" type='submit' onClick={RegisterUser}>
                Confirm
            </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddUser;