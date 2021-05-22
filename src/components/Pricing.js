import { Row, Col, Card, Button } from "react-bootstrap";
import MyCard from './ui/MyCard';

function Pricing(){
    var pricings = [
        {
            name: "Mayuri",
            textValue: "qwertpoiuyasdflkj asdlkjh",
            imgUrl: "https://tse1.mm.bing.net/th?id=OIP.v7gEKUNUq-Jy-ARL41hoxAHaE7&pid=Api&rs=1&c=1&qlt=95&w=152&h=101",
            btnText: "Go somewhere"
        },
        {
            name: "Priyanka",
            textValue: "1234 34567 5678",
            imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            btnText: "Go this way"
        },
        {
            name: "Nisha",
            textValue: "abcd abcd abcd abcd abcd ",
            imgUrl: "https://www.whatsappimages.in/wp-content/uploads/2020/11/Boys-Free-Feeling-Sad-Pics-Images-Download.jpg",
            btnText: "Go that way"
        }
    ];
    return (
        <>
            <div id="pricing" className="menuSections">
                <h1>Pricing</h1>
                <Row className="m-0">
                    {
                        pricings.map((item, index) => {
                            return (
                                <Col xs={12} sm={4} className="mySections" key={index}>
                                    <MyCard pricingValue={item}/>
                                </Col>
                            )
                        })
                    }                    
                </Row>
            </div>
        </>
  
    )
}
export default Pricing;