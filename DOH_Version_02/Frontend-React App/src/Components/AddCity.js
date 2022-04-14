import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";
import mystore from "./Strore";

function AddCity() {

    const [state, setState] = useState({

        city: "",
        stete: "",
        // customer: {},
        // driver: {},
        // loginerror: "",
        // //flag: ""
    });


    //  useEffect(() => {
    //      const getbooking = async () => {
    //          const req = await fetch("http://localhost:8080/todaysbookings");
    //          const getres = await req.json();
    //          console.log(getres);
    //          setBooking(await getres);
    //      }
    //      getbooking();
    //  }, []);

    useEffect(() => {
        mystore.dispatch({ type: "LOGGEDIN" });
        mystore.subscribe(() => setLoginFlag(mystore.getState().loggedin));
        setLoginFlag(mystore.getState().loggedin);
        const bookingdata = JSON.parse(localStorage.getItem("loggedinuser"));
        //console.log(bookingdata);
        //    setFirstName(bookingdata.user_id.first_name);
        //     setLastName(bookingdata.user_id.last_name);
        //     setContact(bookingdata.user_id.contact);
        //setState({loggedinuserdata:bookingdata});
        //  console.log("in use effect");
        //console.log(bookingdata.user_id.first_name);
    })

    const [loginFlag, setLoginFlag] = useState("");
    console.log("Loginflag= " + loginFlag);

    let navigate = useNavigate();

    const navigateToAdminHome = () => {
        navigate('/adminhome');
    }

    const handleInput = (ev) => {
        setState((state) => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
        console.log(state);
    }

    const submitData = (ev) => {
        ev.preventDefault();
        //console.log(state);
        const reqOptions = {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                city_name: state.city,
                state: state.stete
            })
        }
        fetch("http://localhost:8080/addnewcity", reqOptions)
            .then(resp => resp.json())
            .then(data => console.log(data)  )
    };


    return (
        <div>
            <br /><br /><br />
            {/* <button className="btn btn-primary" onClick={handleInput}>Add a City</button> */}
            <h4> Add New City to the Database</h4>
            <button className="btn btn-primary" style={{ marginLeft: "800px" }} onClick={navigateToAdminHome}>Admin Home</button>
            <form method="POST">
                 <div style={{marginLeft:"100px"}}>
                    <input type="text" placeholder="City Name" name="city" onChange={handleInput}/> <br/><br/>
                    <input type="text" placeholder="State Name" name="stete" onChange={handleInput}/> <br/><br/>
                    <button onClick={submitData}> Submit </button><br/><br/>

                </div>
            </form>
        </div>
    )

}
export default AddCity