import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card'

export default function TextCard(props) {

    return (
        <Card style={{'margin-bottom':'10px'}}>
            <Card.Body>{props.children}</Card.Body>
        </Card>
    );
}
