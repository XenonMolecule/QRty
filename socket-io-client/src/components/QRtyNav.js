import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function QRtyNav(props) {

    return (
        <Navbar bg="light" collapseOnSelect expand="sm">
            <Navbar.Brand href="/">
                <img
                    src="/QRtyLogo.png"
                    height="40"
                    className="d-inline-block align-top"
                    alt="QRty logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={"/" + makeID(6)}>Create Room</Nav.Link>
                    <Nav.Link href="/joinroom">Join Room</Nav.Link>
                </Nav>
                {props.room ? <Nav>
                    <Button variant={"outline-secondary"}>Add Device</Button>
                </Nav> : null}
            </Navbar.Collapse>
        </Navbar>
    );
}

// TODO: DON'T REPEAT FUNCTION!!!
function makeID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charsLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charsLength));
    }
    return result;
}
