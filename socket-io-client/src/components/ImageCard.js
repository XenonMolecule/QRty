import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card'

export default function ImageCard(props) {
    return (
        <Card style={{'marginBottom':'10px'}}>
            <Card.Img variant="top" src={props.img}/>
        </Card>
    );
}
