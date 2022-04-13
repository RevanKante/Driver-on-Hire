import React from "react";
import './CustDashboard_1.css';
import CustDashBooking from "./CustDashBooking_1";
import profilePic2 from './images/profilepic3.jpg';
import { useState, useEffect } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";
import mystore from "./Strore";
import * as ReactBootStrap from "react-bootstrap";


export default function DashboardNav() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contact, setContact] = useState('');

    let navigate = useNavigate();



    useEffect(() => {
        mystore.dispatch({ type: "LOGGEDIN" });
        mystore.subscribe(() => setLoginFlag(mystore.getState().loggedin));
        setLoginFlag(mystore.getState().loggedin);
        const bookingdata = JSON.parse(localStorage.getItem("loggedinuser"));
        console.log(bookingdata);
        setFirstName(bookingdata.user_id.first_name);
        setLastName(bookingdata.user_id.last_name);
        setContact(bookingdata.user_id.contact);
        //setState({loggedinuserdata:bookingdata});
        //  console.log("in use effect");
        //console.log(bookingdata.user_id.first_name);
    })

    const [loginFlag, setLoginFlag] = useState("");
    console.log("Loginflag= " + loginFlag);

    const navigateToCustBooking = () => {
        navigate('/custdashbooking');
    }

    const navigateToCustPayment = () => {
        navigate('/custdashpayments');
    }

    const navigateToCustHome = () => {
        navigate('/customerhome');
    }


    return (
        <div >

            <div className="container-fluid">
                <br /><br />
                <div className="row">
                    <div className="col-md-2 cp_custom_nav">
                        <nav className="navbar bg-dark">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" >Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="" onClick={navigateToCustBooking}>Bookings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="" onClick={navigateToCustPayment}>Payments</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Edit Profile</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">Support</a>
                                </li> */}
                            </ul>
                        </nav>
                    </div>

                    <div className="col-md-10" id="PageUserData" style={{ paddingLeft: "35px", paddingRight: "35x", paddingTop: "20px", paddingBottom: "20px" }} >
                        <div className="card public-profile border-0 rounded shadow" style={{ zIndex: "1" }} >
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 col-md-3 text-md-start text-center">
                                        {/* <img src={""} height="150px" width="150px" className="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="Not Available" /> */}
                                    </div>

                                    <div className="col-lg-10 col-md-9">
                                        <div className="row align-items-end">
                                            <div className="col-md-7 text-md-start mt-4 mt-sm-0">
                                                <h3 className="title mb-0">{firstName} {lastName} </h3>
                                                <small className="text-muted h6 me-2">{contact}</small><br />
                                                <button className="btn btn-primary" style={{ width: "200px", marginLeft: "800px" }} onClick={navigateToCustHome} href="">Return to Home page</button>
                                                <small className="text-muted h6 me-2"></small><br />
                                                <small className="text-muted h6 me-2"></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: "30px" }}>
                            <div className="col-md-3 mt-4">
                                <div className="card counter-box border-0 bg-primary shadow text-center rounded">
                                    <div className="card-body py-5">
                                        <h2 className="mb-0 text-light title-dark"><span className="counter-value" data-target="97">1</span></h2>
                                        <h5 className="counter-head text-light title-dark mb-0">Total Bookings</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mt-4">
                                <div className="card counter-box border-0 bg-primary shadow text-center rounded">
                                    <div className="card-body py-5">
                                        <h2 className="mb-0 text-light title-dark"><span className="counter-value" data-target="97">0</span></h2>
                                        <h5 className="counter-head text-light title-dark mb-0">Completed Bookings</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mt-4">
                                <div className="card counter-box border-0 bg-primary shadow text-center rounded">
                                    <div className="card-body py-5">
                                        <h2 className="mb-0 text-light title-dark"><span className="counter-value" data-target="97">1</span></h2>
                                        <h5 className="counter-head text-light title-dark mb-0">Cancelled Bookings</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mt-4">
                                <div className="card counter-box border-0 bg-primary shadow text-center rounded">
                                    <div className="card-body py-5">
                                        <h2 className="mb-0 text-light title-dark"><span className="counter-value" data-target="97">&#x20B9;  0</span></h2>
                                        <h5 className="counter-head text-light title-dark mb-0">Payments</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

{/*
data-target="97">&#x20B9; Symbol of rupees-HTML Entity Hexadecimal*/} 