import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalTitle} from 'react-bootstrap';
import axios from 'axios';

function ActionRemove(props){
    const DeleteSeat = async () => {
        axios.delete(`https://localhost:7031/Seat/${props.id}`)
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Modal
            {...props}
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
                <Button onClick={props.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ActionRemove;