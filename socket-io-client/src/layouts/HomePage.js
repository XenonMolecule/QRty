import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ENDPOINT = "http://127.0.0.1:4001";

export default function MessengerPage() {
    const [socket, setSocket] = useState(socketIOClient(ENDPOINT));

    useEffect(() => {
        // CLEAN UP THE EFFECT
        return () => socket.disconnect();
    }, []);

    return (
        <Container style={{'font-family':'Oswald'}}>
            <Row className="justify-content-md-center" style={{'text-transform': 'uppercase'}}>
                <h1>Welcome to QRty</h1>
            </Row>
            <Row className="justify-content-md-center">
                <p>Easily share content between multiple devices</p>
            </Row>
            <Row className="justify-content-md-center">
                <Button variant="primary" size="lg" style = {{'margin-top':'20px', 'text-transform': 'uppercase'}}>
                    Start a Room
                </Button>{' '}
            </Row>
            <Row className="justify-content-md-center">
                <Button variant="primary" size="lg" style = {{'margin-top':'40px', 'text-transform': 'uppercase'}}>
                    Join a Room
                </Button>{' '}
            </Row>
            <Row className="justify-content-md-center" style = {{'margin-top':'40px'}}>
                <a href="https://google.com">Click here for information and instructions</a>
            </Row>
        </Container>
    );
}