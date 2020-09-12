import React, { useEffect, useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function EntryBar() {

    return (
        <InputGroup>
            <FormControl as="textarea" aria-label="With textarea" style={{'resize':'none'}} />
            <InputGroup.Append>
                <Button variant="info" style={{'width':'100px'}}>Send</Button>
            </InputGroup.Append>
        </InputGroup>
    );
}
