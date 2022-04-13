import React from "react";
import styles from './Login.css'
import mystore from "./Strore";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            customer: {},
            driver: {},
            loginerror: ""
        }
    }

    handleInput = (ev) => {
        var nm = ev.target.name;
        var val = ev.target.value;

        this.setState({ [nm]: val });
    }

    submitData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email_id: this.state.email,
                password: this.state.password
            })
        }
        fetch("http://localhost:8080/checklogin", reqOptions)
            .then(resp => resp.text())
            .then(data => {
                if (data.length !== 0) {
                    const json = JSON.parse(data);
                    if(json.role === "customer")
                        this.setState({ customer: json });
                    else if(json.role === "driver")
                        this.setState({ driver: json });
                    localStorage.setItem("loggedinuser", JSON.stringify(this.state.customer));
                    mystore.dispatch({ type: "LOGGEDIN" });
                    this.props.history.push("/customerhome");
                }
                else {
                    this.setState({ loginerror: "Incorrect id or password" })
                }
            })
    }

    render() {
        return (
            <div className="container">
                <section className="row justify-content-center">
                    <section className="col-12 col-sm-6 col-md-3">
                        <h1>Sign In</h1>
                        <form className="inline">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Enter email" />
                            </div>
                            <div className="form-group mt-3">
                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInput} placeholder="Password" />
                            </div>
                            <button type="submit" onClick={this.submitData} className="btn btn-primary mt-3">Sign In</button>
                            <div style={{ backgroundColor: "white", color: "black" }}>
                                {this.state.loginerror}
                            </div>
                        </form>
                    </section>
                </section>
            </div>
        )
    }
}
