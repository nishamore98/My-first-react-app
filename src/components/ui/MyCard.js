import { Card, Button } from "react-bootstrap";

function MyCard (props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.v7gEKUNUq-Jy-ARL41hoxAHaE7&pid=Api&rs=1&c=1&qlt=95&w=152&h=101" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.textValue}
                    </Card.Text>
                    <Button variant="outline-dark">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MyCard;