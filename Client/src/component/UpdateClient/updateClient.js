import React from 'react'
import { Modal } from 'react-bootstrap'
import CreateClient from '../Create/CreateClient'

const UpdateClient = ({ show }) => {
    return (
        <div>
            <Modal show={show} centered className='mb-5'>
                <CreateClient />
            </Modal>
        </div >
    )
}

export default UpdateClient