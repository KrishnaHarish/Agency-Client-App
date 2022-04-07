import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { postMethod, getMethod, putMethod } from '../../utiles/requiestApis.js';
import { CREATEAPI, GETAGENCY, UPDATECLIENT } from '../../utiles/endPoints.js'


const CreateClient = ({ setshow, show, editdata, getClient }) => {

    const [validated, setValidated] = useState(false);
    const [agency, setagency] = useState([]);
    const ClientID = useRef();
    const AgencyID = useRef();
    const Name = useRef();
    const Email = useRef();
    const Phone = useRef();
    const TotalBill = useRef();


    const handleSubmit = async (event) => {
        const form = event.currentTarget;

        const CreateClient = {
            ClientID: ClientID.current.value,
            AgencyID: AgencyID.current.value,
            Email: Email.current.value,
            Name: Name.current.value,
            TotalBill: TotalBill.current.value,
            Phone: Phone.current.value,
        }

        console.log(form.checkValidity());

        event.preventDefault();

        if (form.checkValidity() === true) {
            event.stopPropagation();
            console.log(CreateClient);

            if (editdata) {
                console.log('update');
                var response = await putMethod(UPDATECLIENT, CreateClient);
                // console.log(response);
            } else {
                console.log('post');
                response = await postMethod(CREATEAPI, CreateClient);
                // console.log(response);
            }

            alert(response.data.message)

            if (!response.data.error) {
                if (show) { setshow(false) }
                getClient()
            }

        }
        setValidated(true);
    };


    useEffect(() => {
        getAgency()
    }, [])

    const getAgency = async () => {
        const data = await getMethod(GETAGENCY);
        console.log(data.data.data);
        setagency(data.data.data)
    }

    return (
        <div>


            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Card className="p-4 farmcards">

                    <h2>Create Client Form</h2>
                    <hr /><br />

                    <Row className="mb-3">

                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>ClientID</Form.Label>
                            <Form.Control required type="text" placeholder="ClientID" ref={ClientID} disabled={editdata && true} defaultValue={editdata && editdata.ClientID} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4"  >
                            <Form.Label>AgencyID</Form.Label>
                            <Form.Select label="Default select example" ref={AgencyID} disabled={editdata && true} defaultValue={editdata && editdata.AgencyID}>
                                {agency && agency.map((agy, inx) => {
                                    return <option value={agy.AgencyID} key={inx}>{agy.AgencyID}</option>
                                })}
                            </Form.Select>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type="email" placeholder="Email" aria-describedby="inputGroupPrepend" required ref={Email} defaultValue={editdata && editdata.Email} />
                                <Form.Control.Feedback type="invalid"> Please choose a email ID. </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" required ref={Name} defaultValue={editdata && editdata.Name} />
                            <Form.Control.Feedback type="invalid"> Please provide a valid State. </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label>TotalBill</Form.Label>
                            <Form.Control type="number" placeholder="TotalBill" required ref={TotalBill} defaultValue={editdata && editdata.TotalBill} />
                            <Form.Control.Feedback type="invalid"> Please provide a valid City. </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Phone no</Form.Label>
                            <Form.Control type="text" placeholder="Phone no" required ref={Phone} defaultValue={editdata && editdata.Phone} />
                            <Form.Control.Feedback type="invalid"> Please provide a valid Phone. </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div>
                        <Button type="submit">Submit form</Button>
                    </div>
                </Card>

            </Form>

        </div>
    )
}

export default CreateClient