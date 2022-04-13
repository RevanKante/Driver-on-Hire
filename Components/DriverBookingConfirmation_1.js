import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import moment from "moment";

function DriverBookingConfirmation() {

    const [booking, setBooking] = useState([]);
    const [bookingid, setBookingid] = useState('');

    useEffect(() => {
        const getbooking = async () => {
            const req = await fetch("http://localhost:8080/pendingbookings");
            const getres = await req.json();
            console.log(getres);
            setBooking(await getres);
        }
        getbooking();
    }, []);

    const handleInput = (event) => {
        const bookingid = event.target.value;
        setBookingid(bookingid);
        console.log(bookingid);
        event.preventDefault();
        fetch("http://localhost:8080/confirmbooking?bookingid=" + bookingid)
            .then(resp => resp.json())
            .then(data => setBookingid(data));
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
                                    <th>Ride Start Date</th>
                                    <th>Pickup City</th>
                                    <th>Destination  City</th>                                   
                                    <th>Duration(Hrs)</th>
                                    <th>Pickup Address </th>
                                    <th>Total Fare</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    booking.map((getcon) => (
                                        <tr>
                                            <td>{getcon.ride_start_date}</td>
                                            <td>{getcon.pickup_city_id.city_name}</td>
                                            <td>{getcon.destination_city_id}</td>                                            
                                            <td>{getcon.duration_hrs}</td>
                                            <td style={{ width: "200px" }}>{getcon.pickup_address}</td>
                                            <td>{getcon.total_fare}</td>
                                            <td style={{ width: "10px" }}>
                                                <button className="btn btn-primary" style={{ width: "80px" }} value={getcon.booking_id} onClick={handleInput} on >Confirm</button>
                                            </td>
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
export default DriverBookingConfirmation;