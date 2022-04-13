import React, { useEffect, useState } from "react";
// import NavBar1 from "./000_1_NavBar";
// import Footer1 from "./003_0_Footer";
// import UserDash1 from "../ObsoleteComponents/004_1_User Dashboard";
import UserDash2 from "./004_2_UserDashboardNav ";
// import Reviews from "./14_Reviews";
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import BookingForm1_1 from "./11_0_BookingForm1_1";
import mystore from "./Strore";
import { useNavigate } from "react-router-dom";

export default function DriverHome() {


    const [firstName, setFirstName] = useState('');
    const [custUpcomingBookings, setCustUpcomingBookings] = useState([]);
    const [booking, setBooking] = useState([]);
    const [bookingid, setBookingid] = useState('');

    
   /* useEffect(() => {
        mystore.dispatch({ type: "LOGGEDIN" });
        // mystore.subscribe(() =>  setLoginFlag(mystore.getState().loggedin));
        setLoginFlag(mystore.getState().loggedin);
        const bookingdata = JSON.parse(localStorage.getItem("loggedinuser"));
        //console.log(bookingdata);
        setFirstName(bookingdata.user_id.first_name);
        //   console.log("in use effect");
    })  */         


    const[loginFlag, setLoginFlag] = useState("" );
    console.log("Loginflag= "+loginFlag);

   /* useEffect(() => {
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
    }, []);*/

    const handleInput = (event) => {
        // console.log("helloooo");
         event.preventDefault();
         const reqData = {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
                 driver_id: 2,
             })
         }
         fetch("http://localhost:8080/driverconfirmedbookings?driverid=", reqData)
             .then(resp => resp.json())
             .then(data => setBooking(data));
         console.log(booking);
         //  window.location.reload(false);
     }

    const cancelBooking = (event) => {
        const getbookingid = event.target.value;
        setBookingid(getbookingid);
        console.log(getbookingid);
        event.preventDefault();
        fetch("http://localhost:8080/cancelbooking?bookingid=" + getbookingid)
            .then(resp => resp.json())
            .then(data => setBookingid(data));
        console.log(bookingid);

        window.location.reload(false);

    }
 
        
    return (
         <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                    <BookingForm1_1 />
                    </div>
                    <div className="col-lg-6"><br/>
                    <h3>Your upcoming rides</h3>
                    <button className="btn btn-primary" style={{ width: "120px" }} onClick={handleInput}  >Confirmed bookings</button><br/>
                    <div>
                    <table className="table table-striped table-bordered" style={{ width: "100%",backgroundColor:"whitesmoke" }}>
                            <thead>
                                <tr style={{textAlign:"center"}}>
                                    <th>Pickup City</th>
                                    <th>Destination  City</th>
                                    <th>Duration</th>
                                    <th>Ride Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {booking.map((booking) => (
                            <tr>
                                 <td>{booking.ride_start_date}</td>
                                <td>{booking.pickup_city_id.city_name}</td>
                                <td>{booking.destination_city_id}</td>            
                                <td>{booking.duration_hrs}</td>
                                <td>{booking.pickup_address}</td>
                                <td>{booking.ride_status}</td>
                                <td>
                                    <button className="btn btn-primary" style={{ width: "80px" }} value={booking.booking_id} onClick={cancelBooking}  >Cancel Booking</button>
                                </td>
                            </tr>
                        ))}
                            </tbody>
                        </table>

                    </div>
                </div>
                </div>
              
            </div>
            
            <div className="container-fluid">
                {/* <Reviews /> */}
            </div>
        </div>
    )}