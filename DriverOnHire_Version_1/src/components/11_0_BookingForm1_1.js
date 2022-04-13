import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";
import styles from "./12_newbook.css";
import 'react-datetime/css/react-datetime.css';
import mystore from './Strore';
// import { useForm } from 'react-hook-form';


export default function BookingForm1_1() {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const [endcity, setEndcity] = useState('');
    const [duration, setDuration] = useState('');
    const [city, setCity] = useState([]);
    const [cityid, setCityid] = useState('');
    const [stete, setStete] = useState([]);
    const [stetename, setStetename] = useState('');
    const [date, setDate] = useState('');
    const [cust_address, setCust_address] = useState('');
    const [totalfare, setTotalFare] = useState('');

    const handleDate = (ev) => {
        //console.log("Hi");
        setDate(ev.target.value);
        //console.log(date);
    }

    const extractDate = (ev) => {
        let extractedDate = date.replace("T", " ");
        let extractedDate_1 = extractedDate.concat(":00");
        setDate(extractedDate_1);
    }

    useEffect(() => {
        const getcity = async () => {
            const req = await fetch("http://localhost:8080/getcities?stete=" + stetename);
            const getres = await req.json();
            //   console.log(getres);
            setCity(await getres);
            localStorage.setItem("CityList", JSON.stringify({ getres }));
            // console.log(JSON.parse(localStorage.getItem("CityList")))
        }
        getcity();
    }, [stetename]);

    const handlecity = (event) => {
        const getCityname = event.target.value;
        setCityid(getCityname);
        event.preventDefault();
    }

    useEffect(() => {
        const getstete = async () => {
            const req = await fetch("http://localhost:8080/allstates");
            const getres = await req.json();
            //console.log(getres);
            setStete(await getres);
        }
        getstete();
    }, []);

    const handlestete = (event) => {
        const getStetename = event.target.value;
        setStetename(getStetename);
        event.preventDefault();
    }

    const handleInput = (ev) => {
        if (ev.target.name === "endcity")
            setEndcity(ev.target.value);

        else if (ev.target.name === "duration")
            setDuration(ev.target.value);

        else if (ev.target.name === "cust_address")
            setCust_address(ev.target.value);
    }
    /*
        let today = new Date();
        today.setDate(today.getDate() + 2);
        let in15Days = new Date();
        in15Days.setDate(in15Days.getDate() + 15);*/

    const handleFare = (ev) => {
        fetch("http://localhost:8080/generatefare?duration_hrs=" + duration)
            .then(resp => resp.json())
            .then(data => setTotalFare(data));
    }

    const submitData = (ev) => {
        ev.preventDefault();
        const loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"));
        //console.log(loggedinuser.user_id.user_id);
        const userId = loggedinuser.user_id.user_id;

        const body = JSON.stringify({
            stete: stetename,
            city_id: cityid,
            destination_city_id: endcity,
            duration_hrs: duration,
            ride_start_date: date,
            ride_status: "pending",
            pickup_address: cust_address,
            total_fare: totalfare,
            user_id: userId,
            //driver_id: 1,
        });
        localStorage.setItem("BookingForm1Data", body);
        // console.log(JSON.parse(localStorage.getItem("BookingForm1Data")));
        navigate('/booksummary');
    }

    const dispatch = () => {
        mystore.dispatch({ type: "LOGGEDIN" });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <form className="form-inline" onLoad={dispatch}><br /><br /><br />
                        <div className="form-group" id="title"><h5 className="st1">BOOK DRIVER NOW</h5></div>

                        <div className="form-group">

                            <div >
                                <label>FROM</label>
                            </div>

                            <label className="visually-hidden" htmlFor="inlineFormSelectPref">State</label>

                            <select name="stete" onChange={(e) => handlestete(e)} >
                                <option>--select state--</option>
                                {
                                    stete.map((getcon, index) => (
                                        <option key={getcon} value={getcon}> {getcon}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <div>
                                <label>City</label>
                            </div>

                            <label className="visually-hidden" htmlFor="inlineFormSelectPref">FROM</label>

                            <select name="city" onChange={(e) => handlecity(e)}>
                                <option>--select city--</option>
                                {
                                    city.map((getcon) => (
                                        <option key={getcon.city_id} value={getcon.city_id}> {getcon.city_name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <div >
                                <label>TO</label>
                            </div>
                            <div >
                                {/* <input className="form-control" type="text" onChange={handleInput} name="endcity" {...register("endcity", { required: { value: true, message: "You need to specify a valid email address" } })} placeholder="Travelling place name" />*/}</div> 
                        </div>

                        <div className="form-group">
                            <div >
                                <label>Enter Duration</label>
                            </div>

                            <div>
                                <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                                <select className="select" onChange={handleInput} onBlur={handleFare} name="duration">
                                    <option>--select duration--</option>
                                    <option value="6">6 Hours</option>
                                    <option value="12">12 Hours</option>
                                    <option value="24">24 Hours</option>
                                    <option value="48">2 Days</option>
                                    <option value="72">3 Days</option>
                                    <option value="96">4 Days</option>
                                    <option value="120">5 Days</option>
                                    <option value="144">6 Days</option>
                                </select>
                            </div>
                        </div>

                        <div className="calendarApp mt-5" id="cal">
                            <div >
                                <label>Select Date</label>
                                <input type="datetime-local" name="selectDate" onChange={handleDate} onBlur={extractDate} ></input>
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label>Address</label>
                            </div>
                            <div >
                                <textarea className="form-control" onChange={handleInput} name="cust_address" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" onClick={submitData} className="btn btn-primary mt-3">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}