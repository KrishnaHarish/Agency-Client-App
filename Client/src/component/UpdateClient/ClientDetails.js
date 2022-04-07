import React, { useEffect, useState } from 'react'
import { Button, Container, Modal, Table } from 'react-bootstrap'
import { AllCLIENT } from '../../utiles/endPoints'
import { getMethod } from '../../utiles/requiestApis'
import CreateClient from '../Create/CreateClient'

const ClientDetails = () => {

    const [client, setclient] = useState([]);
    const [show, setshow] = useState(false);

    const [editdata, seteditdata] = useState()

    const updateClient = (editclient) => {
        seteditdata(editclient)
        setshow(true)
    }

    useEffect(() => {
        getClient();
    }, [])

    const getClient = async () => {
        const data = await getMethod(AllCLIENT)
        setclient(data.data.data);
    }

    return (
        <div>

            <Container className="mt-5">
                <Table striped bordered hover variant="dark" responsive>

                    <thead>
                        <tr>
                            <th>AgencyID</th>
                            <th>ClientID</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>TotalBill</th>
                            <th>update</th>
                        </tr>
                    </thead>

                    <tbody>
                        {client && client.map((client) => {
                            return (
                                <tr key={client._id} >
                                    <td>{client.AgencyID}</td>
                                    <td>{client.ClientID}</td>
                                    <td>{client.Email}</td>
                                    <td>{client.Name}</td>
                                    <td>{client.Phone}</td>
                                    <td>{client.TotalBill}</td>
                                    <td><Button onClick={() => { updateClient(client) }}>update</Button></td>
                                </tr>
                            )
                        })

                        }
                    </tbody>

                </Table>
            </Container>

            <div>
                <Modal show={show} centered className='mb-5'>
                    <CreateClient show={show} setshow={setshow} editdata={editdata} getClient={getClient} />
                </Modal>
            </div>

        </div >
    )
}

export default ClientDetails