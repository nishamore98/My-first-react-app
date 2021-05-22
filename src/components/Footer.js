import { Row, Col} from 'react-bootstrap'
function Footer(){
    return (
        <footer className="myFooter">
            <Row >
            <Col xs={6} sm={2}>
                <div className="myLink1">
                    <h6>My Links</h6>
                    <a href="#">About</a><br/>
                    <a href="#">Career</a><br/>
                    <a href="#">Employees</a><br/>
                    <a href="#">Help</a><br/>
                </div>
            </Col>
            <Col xs={6} sm={2}>
                <div className="myLink1">
                    <h6>My Links</h6>
                    <a href="#">Home</a><br/>
                    <a href="#">Features</a><br/>
                    <a href="#">Pricing</a><br/>
                    <a href="#">Services</a>
                </div>
            </Col>
            <Col sm={8} className="footerLastSection">
                <div className="myLink1">
                    <img src="https://uidp.org/wp-content/uploads/2015/05/UIDP_Handshake_icon.png" width="50px"/>
                    <p className="Nostyle">MyApp</p>  <br/><br/>
                    <i className="fa fa-phone" aria-hidden="true"></i>  012-456-89<br></br>
                    <i className="fa fa-envelope-open" aria-hidden="true"></i>   abc@def.com
                </div>
            </Col>
            </Row>
        </footer>
  
    )
}
export default Footer;