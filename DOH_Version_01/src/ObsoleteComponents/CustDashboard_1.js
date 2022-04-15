import React, { useEffect, useState } from "react";
import './004_1_User Dashboard.css';
import mystore from "./Strore";
import profilePic2 from './images/profilepic3.jpg';

export default function UserDashboard() {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contact, setContact] = useState('');
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


    return (
        <div className="container-fluid" >
            <br /><br />

            <div className="row"> {/*
                    <div className="col-md-2 cp_custom_nav">
                        <nav className="navbar bg-dark">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/userdash">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Bookings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Payments</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Edit Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Support</a>
                                </li>
                            </ul>
                        </nav>
                    </div> */}
                <div className="row">
                    <div className="col-md-2 cp_custom_nav">
                        <nav className="navbar bg-dark">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/userdash">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/custdashbooking">Bookings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/custdashpayments">Payments</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Edit Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Support</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-10" id="PageUserData" style={{ paddingLeft: "30px", paddingRight: "35x", paddingTop: "100px", paddingBottom: "20px" }} >
                        <div className="card public-profile border-0 rounded shadow" style={{ zIndex: "1" }} >
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 col-md-3 text-md-start text-center">
                                        <img src={""} height="150px" width="150px" className="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="Not Available" />
                                    </div> {/*<!--end col--> */}

                                    <div className="col-lg-10 col-md-9">
                                        <div className="row align-items-end">
                                            <div className="col-md-7 text-md-start mt-4 mt-sm-0">
                                                <h3 className="title mb-0">Ashraf's</h3>
                                                <small className="text-muted h6 me-2">+91 8446735343</small><br />
                                                <small className="text-muted h6 me-2"></small><br />
                                                <small className="text-muted h6 me-2"></small>
                                            </div> {/*<!--end col--> profilePic2*/}
                                        </div>   {/*<!--end row--> */}
                                    </div>   {/*<!--end col--> */}
                                </div>   {/*<!--end row--> */}
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
                                        <h2 className="mb-0 text-light title-dark"><span className="counter-value" data-target="97">&#x20B9; {/*HTML Entity Hexadecimal*/} 0</span></h2>
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