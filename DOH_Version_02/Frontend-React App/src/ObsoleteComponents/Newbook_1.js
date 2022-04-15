import React from "react";
//import styles from "./12_newbook.css"
import DatePicker from 'react-datepicker';

export default class Newbook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pcity: "",
            endcity: "",
            duration: "",
            selectDate: new Date()
        }
        this.onDateChange = this.onDateChange.bind(this);
    }

    handleInput = (ev) => {
        var nm = ev.target.name;
        var val = ev.target.value;

        this.setState({ [nm]: val });
    }

    onDateChange(date) {
        this.setState({
            selectDate: date
        })
    }

    onSubmitForm(event) {
        event.preventDefault();
        alert(this.state.selectDate)
    }

    render() {
        return (
            <>
                <form className="form-inline">
                    <div className="form-group" id="title"><h5 className="st1">BOOK DRIVER NOW</h5></div>
                    <div className="form-group">
                        <div className="col-sm-5">
                            <label>FROM</label>
                        </div>
                        <div className="col-sm-11">
                            <input type="text" value={this.state.pcity} className="form-control" onChange={this.handleInput} name="pcity" required placeholder="Pickup Location" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-5">
                            <label>TO</label>
                        </div>
                        <div className="col-sm-11">
                            <input className="form-control" type="text" value={this.state.endcity} onChange={this.handleInput} name="endcity" required placeholder="Travelling place name" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-11">
                            <label>Enter Duration</label>
                        </div>

                        <div className="col-12">
                            <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                            <select className="select" value={this.state.duration} onChange={this.handleInput} name="duration">
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
                                className="form-control"
                                selected={this.state.selectDate}
                                onChange={this.onDateChange}
                                name="selectDate"
                                showTimeSelect
                                timeIntervals={30}
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
            </>
        )
    }
}
{/*  <div className="col-11">
                            <input className="form-control" list="names" value={this.state.duration} onChange={this.handleInput} name="duration" required />
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


*/}