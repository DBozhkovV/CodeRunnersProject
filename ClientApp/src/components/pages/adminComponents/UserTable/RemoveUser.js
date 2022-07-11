import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalTitle} from 'react-bootstrap';
import axios from 'axios';

const RemoveUser = (props) => {
    let Id = props.id;
    const DeleteUser = async () => {
        console.log(Id);
        axios.delete(`https://localhost:7031/UserList?Id=${Id}`)
            .catch(error => {
                console.log(error)
            })
        props.onHide();
        window.location.reload();
    }

    return(
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
            <Button className="form-input-btn" type='submit' onClick={DeleteUser}>
                Yes
            </Button>
                <Button onClick={props.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveUser;