import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";
import styles from "./newbook.css";
import DatePicker from 'react-datepicker';
import moment from "moment";
import 'react-datetime/css/react-datetime.css';

export default function BookingForm1() {

    // let navigate = useNavigate();

    const [state, setState] = useState({

       //   city: "",
        city: "",
        endcity: "",
        duration: "",
        selectDate: "",
        booking: {},
        cities: {}
    })

    const [city, setCity] = useState([]);
    const [cityid, setCityid] = useState('');
    const [date, setDate] = useState(null);
    const handleChange = date => setDate(date);

    useEffect(() => {
        const getcity = async () => {
            const req = await fetch("http://localhost:8080/allcors");     //("http://localhost/devopsdeveloper/country");
            const getres = await req.json();
            console.log(getres);
            setCity(await getres);

        }
        getcity();


    }, []);

    const handlecity=(event)=>{
        const getCityid= event.target.value;
        setCityid(getCityid);
        event.preventDefault();
      }

    const handleInput = (ev) => {
        setState((state) => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

   /* const getCities = (ev) => {
        ev.preventDefault();
        //console.log(state);
        const pstate = state.pstate;
        const headers = { 'Content-Type': 'application/json' }
        fetch("http://localhost:8080/getcities?state=${pstate}")
            .then(resp => resp.json())
            .then(data => {
                const json = JSON.parse(data);
                setState({ cities: json });
                console.log(state.cities);
            }
            )
    }*/

    let today = new Date();
    today.setDate(today.getDate() + 2);
    let in15Days = new Date();
    in15Days.setDate(in15Days.getDate() + 15);

   // const cities1 = state.cities;

    /* const submitData = (ev) => {
         ev.preventDefault();
         //console.log(state);
         const reqOptions = {
             method: 'post',
             headers: {
                 'Content-type': 'application/json'
             },
             body: JSON.stringify({
                 pcity: state.pcity,
                 endcity: state.endcity,
                 duration: state.duration,
                 selectDate: state.selectDate
             })
         }
         fetch("http://localhost:8080/getcities?state=", reqOptions)
             .then(resp => resp.json())
             .then(data => {
                 const json = JSON.parse(data);
                 setState({ cities: json });
                 console.log(state.cities);
             }
         )
     }*/

    /*   const cityListItems = state.cities; 
       const cityList=cityListItems.map((city)=><option>{city.city_name}</option>);*/

    return (

        <form className="form-inline">
            <div className="form-group" id="title"><h5 className="st1">BOOK DRIVER NOW</h5></div>


            <div className="form-group">

                <div className="col-sm-11">
                    <label>City</label>
                </div>
                <label className="visually-hidden" htmlFor="inlineFormSelectPref">FROM</label>
                  <select name="city"  onChange={(e)=>handlecity(e)}>
                   <option>--select city--</option>
                   {
                     city.map( (getcon)=>(
                   <option key={getcon.city_id} value={getcon.city_id }> { getcon.city_name}</option>
                     ))
                }
                 
                 </select>
            </div>

            <div className="form-group">

                <div className="col-sm-11">
                    <label>FROM</label>
                </div>
                <label className="visually-hidden" htmlFor="inlineFormSelectPref">FROM</label>
                <select className="select" onChange={handleInput} name="pcity">



                </select>
            </div>

            <div className="form-group">
                <div className="col-sm-5">
                    <label>TO</label>
                </div>
                <div className="col-sm-11">
                    <input className="form-control" type="text" onChange={handleInput} name="endcity" required placeholder="Travelling place name" />
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-11">
                    <label>Enter Duration</label>
                </div>

                <div className="col-12">
                    <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                    <select className="select" onChange={handleInput} name="duration">
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
                <div className="col-sm-11">
                    <label>Select Date</label>
                    <DatePicker
                        wrapperClassName="date-picker"
                        name="selectDate"
                        selected={date}
                        onChange={handleChange}
                        minDate={today}
                        maxDate={in15Days}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </div>
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-primary mt-3">Next</button>
            </div>
        </form>
    )
}


{
/*  <div className="col-11">
                            <input className="form-control" list="names" value={this.state.duration} onChange={handleInput} name="duration" required />
        </div>

        <datalist id="names" className="visually-hidden">
        <option value="6">6 Hours</option>
        <option value="12">12 Hours</option>
        <option value="24">24 Hours</option>
        <option value="48">2 Days</option>
        <option value="72">3 Days</option>
        <option value="96">4 Days</option>
        <option value="120">5 Days</option>
        <option value="144">6 Days</option>
</datalist>

  componentWillMount() {
        const scriptTag = document.createElement("script");
        scriptTag.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js";
        scriptTag.async = true;
        document.body.appendChild(scriptTag);
    }


     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
                    <script>
                        (function(){
                            $('.datepicker').scriptTag({
                                format: 'mm-dd-yyyy'
                            })
                        });
                    </script>
                    <div class="col-md-6">
                        <input type="text" class="form-control datepicker" placeholder="Select Date" />
                    </div>


                    
            <div className="calendarApp mt-5" id="cal">
                <div className="col-sm-11">
                    <label>Select Date</label>
                    <DatePicker
                        className="form-control"
                        timeFormat={false}
                        isValidDate={disablePastDt}
                        
                        onChange={handleChange}
                        name="selectDate"
                        showTimeSelect
                        timeIntervals={30}
                     //   timeFormat="HH:mm"
                        timeCaption="time"
                     //   dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </div>
            </div>

            /*  const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);
    };


    <select className="select" /*onBlur={getCities}name="pstate">
    <option>Maharashtra</option>
    <option>Goa</option>
    <option>Kerala</option>
</select>
                    */}