import React, { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import Row from "react-bootstrap/Row";

export default function JoinAlert(props) { 

    return (
        <>
            <Row className={"justify-content-center"} >
                <Toast onClose={() => props.setShow(false)} show={props.show} delay={3000} autohide>
                    <Toast.Body>New Connection!</Toast.Body>
                </Toast>
            </Row>    
        </>
    );
}