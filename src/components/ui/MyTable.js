import { Table } from "react-bootstrap";

function MyTable() {
    var Mydata = [
        {
            Srno:"1",
            name:"Mayuri",
            midname:"Rahul",
            surname:"More"
        },
        {
            Srno:"2",
            name:"Priyanka",
            midname:"Rahul",
            surname:"More"
        },
        {
            Srno:"3",
            name:"Nisha",
            midname:"Rahul",
            surname:"More"
        },
        {
            Srno:"4",
            name:"Saurav",
            midname:"Rahul",
            surname:"More"
        },
    ];
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
                    {
                        Mydata.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.Srno}</td>
                                    <td>{item.name}</td>
                                    <td>{item.midname}</td>
                                    <td>{item.surname}</td>
                                </tr>
                            )
                        }
                           
                        )
                        
                    }
                   
                </tbody>
            </Table>
        </>
    )
}
export default MyTable;