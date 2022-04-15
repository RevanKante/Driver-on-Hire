import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useState } from "react/cjs/react.development";
import mystore from "./Strore";
import { useNavigate } from "react-router-dom";
import Register1 from "../ObsoleteComponents/RegisterForm_2";
import CustDashBooking from "./CustDashBooking_1";


function NavBar1()
{
    let navigate = useNavigate();
   
    const [state, setState] = useState({
        flag: false
    });
   
        mystore.subscribe(()=>{setState({flag: mystore.getState().loggedin})})
        return(
            <div>

                <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar fixed-top">
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Navbar.Brand href="/">DriverOnHire  </ReactBootStrap.Navbar.Brand>
                            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                                    <ReactBootStrap.Nav className="me-auto">
                                        <ReactBootStrap.Nav.Link href="/#">Drive With Us</ReactBootStrap.Nav.Link>
                                        <ReactBootStrap.Nav.Link href="#pricing">Need Help?</ReactBootStrap.Nav.Link>
                                    </ReactBootStrap.Nav>

                                    <ReactBootStrap.Nav>
                                        <div style={{display: state.flag?'none':'block'}}>
                                        <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
                                        </div>
                                        <div style={{display: state.flag?'none':'block'}}>
                                        <ReactBootStrap.Nav.Link href="/register">Register</ReactBootStrap.Nav.Link>
                                        </div>
                                        <div style={{display: state.flag?'block':'none'}}>
                                        <ReactBootStrap.Nav.Link href="/custdashnav" >Dashboard</ReactBootStrap.Nav.Link>
                                        </div>
                                        <div style={{display: state.flag?'block':'none'}}>
                                        <ReactBootStrap.Nav.Link href="/" >Logout</ReactBootStrap.Nav.Link>
                                        {/* onClick={logout} */}
                                        </div>

                                     </ReactBootStrap.Nav>
                             </ReactBootStrap.Navbar.Collapse>
                         </ReactBootStrap.Container>
                </ReactBootStrap.Navbar>
            </div>
        )
    
}

export default NavBar1;
