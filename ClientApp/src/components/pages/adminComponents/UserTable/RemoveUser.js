import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalTitle} from 'react-bootstrap';

const RemoveUser = (props) => {
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
            <Button className="form-input-btn" type='submit'>
                Yes
            </Button>
                <Button onClick={props.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveUser;