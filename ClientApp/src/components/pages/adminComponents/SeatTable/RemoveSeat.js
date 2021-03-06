import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalTitle} from 'react-bootstrap';
import axios from 'axios';

function ActionRemove(props){

    const token = localStorage.getItem("token");
    
    const DeleteSeat = async () => {
        axios.delete(`https://localhost:7031/Seat/${props.id}`, { headers: {"Authorization" : `Bearer ${token}`} })
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
                    Are you sure you want to delete Seat#{props.id} named {props.name}?
                </ModalTitle>
            </Modal.Header>
            <Modal.Footer>
            <Button className="form-input-btn" type='submit' onClick={DeleteSeat}>
                Yes
            </Button>
                <Button onClick={props.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ActionRemove;