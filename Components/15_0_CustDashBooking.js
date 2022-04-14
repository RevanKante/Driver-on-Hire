import React, { useEffect, useState } from "react";
// import { useState, useEffect } from "react/cjs/react.development";
import moment from "moment";

function CustDashBooking() {

    const [booking, setBooking] = useState([]);
   const [bookingid, setBookingid] = useState('');
    const [confirmedBooking, setConfirmedBooking] = useState('');
    const [bookingToBeConfirmed, setBookingToBeConfirmed] = useState('');


    useEffect(() => {
        const getbooking = async () => {
            const req = await fetch("http://localhost:8080/pendingbookings");
            const getres = await req.json();
            console.log(getres);
            setBooking(await getres);
        }
        getbooking();
    }, []);

    const handleInput=(event)=>{
        const getbookingid = event.target.value;
        setBookingid(getbookingid);
        console.log(getbookingid);
        event.preventDefault();
        fetch("http://localhost:8080/confirmbooking?bookingid="+getbookingid)
        .then(resp => resp.json())
        .then(data => setBookingid(data));
        console.log(bookingid);

        window.location.reload(false);
      
    }

    return (
        <form>
            <div className="container-fluid">
                <div style={{ marginLeft: "20px", marginRight: "20px" }}>
                    <div>
                        <table className="table table-striped table-bordered" style={{ width: "100%", fontSize: "small" }}>
                            <thead>
                                <tr>
                                    <th>Booking ID</th>
                                    {/* <th>Date of Booking</th> */}
                                    <th>Pickup City</th>
                                    <th>Destination  City</th>
                                    <th>Ride Start Date</th>
                                    <th>Duration</th>
                                    {/* <th>Pickup Time</th> */}
                                    <th>Pickup Address </th>
                                    {/* <th>Ride end Time</th> */}
                                    <th>Total Fare</th>
                                    {/* <th>Driver Name</th>
                                    <th>Driver Contact</th>
                                    <th>Ride Status</th>
                                    <th>Ratings</th>
                                    <th>Reviews</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    booking.map((getcon) => (
                                        <tr>
                                            <td >{getcon.booking_id}</td>
                                            <td>{getcon.pickup_city_id.city_name}</td>
                                            <td>{getcon.destination_city_id}</td>
                                            <td>{getcon.ride_start_date}</td>
                                            <td>{getcon.duration_hrs}</td>
                                            <td style={{ width: "200px" }}>{getcon.pickup_address}</td>
                                            <td>{getcon.total_fare}</td>

                                            <td style={{ width: "10px" }}>
                                                <button className="btn btn-primary" style={{ width: "80px" }} value={getcon.booking_id} onClick={handleInput} >Confirm</button>
                                            </td>



                                            {/* <td>{getcon.duration_hrs}</td>
                                            <td>{getcon.duration_hrs}</td>   onClick={confirmBooking}
                                            <td>{getcon.duration_hrs}</td>
                                            <td>{getcon.duration_hrs}</td>
                                            <td>{getcon.duration_hrs}</td>
                                            <td>{getcon.duration_hrs}</td>
                                            <td>{getcon.duration_hrs}</td> onClick={confirnBooking}
                                            <td>{getcon.duration_hrs}</td> */}
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </form>
    )


}
export default CustDashBooking;