import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle } from 'react-bootstrap';
import axios from 'axios';

function ActionAdd(props){
    const [seat, setSeat] = useState([]);
    const [name, setName] = useState();    
    const [color, setColor] = useState(); 

    const AddSeat = async () => {
        axios.post(`https://localhost:7031/Seat`, {name, color})
            .then(response => {
                setSeat(response.data)
            })
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
                    Add desk
                </ModalTitle>
            </Modal.Header>
            <ModalBody className="form-inputs" >
                <label className='form-label'>
                    Name:    
                </label>
                <input
                    type='text'
                    name='name'
                    className="form-input"
                    placeholder="Enter name of desk"
                    onChange={e => setName(e.target.value)}
                />
                <p />
                <label className='form-label'>
                    Color:   
                </label>
                <input
                    type='text'
                    name='color'
                    className="form-input"
                    placeholder="Enter color"
                    onChange={e => setColor(e.target.value)}
                />
            </ModalBody>
            <Modal.Footer>
            <Button className="form-input-btn" type='submit' onClick={AddSeat}>
                Confirm
            </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ActionAdd;