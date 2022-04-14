import React, { useEffect, useState } from "react";
import NavBar1 from "./NavBar_1";
import Footer1 from "./Footer_0";
import UserDash1 from "../ObsoleteComponents/User Dashboard_2";
import UserDash2 from "./CustDashboardNav_2 ";
import Reviews from "./Reviews_1";
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import BookingForm1_1 from "./BookingForm_2";
import mystore from "./Strore";
import { useNavigate } from "react-router-dom";

export default function CustomerHome() {


    const [firstName, setFirstName] = useState('');
    const [custUpcomingBookings, setCustUpcomingBookings] = useState([]);


    
    useEffect(() => {
        mystore.dispatch({ type: "LOGGEDIN" });
        // mystore.subscribe(() =>  setLoginFlag(mystore.getState().loggedin));
        setLoginFlag(mystore.getState().loggedin);
        const bookingdata = JSON.parse(localStorage.getItem("loggedinuser"));
        //console.log(bookingdata);
        setFirstName(bookingdata.user_id.first_name);
        //   console.log("in use effect");
    })           


    const[loginFlag, setLoginFlag] = useState("" );
    console.log("Loginflag= "+loginFlag);

    useEffect(() => {
        const loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"));
        //console.log(loggedinuser);
        const getAllCustBookings = async () => {
            //const req = await fetch("http://localhost:8080/getconfirmedcustbookings?user_id=" + loggedinuser.user_id.user_id);
            const req = await fetch("http://localhost:8080/getallcustbookings?user_id=" + loggedinuser.user_id.user_id);
            const getres = await req.json();
            console.log(getres);
            setCustUpcomingBookings(await getres);
        }
        getAllCustBookings();
    }, []);

    const cancelRide=(ev)=>{
        //console.log(ev.target.value);
        fetch("http://localhost:8080/cancelCustRide?bookingid=" + ev.target.value)
            .then(resp => resp.json())
            .then(data => console.log(data)) 
           .then(window.location.reload('true'));
    }
 
        
    return (
         <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                    <BookingForm1_1 />
                    </div>
                    <div className="col-lg-6"><br/><br/><br/><br/>
                    <h3>Your upcoming rides</h3>
                    <div>
                    <table className="table table-striped table-bordered" style={{ width: "100%" }}>
                            <thead>
                                <tr style={{textAlign:"center"}}>
                                    {/* <th>Sr. No.</th> */}
                                    <th>Pickup City</th>
                                    <th>Destination  City</th>
                                    <th>Ride Start Date</th>
                                    <th>Duration</th>
                                    <th>Ride Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    custUpcomingBookings.map((booking)=>(
                                        <tr>
                                            <td>{booking.pickup_city_id.city_name}</td>
                                            <td>{booking.destination_city_id} </td>
                                            <td>{booking.ride_start_date} </td>
                                            <td>{booking.duration_hrs} </td>
                                            <td>{booking.ride_status} </td>
                                            <td><button style={{width:"100px"}} onClick={cancelRide} value={booking.booking_id}>Cancel Ride</button></td>
                                            <td style={{display:'none'}} ><button style={{width:"100px"}}>Start Ride</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
                </div>
              
            </div>
            
            <div className="container-fluid">
                <Reviews />
            </div>
        </div>
    )}