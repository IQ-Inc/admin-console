import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const ClaimModal = (props) => (
    <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
            <Modal.Title>Claim Badge #{props.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Please enter your email address in order to claim this ID.
            <form>
                <FormGroup controlId="formControlsEmail">
                    <FormControl type="email" label="Email Address" placeholder="Your IQ Email Address" />
                </FormGroup>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.close} className='pull-left' bsStyle='danger'>Cancel</Button>
            <Button onClick={props.submit} bsStyle='success' type='submit'>Claim</Button>
        </Modal.Footer>
    </Modal>
)

export default ClaimModal