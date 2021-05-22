import { Row, Col, Card, Button } from "react-bootstrap";

function Pricing(){
    return (
        <>
            <div id="pricing" className="menuSections">
                <h1>Pricing</h1>
                <Row className="m-0">
                <Col xs={12} sm={4} className="mySections">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.v7gEKUNUq-Jy-ARL41hoxAHaE7&pid=Api&rs=1&c=1&qlt=95&w=152&h=101" />
                        <Card.Body>
                        <Card.Title>Loren ipsum</Card.Title>
                        <Card.Text>
                        Lorem ipsum, or lipsum as ittext used in laying out print, graphic or web designs.
                        </Card.Text>
                        <Button variant="outline-dark">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4} className="mySections">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.v7gEKUNUq-Jy-ARL41hoxAHaE7&pid=Api&rs=1&c=1&qlt=95&w=152&h=101" />
                        <Card.Body>
                        <Card.Title>Loren ipsum</Card.Title>
                        <Card.Text>
                            Lorem ipsum, or lipsum as ittext used in laying out print, graphic or web designs.
                            </Card.Text>
                        <Button variant="outline-dark">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4} className="mySections">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.v7gEKUNUq-Jy-ARL41hoxAHaE7&pid=Api&rs=1&c=1&qlt=95&w=152&h=101" />
                        <Card.Body>
                        <Card.Title>Loren ipsum</Card.Title>
                        <Card.Text>
                        Lorem ipsum, or lipsum as ittext used in laying out print, graphic or web designs. 
                        </Card.Text>
                        <Button variant="outline-dark">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </div>
        </>
  
    )
}
export default Pricing;