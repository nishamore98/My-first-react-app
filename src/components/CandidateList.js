import { Card,  Table, Accordion, Button,} from 'react-bootstrap'
import MyTable from './ui/MyTable';

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
                            <MyTable />
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </>
    )
}
export default CandidateList;