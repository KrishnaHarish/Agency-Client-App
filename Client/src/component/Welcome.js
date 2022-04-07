import React, { useRef, useState } from 'react'
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { FaUser, FaEnvelope, FaUsers } from 'react-icons/fa';
import { postMethod } from '../utiles/requiestApis.js'
import { VISITORAPI } from '../utiles/endPoints.js'

const Welcome = () => {

    const [validated, setValidated] = useState(false);
    const history = useHistory()
    const username = useRef()
    const email = useRef()
    const role = useRef()
    let visitor;




    const handleSubmit = async (event) => {
        const form = event.currentTarget;

        visitor = {
            username: username.current.value,
            email: email.current.value,
            role: role.current.value,
        }


        console.log('1')


        event.preventDefault();
        if (form.checkValidity() === true) {
           
            // event.stopPropagation();

            const data = await postMethod(VISITORAPI, visitor)
            console.log(data)

            if (data.data.error) {
                alert('try again later');
            } else {
                alert(data.data.message)
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('name', data.data.name);
                localStorage.setItem('role', data.data.role);
                history.push('/main')
            }

        }

        setValidated(true);
    };


    return (
        <div>
            <Card className="WelcomeCard p-4">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Card.Body>
                        <Card.Title> <h2><b>Welcome to <br /> the application</b></h2> </Card.Title>
                        <hr />
                        * enter the username and email

                        <hr />

                        <Card.Text>

                            <FloatingLabel label={<FaUser />} className="mb-3">
                                <Form.Control type="text" placeholder="username" ref={username} required />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                            </FloatingLabel>

                            <FloatingLabel label={<FaEnvelope />} className="mb-3" >
                                <Form.Control type="email" placeholder="name@example.com" ref={email} required />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                            </FloatingLabel>

                            <FloatingLabel label={<FaUsers />} required>
                                <Form.Select ref={role}>
                                    <option value="admin">Admin</option>
                                    <option value="user">User  </option>
                                </Form.Select>
                            </FloatingLabel>

                        </Card.Text>
                        <br />

                    </Card.Body>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type='submit'> Submit </Button>
                    </div>
                </Form>
            </Card>
        </div >
    )
}

export default Welcome