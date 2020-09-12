import React, { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import QRtyNav from "../components/QRtyNav";

export default function MessengerPage() {
    const txt0 = useRef(null);
    const txt1 = useRef(null);
    const txt2 = useRef(null);
    const txt3 = useRef(null);
    const txt4 = useRef(null);
    const txt5 = useRef(null);
    let refs = [txt0, txt1, txt2, txt3, txt4, txt5];

    useEffect(() => {
        txt0.current.focus();
    }, []);

    let roomCode = [];

    for (let i = 0; i < 6; i ++) {
        roomCode.push(<Form.Group as={Col} controlId={"roomID-" + i}>
            <Form.Control ref={refs[i]} style={{'height':'150px','fontSize':'60px','textAlign':'center'}} onChange = {(e) => {
                if (e.target.value != "") {
                    if (e.target.value.length > 1) {
                        e.target.value = e.target.value[e.target.value.length - 1];
                    }
                    if(i < 5) {
                        refs[i + 1].current.focus();
                    }
                } else {
                    if (i > 0) {
                        refs[i - 1].current.focus();
                    }
                }
            }}
            onKeyDown = {(e) => {
                if (e.keyCode == 8) {
                    if (i > 0){
                        e.target.value = "";
                        refs[i-1].current.focus();
                    }
                }
            }}/>
        </Form.Group>);
    }

    return (
        <>
            <Container style={{'fontFamily':'Oswald'}}>
                <Row className="justify-content-center" style={{'text-transform': 'uppercase'}}>
                    <h1>Join a Room</h1>
                </Row>
                <Row className="justify-content-center">
                    <p>Enter the 6-character room code below:</p>
                </Row>
                <Row className="justify-content-center">
                    <Form>
                        <Form.Row>
                            {roomCode}
                        </Form.Row>
                        <Form.Row className={"justify-content-center"}>
                            <Button size={"lg"} style={{"height":"50px"}} block onClick={()=> {
                                let room = "room/";
                                for(let i = 0; i < 6; i ++) {
                                    room += refs[i].current.value;
                                }
                                if (room.length == 11) {
                                    window.location = "/" + room;
                                }
                            }}>Join</Button>
                        </Form.Row>
                    </Form>
                </Row>
            </Container>
        </>
    );
}
