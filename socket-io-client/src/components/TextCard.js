import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card'

export default function TextCard(props) {
    let content = []
    props.children.split("\n").forEach((val) => {
        content.push(<pre style={{'marginBottom':'0px'}}>{val + "\n"}</pre>)
    })
    return (
        <Card style={{'marginBottom':'10px'}}>
            <Card.Body>
                {content}
            </Card.Body>
        </Card>
    );
}
