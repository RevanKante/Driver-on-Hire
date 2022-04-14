//import { Tooltip } from "bootstrap";
// import Tooltip from 'rc-tooltip';
// import 'rc-tooltip/assets/bootstrap_white.css';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mystore from "./Strore";


function CustDashPayments() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contact, setContact] = useState('');
    const [bookingData, setBookingData] = useState([]);


    useEffect(() => {
        mystore.dispatch({ type: "LOGGEDIN" }); //necessary
        mystore.subscribe(() => setLoginFlag(mystore.getState().loggedin));
        setLoginFlag(mystore.getState().loggedin);
        const bookingdata = JSON.parse(localStorage.getItem("loggedinuser"));
        setBookingData(bookingData);
        console.log(bookingdata);
        setFirstName(bookingdata.user_id.first_name);
        setLastName(bookingdata.user_id.last_name);
        setContact(bookingdata.user_id.contact);
        //setState({loggedinuserdata:bookingdata});
        //  console.log("in use effect");
        //console.log(bookingdata.user_id.first_name);
    });



    const [loginFlag, setLoginFlag] = useState("");
    console.log("Loginflag= " + loginFlag);

    const navigateToCustDash = () => {
        navigate("/custdashnav");
    }

    const navigateToCustBooking = () => {
        navigate("/custdashbooking");
    }

    const navigateToUpdateProfile = () => {
        navigate('/updateprofile');
    }

    return (
        <div className="container-fluid">
            <br /><br />

            <div className="row">
                <div className="col-md-2 cp_custom_nav">
                    <nav className="navbar bg-dark">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="" onClick={navigateToCustDash}>Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="" onClick={navigateToCustBooking}>Bookings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Payments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="" onClick={navigateToUpdateProfile}>Edit Profile</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li> */}
                        </ul>
                    </nav>
                </div>
                <div className="col-md-10" > <br /><br />
                    <div> Welcome to payments page</div>

                    <div style={{ marginLeft: "0px" }}>
                        <div>
                            <table className="table table-striped table-bordered" style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>Payment ID</th>
                                        <th>Booking ID</th>
                                        <th>Payment Time</th>
                                        <th>Amount</th>
                                        <th>Payment mode</th>
                                        <th>Transaction ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td><a href="#">2 </a> </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <Tooltip title="add">Add</Tooltip> */}
                        </div>
                    </div>
                </div> </div> </div>
    )


}
export default CustDashPayments;