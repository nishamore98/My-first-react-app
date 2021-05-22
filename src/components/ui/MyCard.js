import { Card, Button } from "react-bootstrap";

function MyCard (props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.pricingValue.imgUrl} />
                <Card.Body>
                    <Card.Title>{props.pricingValue.name}</Card.Title>
                    <Card.Text>
                        {props.pricingValue.textValue}
                    </Card.Text>
                    <Button variant="outline-dark">{props.pricingValue.btnText}</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MyCard;