import React from "react";

import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import '../styles/imgCard.css'

export default function ImageCard(props) {
    return (
        <Row className={'justify-content-center'}>
            <Card style={{'marginBottom':'10px'}}>
                    <Card.Img variant="top" src={props.img}/>
            </Card>
        </Row>
    );
}
