import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export default function MessengerPage() {

    return (
        <Container style={{'font-family':'Oswald'}}>
            <Row className="justify-content-center" style={{'text-transform': 'uppercase'}}>
                <h1>Welcome to QRty</h1>
            </Row>
            <Row className="justify-content-center">
                <p>Easily share content between multiple devices</p>
            </Row>
            <Row className="justify-content-center">
                <Button onClick={() => {window.location='/room/' + makeID(6)}} variant="primary" size="lg" style = {{'margin-top':'20px', 'text-transform': 'uppercase'}}>
                    Create a Room
                </Button>{' '}
            </Row>
            <Row className="justify-content-center">
                <Button onClick={() => {window.location="joinroom"}} variant="primary" size="lg" style = {{'margin-top':'40px', 'text-transform': 'uppercase'}}>
                    Join a Room
                </Button>{' '}
            </Row>
            <Row className="justify-content-center" style = {{'margin-top':'40px'}}>
                <a href="/infopage">About QRty</a>
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
