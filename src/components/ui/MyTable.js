import { Table } from "react-bootstrap";

function MyTable(){
    return (
        <>
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
        </>
    )
}
export default MyTable;