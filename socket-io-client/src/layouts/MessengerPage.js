import React, { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";

import EntryBar from "../components/EntryBar";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import TextCard from "../components/TextCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

const ENDPOINT = "http://127.0.0.1:4001";

export default function MessengerPage() {
    const [socket, setSocket] = useState(socketIOClient(ENDPOINT));
    let [room, setRoom] = useState(window.location.pathname);
    let [messages, setMessages] = useState([]);

    const fileUpload = useRef(null);

    function addMessage(msg) {
        setMessages(messages.concat(
            <TextCard>{msg}</TextCard>
        ));
    }

    useEffect(() => {
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
                        <h1>
                            <a href={"#"} style={{'color':"#148496", 'marginLeft':'15px'}} onClick={()=> {
                                fileUpload.current.click();
                            }}>
                                <FontAwesomeIcon icon={faImages}/>
                            </a>
                        </h1>
                    </Container>
                </Navbar>
            </Container>
            <input hidden ref={fileUpload} id="image-file" type="file" accept={"image/*"} onChange={(e)=> {
                if (e.target.value) {
                    let formData = new FormData();
                    let image = fileUpload.current.files[0];

                    formData.append("file", image);

                    try {
                        fetch(ENDPOINT + '/uploads', {method: "POST", body: formData})
                            .then(blob => blob.json())
                            .then(data => {
                                console.log(data);
                            }).catch(e => {
                                console.log(e);
                            return e;
                        });
                    } catch(e) {
                        console.log('Error in image upload...:', e);
                    }
                }
            }}/>
        </>
    );
}
