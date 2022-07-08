import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalTitle} from 'react-bootstrap';
import axios from 'axios';

function ActionRemove(show){
    const [seat, setSeat] = useState([]);
    const DeleteSeat = async () => {
        console.log(show.id);
        axios.delete(`https://localhost:7031/Seat/${show.id}`)
            .then(response => {
                setSeat(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    

    return (
        <Modal
            {...show}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <ModalTitle>
                    Are you sure ?
                </ModalTitle>
            </Modal.Header>
            <Modal.Footer>
            <Button className="form-input-btn" type='submit' onClick={DeleteSeat}>
                Yes
            </Button>
                <Button onClick={show.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ActionRemove;