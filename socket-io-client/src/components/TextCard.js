import React  from "react";

import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";
import CopyToClipboard from './CopyClipboard.js'

export default function TextCard(props) {
    let content = []
    props.children.split("\n").forEach((val) => {
        content.push(<pre style={{'marginBottom':'0px'}}>{val + "\n"}</pre>)
    })
    return (
        <Row className={'justify-content-center'}>
            <Card style={{'marginBottom':'10px'}}>
                <Card.Body>
                    {content}
                    <CopyToClipboard text = {content[0].props.children}></CopyToClipboard>
                </Card.Body>
            </Card>
        </Row>
    );
}
