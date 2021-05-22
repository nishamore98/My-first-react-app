import { Row, Col, Card, Button } from "react-bootstrap";
import MyCard from './ui/MyCard';

function Pricing(){
    return (
        <>
            <div id="pricing" className="menuSections">
                <h1>Pricing</h1>
                <Row className="m-0">
                    <Col xs={12} sm={4} className="mySections">
                        <MyCard name='Mayuri' textValue='qwertpoiuyasdflkj asdlkjh'/>
                    </Col>
                    <Col xs={12} sm={4} className="mySections">
                        <MyCard name='Priyanka' textValue='123456709876543 1234567'/>
                    </Col>
                    <Col xs={12} sm={4} className="mySections">
                        <MyCard name='Nisha' textValue='asdfg asdfg asdfghj'/>
                    </Col>
                </Row>
            </div>
        </>
  
    )
}
export default Pricing;