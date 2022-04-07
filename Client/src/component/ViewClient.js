import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { GETAGENCY, GETCLIENT } from '../utiles/endPoints.js'
import { getMethod, postMethod } from '../utiles/requiestApis.js'


const ViewClient = () => {

    const [agency, setagency] = useState([])
    const [client, setclient] = useState([])
  
    useEffect(() => {
        getAgency()
    }, [])

    const getAgency = async () => {
        const data = await getMethod(GETAGENCY);
        // console.log(data.data.data);
        setagency(data.data.data)
    }

    const getClient = async (id) => {
        console.log(id)
        const data = await postMethod(GETCLIENT, { id })
        // console.log(data.data.data);
        setclient(data.data.data);
    }

    return (
        <div className="m-5">
            <h2> Select the Agency to get the Top clients with Highest Total Bill </h2>
            <Row>
                <Col className="mt-4" xs={12} md={4}>
                    {agency && agency.map((ele) => {
                        return (
                            <Card className=" my-2 p-3 cards" onClick={() => { getClient(ele.AgencyID) }}>
                                <span>Agency ID: {ele.AgencyID}</span>
                                <span>Agency name: {ele.Name}</span>
                            </Card>
                        )
                    })}
                </Col>

                {client && <Col className="mt-4" xs={12} md={8}>

                    <Card className='agenctCard p-5'>
                        {client && <>
                            <Card.Body>
                                <h3>Agency Name:- {client.AgencyName}</h3>
                                <h3>Client Name:- {client.clientName}</h3>
                                <h3>Totel Bill:- Rs {client.TotalBill}/-</h3>
                            </Card.Body>

                        </>
                        }
                    </Card>

                </Col>}

            </Row>
        </div>
    )
}

export default ViewClient