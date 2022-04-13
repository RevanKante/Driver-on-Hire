import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

function DriverConfirmedBookings() {

    const [booking, setBooking] = useState([]);
    const [bookingid, setBookingid] = useState('');

    const handleInput = (event) => {
        console.log("helloooo");
        event.preventDefault();
        const reqData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                driver_id: 1,
            })
        }
        fetch("http://localhost:8080/driverconfirmedbookings?driverid=", reqData)
            .then(resp => resp.json())
            .then(data => setBooking(data));
        console.log(booking);
        //  window.location.reload(false);
    }

    const cancelBooking = (event) => {
        const bookingid = event.target.value;
        setBookingid(bookingid);
        console.log(bookingid);
        event.preventDefault();
        fetch("http://localhost:8080/cancelbooking?bookingid=" + bookingid)
            .then(resp => resp.json())
            .then(data => setBookingid(data));
        console.log(bookingid);

        window.location.reload(false);

    }


    return (
        <form>     
            <div>
            <button className="btn btn-primary" style={{ width: "120px" }} onClick={handleInput}  >Confirmed bookings</button><br/><br/>
                <table className="table table-striped table-bordered" style={{ width: "100%", fontSize: "small" }}>
                    <thead>
                        <tr>
                            <th>Ride Start Date</th>
                            <th>Pickup City</th>
                            <th>Destination  City</th>                           
                            <th>Duration (in Hrs)</th>
                            <th>Pickup Address </th>
                            <th>Total Fare</th>
                            <th>Ride Status</th>
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
                                <td>{booking.total_fare}</td>
                                <td>{booking.ride_status}</td>
                                <td>
                                    <button className="btn btn-primary" style={{ width: "80px" }} value={booking.booking_id} onClick={cancelBooking}  >Cancel Booking</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </form>
    )
}
export default DriverConfirmedBookings