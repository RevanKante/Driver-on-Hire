import React from "react";
import styles from './register_1.css'
export default class Register1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            mobno: "",
            state: "",
            city: "",
            password: "",
            sec_que: "",
            sec_ans: "",
            reppass: "",
            errors: {
                emailerror: "",
                pwderror: "",
                pwderror1: "",
            },
            emailvalid: false,
            pwdvalid: false,
            formvalid: false,
            msg: ""
        }

    }

    handleInput = (ev) => {
        const emailregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;
        const passregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

        const nm = ev.target.name;
        const val = ev.target.value;
        this.setState({ [nm]: val })
        let errors = this.state.errors;
        let emailflag = this.state.emailvalid;
        let pwdflag = this.state.pwdvalid;
        switch (nm) {
            case 'email':
                if (!emailregexp.test(val)) {
                    //invalid uid
                    errors.emailerror = "Email is invalid";
                    emailflag = false;
                }
                else {
                    //valid uid
                    errors.emailerror = "";
                    emailflag = true;
                }
                break;
            case 'password':
                if (val.length < 8 || val.length > 12) {
                    errors.pwderror = "Password should contain minimum 8 and maximum 12 characters";
                    pwdflag = false;
                }
                else if (!passregexp.test(val)) {
                    errors.pwderror = "Password should contain atleast 1 uppercase letter, 1 lowercase letter, 1 number & 1 special character";
                    pwdflag = false;
                }
                else {
                    //valid pwd
                    errors.pwderror = "";
                    pwdflag = true;
                }
                break;
            case 'reppass':
                if (val !== this.state.password) {
                    //invalid pwd
                    errors.pwderror1 = "Password did not match";
                    pwdflag = false;
                }
                else {
                    //valid pwd
                    errors.pwderror1 = "";
                    pwdflag = true;
                }
                break;
        }

        //update state of errors,uid,pwd,uidvalid,pwdvalid - update formvalid
        this.setState({ errors, [nm]: val, emailvalid: emailflag, pwdvalid: pwdflag }, () => { this.setState({ formvalid: this.state.emailvalid && this.state.pwdvalid }) });

    }

    sendData = (ev) => {
        ev.preventDefault();
        console.log(this.state);
        const reqData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: this.state.fname,
                last_name: this.state.lname,
                email_id: this.state.email,
                contact: this.state.mobno,
                password: this.state.password,
                city: this.state.city,
                state: this.state.state,
                security_que: this.state.sec_que,
                security_ans: this.state.sec_ans
            })
        }

        fetch("http://localhost:8080/registeru", reqData)
            .then(resp => resp.json())
            .then(data => this.setState({ msg: "Inserted : " + data.user_id }))
    }

    render() {
        return (
            (
                <div className="container">
                    
                    <section className="row justify-content-center">
                        <section className="col-12 col-sm-6 col-md-4">
                        <br/><br/><br/>
                            <h1>Register</h1>
                            <form className="inline">
                                <div className="form-group">
                                    <input type="text" required className="form-control mt-2" name="fname" value={this.state.fname} onChange={this.handleInput} placeholder="First Name" />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="text" required className="form-control" name="lname" value={this.state.lname} onChange={this.handleInput} placeholder="Last Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" required className="form-control mt-2" name="email" value={this.state.mob} onChange={this.handleInput} placeholder="Email" />
                                </div>
                                <div style={{backgroundColor: "white",color:"black"}}>
                                    {this.state.errors.emailerror}
                                </div>
                                <div className="form-group">
                                    <input type="text" required className="form-control mt-2" name="mobno" value={this.state.mob} onChange={this.handleInput} placeholder="Mobile Number" />
                                </div>
                                <div className="form-group">
                                    <input type="text" required className="form-control mt-2" name="state" value={this.state.state} onChange={this.handleInput} placeholder="State" />
                                </div>
                                <div className="form-group">
                                    <input type="text" required className="form-control mt-2" name="city" value={this.state.city} onChange={this.handleInput} placeholder="City" />
                                </div>
                                <div className="form-group">
                                    <input type="password" required className="form-control mt-2" name="password" value={this.state.pass} onChange={this.handleInput} placeholder="Password" />
                                    <div style={{backgroundColor: "white",color:"black"}}>
                                        {this.state.errors.pwderror}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="password" required className="form-control mt-2" name="reppass" value={this.state.reppass} onChange={this.handleInput} placeholder="Confirm Password" />
                                    <div style={{backgroundColor: "white",color:"black"}}>
                                        {this.state.errors.pwderror1}
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/*<input type="text" className="form-control mt-2" name="sec_que" value={this.state.sec_que} onChange={this.handleInput} placeholder="Security Question" />*/}
                                    <select name="sec_que" required className="form-select mt-2" onChange={this.handleInput}>
                                        <option selected disabled>Security Question</option>
                                        <option value="In which city were you born?">In which city were you born?</option>
                                        <option value="What is the name of your favorite pet?">What is the name of your favorite pet?</option>
                                        <option value="What high school did you attend?">What high school did you attend?</option>
                                        <option value="What was the make of your first car?">What was the make of your first car?</option>
                                        <option value="What was your favorite food as a child?">What was your favorite food as a child?</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" required className="form-control mt-2" name="sec_ans" value={this.state.sec_ans} onChange={this.handleInput} placeholder="Security Answer" />
                                </div>
                                <button type="submit" style={{width:"150px"}} onClick={this.sendData} className="btn btn-primary mt-2" disabled={!this.state.formvalid}>Create Account</button>
                            </form>
                            <br/><br/><br/>
                        </section>
                    </section>
                </div>
            )
        )
    }
}