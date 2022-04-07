import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../favicon.ico'

const NavigationBar = () => {

    const logout = () => {
        localStorage.clear();
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/main">
                        <Navbar.Brand  >
                            <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}Task app </Navbar.Brand>
                        <Navbar.Brand href='/' onClick={() => { logout() }} > CheckOut </Navbar.Brand>
                    </NavLink>

                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar