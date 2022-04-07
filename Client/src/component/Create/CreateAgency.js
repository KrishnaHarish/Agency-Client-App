import React, { useRef, useState } from 'react'
import { Button, Card, Col, Form, FormControl, Row } from 'react-bootstrap'
import { postMethod } from '../../utiles/requiestApis.js'
import { CREATEAPI } from '../../utiles/endPoints.js'



const CreateAgency = () => {

    const [validated, setValidated] = useState(false);
    const AgencyID = useRef()
    const Name = useRef()
    const Address1 = useRef()
    const Address2 = useRef()
    const State = useRef()
    const City = useRef()
    const Phoneno = useRef()





    const handleSubmit = async (event) => {

        const form = event.currentTarget;

        var AgencyData = {
            AgencyID: AgencyID.current.value,
            Name: Name.current.value,
            Address1: Address1.current.value,
            Address2: Address2.current.value,
            State: State.current.value,
            City: City.current.value,
            Phoneno: Phoneno.current.value
        }



        event.preventDefault();
        if (form.checkValidity() === true) {
            event.stopPropagation();
            console.log(AgencyData);
            const response = await postMethod(CREATEAPI, AgencyData)
            console.log(response)
            alert(response.data.message)
        }
        setValidated(true)

    };



    return (
        <div>

            <div className="mt-5">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                    <Card className="p-4 farmcards">

                        <h2>Create Agency Form</h2>
                        <hr /><br />

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>AgencyId</Form.Label>
                                <Form.Control required type="text" placeholder="AgencyId" ref={AgencyID} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required type="text" placeholder="Name" ref={Name} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <br />
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="" controlId="validationCustom02">
                                <Form.Label>Adress1</Form.Label>
                                <FormControl placeholder='enter adress ' as="textarea" aria-label="With textarea" required ref={Address1} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="" controlId="validationCustom02">
                                <Form.Label>Adress2</Form.Label>
                                <FormControl placeholder='enter adress ' as="textarea" aria-label="With textarea" ref={Address2} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>


                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" required ref={State} />
                                <Form.Control.Feedback type="invalid"> Please provide a valid State. </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" required ref={City} />
                                <Form.Control.Feedback type="invalid"> Please provide a valid City. </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label>Phone no</Form.Label>
                                <Form.Control type="number" placeholder="Phone no" required ref={Phoneno} />
                                <Form.Control.Feedback type="invalid"> Please provide a valid Phone. </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <div>
                            <Button type="submit">Submit form</Button>
                        </div>

                    </Card>

                </Form>

            </div>
        </div>
    )
}

export default CreateAgency