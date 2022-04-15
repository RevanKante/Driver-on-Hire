import React from "react";
import { Navbar } from 'react-bootstrap';
import * as ReactBootStrap from "react-bootstrap";
import { Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-dom';

class NavBar2 extends React.Component
{
    render()
    {
        return(
            <div>
                {/* <nav className="navbar fixed-top navbar-light bg-dark">
                    <div className="container-fluid">
                        <a className="" href="#">Fixed Top</a>
                        <Navbar.Brand>  Navbar with a black bg and white text</Navbar.Brand>


                    </div>
                </nav> */}
                <Navbar className="navbar fixed-top" bg="dark" expand="lg" variant="dark">
                <ReactBootStrap.Container>
                    <Navbar.Brand href="#home" className="m">DriverOnHire</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Login</Nav.Link>
                            <Nav.Link href="#home">Register</Nav.Link>
                            <Nav.Link href="#link">Need Help?</Nav.Link>
                            <Nav.Link href="#link">Drive with us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </ReactBootStrap.Container>
                    </Navbar>
                    
            </div>
        )
    }
}

export default NavBar2;