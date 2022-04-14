
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mystore from "./Strore";

function DriverDashBooking_1() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contact, setContact] = useState('');

    const [allBookings, setAllBookings] = useState([]);

    const [booking, setBooking] = useState([]);
  /*  const handleInput = (event) => {
        console.log("helloooo");
        event.preventDefault();
        const reqData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                driver_id: 2,
            })
        }
        fetch("http://localhost:8080/alldriverbookings?driverid=", reqData)
            .then(resp => resp.json())
            .then(data => setBooking(data));
        console.log(booking);
        //  window.location.reload(false);
    }*/

    useEffect(() => {
        console.log("helloooo");
       // event.preventDefault();
        const reqData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                driver_id: 2,
            })
        }
        fetch("http://localhost:8080/alldriverbookings?driverid=", reqData)
            .then(resp => resp.json())
            .then(data => setBooking(data));
        console.log(booking);
    });


    useEffect(() => {
        const loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"));
        //console.log(loggedinuser);
        const getAllCustBookings = async () => {
            const req = await fetch("http://localhost:8080/getallcustbookings?user_id=" + loggedinuser.user_id.user_id);
            const getres = await req.json();
            console.log(getres);
            setAllBookings(await getres);
        }
        getAllCustBookings();
    }, []);

    useEffect(() => {
        mystore.dispatch({ type: "LOGGEDIN" }); //necessary
        mystore.subscribe(() => setLoginFlag(mystore.getState().loggedin));
        setLoginFlag(mystore.getState().loggedin);
        const bookingdata = JSON.parse(localStorage.getItem("loggedinuser"));
        //console.log(bookingdata);
      /*  setFirstName(bookingdata.user_id.first_name);
        setLastName(bookingdata.user_id.last_name);
        setContact(bookingdata.user_id.contact);*/
        //setState({loggedinuserdata:bookingdata});
        //  console.log("in use effect");
        //console.log(bookingdata.user_id.first_name);
    })

    const [loginFlag, setLoginFlag] = useState("");
    console.log("Loginflag= " + loginFlag);


    /*
        const driverDetails = (ev) => {
            if(allBookings.)
        }*/
    /*
        const driverDetails = (ev) => {
            ev.preventDefault();
            fetch("http://localhost:8080/driverdetails?bookingid="+ ev.target.value)
                .then(resp => resp.text())
                .then(data => {
                    if (data.length != 0) {
                        const json = JSON.parse(data);
                        let role = json.role;
                        //console.log(json);
                        if (role === "customer") {
                            // setState({customer:json});
                            // console.log(state.customer);
                            localStorage.setItem("loggedinuser", JSON.stringify(json));
                            //console.log(JSON.parse(localStorage.getItem("loggedinuser")));
                            mystore.dispatch({ type: "LOGGEDIN" });
                            //console.log(mystore.loggedin);
                            navigate('/customerhome');
                        }
                     
                    }
                    else {
                        setState({ loginerror: "Incorrect id or password" });
                    }
    
                })
        };
    */
        const navigateToDriverDash = () => {
            navigate("/driverdash");
        }
    
        const navigateToDriverPayment = () => {
            navigate('');
        }
    
        const navigateToUpdateProfile = () => {
            navigate('/updatedriverprofile');
        }
    return (
        <div className="container-fluid">
            <br /><br />
            <div className="row">
                <div className="col-md-2 cp_custom_nav">
                    <nav className="navbar bg-dark">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="" onClick={navigateToDriverDash}>Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="" >Bookings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="" onClick={navigateToDriverPayment}>Payments</a>
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
                <div className="col-md-10" >
                    <br /><br /><br />
                    <div> Welcome to booking page</div>
                    {/* </div>
                <div className="col-md-10" id="PageUserData" style={{ marginLeft: "250px" }}> */}
                    <div>
                        <table className="table table-striped table-bordered" style={{ width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>Ride Start Date</th>
                                    <th>Pickup City</th>
                                    <th>Destination  City</th>
                                    <th>Duration (in Hrs)</th>
                                    <th>Pickup Address </th>
                                    {/* <th>Actual ride end Time</th> */}
                                    <th>Total Fare</th>

                                    <th>Ride Status</th>
                                    {/* <th>Driver details</th> */}
                                    {/* <th>Driver Contact</th> */}
                                    {/* <th>Ratings</th> */}
                                    {/* <th>Reviews</th> */}
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
                                        {/* <td>{booking.user_id.first_name}</td>
                                        <td>{booking.user_id.contact}</td> */}
                                        {/* <td>{booking.driver_id.aadhar_no}</td> */}
                                        {/* <td>{booking.driver_id.user_id.first_name}</td>
                                        <td>{booking.driver_id.user_id.contact}</td> */}
                                        <td>{booking.ride_status}</td>
                                        {/* <td><a href="" onClick={driverDetails} key={booking.booking_id}  >see driver details</a></td> */}

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )


}
export default DriverDashBooking_1;


