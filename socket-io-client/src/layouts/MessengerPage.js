import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

import EntryBar from "../components/EntryBar";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";

const ENDPOINT = "http://127.0.0.1:4001";

export default function MessengerPage() {
    const [socket, setSocket] = useState(socketIOClient(ENDPOINT));

    useEffect(() => {
        // CLEAN UP THE EFFECT
        return () => socket.disconnect();
    }, []);

    return (
        <Container>
            <h1>This is the messenger page</h1>
            <Navbar bg="light" expand="lg" fixed={"bottom"}>
                <Container>
                    <EntryBar send={(text) => {
                        socket.emit("textMessage", text);
                    }}/>
                </Container>
            </Navbar>
        </Container>
    );
}
