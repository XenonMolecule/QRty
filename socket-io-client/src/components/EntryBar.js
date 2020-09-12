import React, { useEffect, useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function EntryBar(props) {

    let [text, setText] = useState("");

    return (
        <InputGroup>
            <FormControl as="textarea" aria-label="send" style={{'resize':'none'}} onChange = {(e) => {
                setText(e.target.value);
            }}/>
            <InputGroup.Append>
                <Button variant="info" style={{'width':'100px'}} onClick = {() => {props.send(text)}}>Send</Button>
            </InputGroup.Append>
        </InputGroup>
    );
}
