import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const Main = () => {


    const visitor = localStorage.getItem('name');
    const role = localStorage.getItem('role');

    return (
        <div>
            <Container>
                <div className="p-5">
                    <h2>welcome  {visitor},</h2>
                    {role === 'admin' ?
                        <h4 >as Admin, You have Complete axcess to the application and can Create and update the Agency & clients</h4> :
                        <h4>as Visitor, You only have the axcess to view and join the agency as a client</h4>}


                    <Row className="mt-5">

                        <Col xs={12} md={4} className="mb-3">
                            {(role === 'admin' || role === 'user') &&
                                <NavLink to="/CreateForm" className="tdn">
                                    <Card className='cards p-5' >
                                        <p>1st API-this is a Create API,</p><br />
                                        <h4>create Agency / Clients</h4>
                                    </Card>
                                </NavLink>
                            }
                        </Col>

                        <Col xs={12} md={4} className="mb-3">
                            {role === 'admin' &&
                                <NavLink to="/ClientDetails" className="tdn">
                                    <Card className='cards p-5'>
                                        <p>2st API-this is a Update API, to update the clients</p>
                                        <h4>Update Clients</h4>
                                    </Card>
                                </NavLink>
                            }
                        </Col>


                        <Col xs={12} md={4} className="mb-3">
                            {(role === 'admin' || role === 'user') &&
                                <NavLink to="/Clients" className="tdn">
                                    <Card className='cards p-5'>
                                        <p>3st API-this is to get the top client with higest bill,</p>
                                        <h4>view Clients</h4>
                                    </Card>
                                </NavLink>
                            }
                        </Col>

                    </Row>


                </div>
            </Container>
        </div>
    )
}

export default Main