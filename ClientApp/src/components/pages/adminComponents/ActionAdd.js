import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle} from 'react-bootstrap';

function ActionAdd(props){
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <ModalTitle>
                    Sign Up
                </ModalTitle>
            </Modal.Header>
            <ModalBody className="form-inputs" >
                <label htmlFor="email" className='form-label'>
                    Email:   
                </label>
                <input
                    id = 'email'
                    type='email'
                    name='email'
                    className="form-input"
                    placeholder="Enter email"
                />
                <p />
                <label htmlFor="password" className='form-label'>
                    Password:   
                </label>
                <input
                    id = 'password'
                    type='password'
                    name='password'
                    className="form-input"
                    placeholder="Enter password"
                />
            </ModalBody>
            <Modal.Footer>
            <Button className="form-input-btn" type='submit'>
                Confirm
            </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ActionAdd;