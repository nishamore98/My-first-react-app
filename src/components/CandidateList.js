import { Card,  Table, Accordion, Button,} from 'react-bootstrap'

function CandidateList(){
    return (
        <>
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
        </>
    )
}
export default CandidateList;