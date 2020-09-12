import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EntryBar from "../components/EntryBar";

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
                <h1>Join a Room</h1>
            </Row>
            <Row className="justify-content-md-center">
                <p>Enter the 6-character room code below:</p>
            </Row>
            <Row className="justify-content-md-center">
                <EntryBar btnText={"Join"} send={(text) => {
                        window.location=text;
                    }}/>
            </Row>
            <Row className="justify-content-md-center">
                <Button onClick={() => {window.location="joinroom"}} variant="primary" size="lg" style = {{'margin-top':'40px', 'text-transform': 'uppercase'}}>
                    Join a Room
                </Button>{' '}
            </Row>
            <Row className="justify-content-md-center" style = {{'margin-top':'40px'}}>
                <a href="https://google.com">Click here for information and instructions</a>
            </Row>
        </Container>
    );
}