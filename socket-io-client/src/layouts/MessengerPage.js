import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

import EntryBar from "../components/EntryBar";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TextCard from "../components/TextCard";
import QRCode from "../components/QRCode";
import QRtyNav from "../components/QRtyNav";

const ENDPOINT = "http://127.0.0.1:4001";

export default function MessengerPage() {
    const [socket, setSocket] = useState(socketIOClient(ENDPOINT));
    let [room, setRoom] = useState(window.location.pathname);
    let [messages, setMessages] = useState([]);

    function addMessage(msg) {
        setMessages(messages.concat(
            <TextCard>{msg}</TextCard>
        ));
    }

    useEffect(() => {
        // CLEAN UP THE EFFECT
        socket.emit("join room", room);

        return () => socket.disconnect();
    }, []);

    useEffect(() => {
        socket.on('textMessage', addMessage);
        return () => socket.removeListener('textMessage', addMessage)
    },[messages]);

    return (
        <>
            <Container>
                <hr style={{'opacity':'0'}}/>
                {messages}
                <hr style={{'opacity':'0','marginTop':'78px'}}/>
                <Navbar bg="light" expand="lg" fixed={"bottom"}>
                    <Container>
                        <EntryBar btnText={"Send"} send={(text) => {
                            addMessage(text);
                            socket.emit("textMessage", {text: text, room: room});
                        }}/>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
}
