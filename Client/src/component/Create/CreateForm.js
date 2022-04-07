import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CreateAgency from './CreateAgency'
import CreateClient from './CreateClient'



const CreateForm = () => {

    const role = localStorage.getItem('role');
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);


    return (

        <div className="p-5">

            {role === "admin" && <Button className="m-2" onClick={() => setOpen1(!open1)}>Create Agency</Button>}
            <Button className="m-2" onClick={() => setOpen2(!open2)}>Create Client</Button>

            <Container>
                <Row>
                    {role !== "user" && <Col sx={12} md={6}>

                        {open1 &&
                            <CreateAgency />}

                    </Col>}
                    <Col sx={12} md={6}>
                        {open2 &&
                            <Container className="mt-5 ">
                                <CreateClient />
                            </Container>
                        }
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default CreateForm