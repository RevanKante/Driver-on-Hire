import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

function TodaysBookings(){

    const [booking, setBooking] = useState([]);

    //  useEffect(() => {
    //      const getbooking = async () => {
    //          const req = await fetch("http://localhost:8080/todaysbookings");
    //          const getres = await req.json();
    //          console.log(getres);
    //          setBooking(await getres);
    //      }
    //      getbooking();
    //  }, []);

    const handleInput = (event) => {
        // console.log("helloooo");
         event.preventDefault();
        fetch("http://localhost:8080/todaysbookings")
             .then(resp => resp.json())
             .then(data => setBooking(data));
         console.log(booking);
         //  window.location.reload(false);*/
     }

    return(
        <form>
        <button className="btn btn-primary" style={{ width: "14%", fontSize: "small"}} onClick={handleInput}>Today's Bookings</button><br/><br/>
        <div>
        <table className="table table-striped table-bordered" style={{ width: "100%", fontSize: "small"}}>
            <thead>
                <tr>
                    <th>Booking ID</th>
                    <th>Date of Booking</th>
                    <th>Pickup City</th>
                    <th>Destination  City</th>
                    <th>Ride Start Date</th>
                    <th>Duration (in Hrs)</th>
                    {/* <th>Pickup Time</th> */}
                    <th>Pickup Address </th>
                    {/* <th>Actual ride end Time</th> */}
                    <th>Total Fare</th>

                    <th>Ride Status</th>
                    <th>Driver details</th>
                    {/* <th>Driver Contact</th> */}
                    {/* <th>Ratings</th> */}
                    {/* <th>Reviews</th> */}
                </tr>
            </thead>
            <tbody>

                {booking.map((booking) => (
                    <tr>
                        <td>{booking.booking_id}</td>
                        <td>{booking.book_date}</td>
                        <td>{booking.pickup_city_id.city_name}</td>
                        <td>{booking.destination_city_id}</td>
                        <td>{booking.ride_start_date}</td>
                        <td>{booking.duration_hrs}</td>
                        <td>{booking.pickup_address}</td>
                        {/* <td>{booking.actual_ride_end_time}</td> */}
                        <td>{booking.total_fare}</td>
                        {/* <td>{booking.user_id.first_name}</td>
                                <td>{booking.user_id.contact}</td> */}
                        {/* <td>{booking.driver_id.aadhar_no}</td> */}
                        {/* <td>{booking.driver_id.user_id.first_name}</td>
                                <td>{booking.driver_id.user_id.contact}</td> */}
                        <td>{booking.ride_status}</td>
                        <td>{booking.driver_id.driver_id}</td>
                        {/* <td><a href="" onClick={driverDetails} key={booking.booking_id}  >see driver details</a></td> */}

                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </form>
    )

}
export default TodaysBookings