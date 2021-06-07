import React from 'react';
import { Card, Button } from "react-bootstrap";
import Likebtn from '../Likebtn';

function MyCard (props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.pricingValue.imgUrl} width="100%" height="190px" />
                <Card.Body>
                    <Card.Title>
                        {props.pricingValue.name}
                        <Likebtn />
                    </Card.Title>
                    <Card.Text>
                        {props.pricingValue.textValue}
                    </Card.Text>
                    <a href={props.pricingValue.btnLink} target="_blank">
                        <Button variant="outline-dark">Go to {props.pricingValue.name}</Button>
                    </a>
                </Card.Body>
            </Card>
        </>
    )
}

export default MyCard;