import React from "react";
import styles from "./Bookingform2.css";

export default class BookingForm2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            c_name: "",
            c_mail: "",
            c_contact: "",
            c_address: ""
        }
    }

    handleInput = (cv) => {
        var nm = cv.target.name;
        var val = cv.target.value;

        this.setState({ [nm]: val });
    }

    render() {
        return (
            <><form className="form-inline">

                <div className="bk"><h5>Pickup Locality</h5></div>

                <div className="form-group">
                    <div className="col-sm-5">
                        <label>Name</label>
                    </div>
                    <div className="col-sm-11">
                        <input type="text" value={this.state.c_name} className="form-control" onChange={this.handleInput} name="c_name" required />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-5">
                        <label>Email</label>
                    </div>
                    <div className="col-sm-11">
                        <input className="form-control" type="text" value={this.state.c_mail} onChange={this.handleInput} name="c_mail" required />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-5">
                        <label>Contact</label>
                    </div>
                    <div className="col-sm-11">
                        <input className="form-control" type="number" value={this.state.c_contact} onChange={this.handleInput} name="c_contact" required />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-5">
                        <label>Address</label>
                    </div>
                    <div className="col-sm-11">
                        <textarea className="form-control" value={this.state.c_address} onChange={this.handleInput} name="c_address" required />
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary mt-3">Next</button>
                </div>

            </form></>
        )
    }
}



/*  */