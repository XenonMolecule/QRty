import React, { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";

import EntryBar from "../components/EntryBar";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import TextCard from "../components/TextCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import ImageCard from "../components/ImageCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../styles/messenger.css'

const ENDPOINT = "http://localhost:5000/";

export default function MessengerPage() {
    let startRoom = window.location.pathname;
    if (startRoom.startsWith("/room/")) {
        startRoom = startRoom.slice(6);
    }

    const [socket, setSocket] = useState(socketIOClient(ENDPOINT));
    let [room, setRoom] = useState(startRoom);
    let [messages, setMessages] = useState([]);

    const fileUpload = useRef(null);

    function addMessage(msg) {
        setMessages(messages.concat(
            <TextCard>{msg}</TextCard>
        ));
    }

    function addImage(url) {
        setMessages(messages.concat(
           <ImageCard img={url}/>
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

    useEffect(() => {
        socket.on('imgMessage', addImage);
        return () => socket.removeListener('imgMessage', addImage);
    })

    return (
        <>
            <Container>
                <hr style={{'opacity':'0'}}/>
                {messages}
                <hr style={{'opacity':'0','marginTop':'78px'}}/>
                <Navbar bg="light" expand="lg" fixed={"bottom"}>
                    <Container>
                        <Row className={"justify-content-center"} style={{'width':'100%'}}>
                            <Col sm={3}/>
                            <Col sm={5} xs={10}>
                                <EntryBar btnText={"Send"} send={(text) => {
                                    addMessage(text);
                                    socket.emit("textMessage", {text: text, room: room});
                                }}/>
                            </Col>
                            <Col sm={4} xs={2} className={"img-upload-icon"} style={{'marginTop':'8px', 'marginLeft':'-25px'}}>
                                <h1>
                                    <a href={"#"} style={{'color':"#148496", 'marginLeft':'15px'}} onClick={()=> {
                                        fileUpload.current.click();
                                    }}>
                                        <FontAwesomeIcon icon={faImages}/>
                                    </a>
                                </h1>
                            </Col>
                        </Row>

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
                                addImage(data.data);
                                socket.emit("imgMessage", {img: data.data, room: room});
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
