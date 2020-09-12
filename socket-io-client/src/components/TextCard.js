import React  from "react";

import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";

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
                </Card.Body>
            </Card>
        </Row>
    );
}
