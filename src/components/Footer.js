import React from 'react';
import { Row, Col} from 'react-bootstrap';

function Footer(){
    return (
        <footer className="myFooter">
            <Row >
            <Col xs={6} sm={2}>
                <div className="myLink1">
                    <a href="#">About</a><br/>
                    <a href="#">Career</a><br/>
                    <a href="#">Employees</a><br/>
                    <a href="#">Help</a><br/>
                </div>
            </Col>
            <Col xs={6} sm={2}>
                <div className="myLink1">
                    <a href="#home">Home</a><br/>
                    <a href="#features">Features</a><br/>
                    <a href="#blog">Blog</a>
                </div>
            </Col>
            <Col sm={8} className="footerLastSection">
                <div className="myLink1">
                    <img src="https://uidp.org/wp-content/uploads/2015/05/UIDP_Handshake_icon.png" width="50px"/>
                    <p className="Nostyle">My First App</p>  <br/>
                    <a href="tel:9999999999"><i className="fa fa-phone" aria-hidden="true"></i>  99999 99999</a><br></br>
                    <a href="mailto:abc@def.com"><i className="fa fa-envelope-open" aria-hidden="true"></i>   abc@def.com</a>
                </div>
            </Col>
            </Row>
        </footer>
  
    )
}
export default Footer;