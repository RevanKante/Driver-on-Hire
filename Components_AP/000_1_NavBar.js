import React from "react";
import * as ReactBootStrap from "react-bootstrap";

class NavBar1 extends React.Component
{
    render()
    {
        return(
            <div>
                 {/* <nav className="navbar  navbar-fixed">
                    <div className="container-fluid" >
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Driver On Hire</a>
                        </div>
                        <div className="navbar navbar-collapse" id="myNavBar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Page 1-1</a></li>
                                        <li><a href="#">Page 1-2</a></li>
                                        <li><a href="#">Page 1-3</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Page 2</a></li>
                                <li><a href="#">Page 3</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav> 
                <div className="container">
                    <h3>Collapsible Navbar</h3>
                    <p>XYZ</p>
                </div> */}

                <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar fixed-top">
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Navbar.Brand href="#home">DriverOnHire  </ReactBootStrap.Navbar.Brand>

                            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav"  />

                                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">

                                    <ReactBootStrap.Nav className="me-auto">
                                        <ReactBootStrap.Nav.Link href="#features">Drive With Us</ReactBootStrap.Nav.Link>
                                        <ReactBootStrap.Nav.Link href="#pricing">Need Help?</ReactBootStrap.Nav.Link>
                                        {/* 
                                            <ReactBootStrap.NavDropdown title="Login" id="collasible-nav-dropdown">
                                                <ReactBootStrap.NavDropdown.Item href="#action/3.1">To Hire a driver</ReactBootStrap.NavDropdown.Item>
                                                <ReactBootStrap.NavDropdown.Item href="#action/3.2">To get hired</ReactBootStrap.NavDropdown.Item>
                                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                                                <ReactBootStrap.NavDropdown.Divider />
                                                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Register</ReactBootStrap.NavDropdown.Item>
                                            </ReactBootStrap.NavDropdown> */}
                                    </ReactBootStrap.Nav>

                                    <ReactBootStrap.Nav>

                                            {/* <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                                            Need Help?
                                            </ReactBootStrap.Nav.Link> */}

                                            {/* <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link> */}

                                        <ReactBootStrap.Nav.Link href="#features">Login</ReactBootStrap.Nav.Link>
                                        <ReactBootStrap.Nav.Link href="#pricing">Register</ReactBootStrap.Nav.Link>
                                        {/*
                                        <ReactBootStrap.NavDropdown title="Login" id="collasible-nav-dropdown">
                                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">As a customer</ReactBootStrap.NavDropdown.Item>
                                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">As a driver</ReactBootStrap.NavDropdown.Item>
                                            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item> 
                                             <ReactBootStrap.NavDropdown.Divider />
                                            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Register</ReactBootStrap.NavDropdown.Item>
                                        </ReactBootStrap.NavDropdown>

                                        <ReactBootStrap.NavDropdown title="Register" id="collasible-nav-dropdown">
                                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">As a customer</ReactBootStrap.NavDropdown.Item>
                                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">As a driver</ReactBootStrap.NavDropdown.Item>
                                            {/* <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item> */}
                                            {/* <ReactBootStrap.NavDropdown.Divider />
                                            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Register</ReactBootStrap.NavDropdown.Item>
                                        </ReactBootStrap.NavDropdown> */}

                                     </ReactBootStrap.Nav>

                             </ReactBootStrap.Navbar.Collapse>
                         </ReactBootStrap.Container>
                </ReactBootStrap.Navbar>
            </div>
        )
    }
}

export default NavBar1;
