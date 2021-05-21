import './App.css';
import { 
  Table,
  Accordion,
  Card,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col
} from 'react-bootstrap';



function App() {
  return ( <>
  <div>
    <Navbar expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Navbar>
    </div>
  <div>
<Accordion defaultActiveKey="1" id="home">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="outline-dark" eventKey="0">
        Click me For Candidate List
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
    <Table striped bordered hover variant="dark">
     <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Middle Name</th>
          <th>Surname</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mayuri</td>
          <td>Rahul</td>
          <td>More</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Priyanka</td>
          <td>Rahul</td>
          <td>More</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Nisha</td>
          <td>Rahul</td>
          <td>More</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Saurav</td>
          <td>Rahul</td>
          <td>More</td>
        </tr>
      </tbody>
      </Table>
    </Accordion.Collapse>
  </Card>
  </Accordion>
  
  </div>
  <div className="description">
    <p>
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
      The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
      The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
      The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
    </p>
  </div>
  <div id="features" className="menuSections">
    <h1>Features</h1>
    <Row className="m-0">
      <Col xs={12} sm={6} className="mySections">
        <p className="mysectiontext">
          <Row>
            <Col sm={4}>
              <dl>
                <dt>Loren</dt>
                <dd>Ipsum</dd>
                <dt>Loren ipsum</dt>
                <dd>Lipsum</dd>
              </dl>
            </Col>
            <Col sm={4}>
              <dl>
                <dt>Loren</dt>
                <dd>Ipsum</dd>
                <dt>Loren ipsum</dt>
                <dd>Lipsum</dd>
              </dl>
            </Col>
            <Col sm={4}>
              <dl>
                <dt>Loren</dt>
                <dd>Ipsum</dd>
                <dt>Loren ipsum</dt>
                <dd>Lipsum</dd>
              </dl>
            </Col>
          </Row>
          </p>
      </Col>
    
      <Col xs={12} sm={6} className="mySections">
        <p className="mysectiontext">
          <Row>
            <Col>
              <ol>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
              </ol>
            </Col>
            <Col>
              <ul>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
              </ul>
            </Col>
            <Col>
              <strong> Select Your Age</strong><br/>
              <input type="radio" name="age"/>
              <label>0-30</label><br/>
              <input type="radio" name="age" />
              <label>31-60</label><br/>
              <input type="radio" name="age"/>
              <label>61-100</label>
            </Col>
          </Row>
        </p>
      </Col>
    </Row>
  </div>
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
  
  </>
  )
}
export default App;
