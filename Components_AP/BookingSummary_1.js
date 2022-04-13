import React from "react";
//import styles from "./bookingSummary.css";
import { useState, useEffect } from "react/cjs/react.development";
import moment from "moment";
import { useNavigate } from "react-router-dom";


export default function BookingSummary() {

    let navigate = useNavigate();      

    const [returnedBooking, setReturnedBooking] = useState('');
    
    const [bookingform1data, setBookingform1data] = useState('');
    localStorage.getItem("BookingForm1Data", bookingform1data);

    const bookingdata = JSON.parse(localStorage.getItem("BookingForm1Data"));

    const date = moment(bookingdata.ride_start_date).format("YYYY-MM-DD HH:mm a");

    const [totalfare, setTotalFare] = useState('');

    const citylist = JSON.parse(localStorage.getItem("CityList")).getres;

    const result = citylist.filter((city) => {
        return city.city_id == bookingdata.city_id;
    });

    const sendData = (ev) => {
        ev.preventDefault();
        const reqData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: localStorage.getItem("BookingForm1Data"),
        }
        //console.log(reqData);

        fetch("http://localhost:8080/generatebooking", reqData)
            .then(resp => resp.json())
            // .then(data => console.log(data));
            .then(data=>{
                if(data.length != 0){
                    localStorage.removeItem("BookingForm1Data");
                    console.log("Removed booking data from local storage");
                }
            });
            alert("Congrats! Your booking request is submitted. You are be redirected to Home page.")

            navigate('/customerhome');
    }

    return (

        <form>
            <div><h5 className="bs1">BookingSummary</h5></div>
            <table>
                <tbody className="summary">
                    <tr>
                        <td><label>Trip Type</label></td>
                        <td>Round Trip</td>
                    </tr>
                    <tr>
                        <td><label>Pickup city</label> </td>
                        <td>{result[0].city_name}, {bookingdata.stete}  </td>
                    </tr>
                    <tr>
                        <td><label>Destination city</label> </td>
                        <td>{bookingdata.destination_city_id}</td>
                    </tr>
                    <tr>
                        <td><label>Pickup Address</label> </td>
                        <td>{bookingdata.pickup_address}</td>
                    </tr>
                    <tr>
                        <td><label>Pickup Date</label></td>
                        <td>{date}</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr className="info">
                        <td><label>Gross Total</label></td>
                        <td> {bookingdata.total_fare} </td>
                    </tr>
                </tfoot>
            </table>
            <div className="bs2">
                <button type="submit" onClick={sendData} className="btn btn-primary mt-3">Confirm Trip</button>
            </div>
        </form>
    )
}