import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export default function InstructionPage() {

    return (
        <Container style={{'font-family':'Oswald'}}>
            <Row className="justify-content-center" style={{'text-transform': 'uppercase'}}>
                <h1>Welcome to QRty!</h1>
                <br></br><br></br><br></br><br></br>
            </Row>
            <Row className="justify-content-center">
                <h4>How to Create a Room:</h4>
            </Row>
            <Row className="justify-content-center">
                <ul>
                <li>When you click the Create a Room button you will have created a private room to store your text and images.</li>
                <li>You can invite friends to your room with the 6 digits at the end of the URL</li>
                <li>If you click the Add Device button in the upper right hand corner, you will see a QR code and your room code </li>
                <li>You can scan this QR code on mobile devices and then view your text and images across platforms</li>
                <li>You can also upload images or text from that new device and it will appear on other devices in the same room</li>
                </ul>
            </Row>
            <Row className="justify-content-center">
                <Button onClick={() => {window.location='/room/' + makeID(6)}} variant="primary" size="lg" style = {{'margin-top':'20px', 'text-transform': 'uppercase'}}>
                    Create a Room
                </Button>{' '}
            </Row>
            <Row>
                <p>   </p>
            </Row>
            <br></br><br></br>
            <Row className="justify-content-center">
                <h4>How to Join a Room:</h4>
            </Row>
            <Row className="justify-content-center">
            <ul>
            <li>To join a room you will need either the 6-digit code or the QR code</li>
                <li>After clicking the Join a Room button, simply enter the code and you will see live updates across platforms</li>
                </ul>
            </Row>
            <Row className="justify-content-center">
                <Button onClick={() => {window.location="joinroom"}} variant="primary" size="lg" style = {{'margin-top':'40px', 'text-transform': 'uppercase'}}>
                    Join a Room
                </Button>{' '}
            </Row>
        </Container>
    );

    function makeID(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charsLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charsLength));
        }
        return result;
    }
}