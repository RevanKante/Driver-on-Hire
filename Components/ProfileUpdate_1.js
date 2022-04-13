import React from "react";
import styles from './Register.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import mystore from "./Strore";
function Edit(){
    const [pwderror, setPwdError] = useState('');
    const [pwderror1, setPwdError1] = useState('');
    const [state, setState] = useState({
        fname:  JSON.parse(localStorage.getItem("loggedinuser")).user_id.first_name,
        lname: JSON.parse(localStorage.getItem("loggedinuser")).user_id.last_name,
        email: JSON.parse(localStorage.getItem("loggedinuser")).email_id,
        mobno: JSON.parse(localStorage.getItem("loggedinuser")).user_id.contact,
        state: JSON.parse(localStorage.getItem("loggedinuser")).user_id.state,
        city: JSON.parse(localStorage.getItem("loggedinuser")).user_id.city,
        password: JSON.parse(localStorage.getItem("loggedinuser")).password,
        sec_que: JSON.parse(localStorage.getItem("loggedinuser")).sequrity_que,
        sec_ans: JSON.parse(localStorage.getItem("loggedinuser")).sequrity_ans,
        reppass: JSON.parse(localStorage.getItem("loggedinuser")).password,
        pwdvalid: false,
        formvalid: false,
        msg: ""
    });

    const isValid = () => {
        if ( state.fname !== "" && state.lname !== "" && state.mobno !== "" && state.state !== "" && state.city !== "" && state.sec_que != "" && state.sec_ans != "" ) {
            //console.log('updated');
            state.formvalid = true;
            console.log("form valid"+state.formvalid);
            //setState({ formvalid: true });
        }
    }

    const handleInput = (ev) => {
        const passregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

        const nm = ev.target.name;
        const val = ev.target.value;

        setState((state) => ({
            ...state,
            [ev.target.name]: ev.target.value,

        }));
        console.log(state);
        let pwdflag = state.pwdvalid;
        switch (nm) {
            case 'password':
                if (val.length < 8 || val.length > 12) {
                    setPwdError("Password should contain minimum 8 and maximum 12 characters");
                    state.pwdvalid = false;
                    console.log("in pwd false");
                    pwdflag = false;
                }
                else if (!passregexp.test(val)) {
                    state.pwdvalid = false;
                    pwdflag = false;
                    console.log("in pwd reg false");
                    setPwdError("Password should contain atleast 1 uppercase letter, 1 lowercase letter, 1 number & 1 special character");
                }
                else {
                    //valid pwd
                    state.pwdvalid = true;
                    pwdflag = true;
                    console.log("in pwd true");
                    setPwdError("");
                }
                break;
            case 'reppass':
                if (val !== state.password) {
                    //invalid pwd
                    state.pwdvalid = false;
                    setPwdError1("Password did not match");
                    console.log("in repwd false");
                    state.pwdvalid = false;
                }
                else {
                    //valid pwd
                    setPwdError1("");
                    console.log("in repwd true");
                    state.pwdvalid = true;
                    console.log('email');
                    //console.log(state.emailvalid);
                    console.log('pwd');
                    console.log(state.pwdvalid);
                   // console.log(state.emailvalid && state.pwdvalid);
                    console.log(state);
                    console.log((state.pwdvalid && state.fname != "" && state.lname != "" && state.mobno != "" && state.state != "" && state.city != "" && state.sec_que != "" && state.sec_ans != ""))
                    // if (state.emailvalid && state.pwdvalid && state.fname !== "" && state.lname !== "" && state.mobno !== "" && state.state !== "" && state.city !== "" ) {
                    //     console.log('updated');
                    //     state.formvalid = true;
                    //     //setState({ formvalid: true });
                    // }
                    // else if(emailerror !== '')
                    // {
                    //     state.formvalid = false;
                    // }
                }
                break;
                case 'sec_ans':
                    console.log((state.pwdvalid && state.fname != "" && state.lname != "" && state.mobno != "" && state.state != "" && state.city != "" && state.sec_que != "" && state.sec_ans != ""))
                    if ( state.fname !== "" && state.lname !== "" && state.mobno !== "" && state.state !== "" && state.city !== "" && state.sec_que != "" && state.sec_ans != "" ) {
                        console.log('updated');
                        state.formvalid = true;
                        //setState({ formvalid: true });
                    }
                    break;

        }
    }

    const sendData = (ev) => {
        ev.preventDefault();
        console.log(state);
        // const reqData = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         first_name: state.fname,
        //         last_name: state.lname,
        //         email_id: state.email,
        //         contact: state.mobno,
        //         password: state.password,
        //         city: state.city,
        //         state: state.state,
        //         security_que: state.sec_que,
        //         security_ans: state.sec_ans
        //     })
         }

        // fetch("http://localhost:8080/registeru", reqData)
        //     .then(resp => resp.json())
        //     .then(data => setState({ msg: "Inserted : " + data.user_id }))
    

    //console.log(JSON.parse(localStorage.getItem("loggedinuser")));
    return(
        <div>
            <div className="container-xl px-4 mt-4">
    {/* <hr className="mt-0 mb-4"> */}
    <div className="row">
        <div className="col-xl-12">
            <div className="card mb-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                    <form>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                 <div className="small mb-1">First Name</div> 
                                <input name="fname" className="form-control" type="text" placeholder="Enter your first name" defaultValue={ JSON.parse(localStorage.getItem("loggedinuser")).user_id.first_name} onBlur={isValid} onChange={handleInput}/>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" >Last Name</label>
                                <input name="lname" className="form-control" type="text" placeholder="Enter your last name" defaultValue={ JSON.parse(localStorage.getItem("loggedinuser")).user_id.last_name} onBlur={isValid} onChange={handleInput}/>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1">Email</label>
                                <input className="form-control" name="email" type="text" placeholder="Enter your organization name" value={ JSON.parse(localStorage.getItem("loggedinuser")).email_id} onBlur={isValid} onChange={handleInput}/>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" >Mobile Number</label>
                                <input className="form-control" type="text" name="mobno" placeholder="Enter your location" defaultValue={ JSON.parse(localStorage.getItem("loggedinuser")).user_id.contact} onBlur={isValid} onChange={handleInput}/>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1">State</label>
                                <input className="form-control"  type="text" name="state" defaultValue={ JSON.parse(localStorage.getItem("loggedinuser")).user_id.state} onBlur={isValid} onChange={handleInput}/>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1">City</label>
                                <input className="form-control"  type="text" name="city" placeholder="Enter your location" defaultValue={ JSON.parse(localStorage.getItem("loggedinuser")).user_id.city} onBlur={isValid} onChange={handleInput}/>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" >Password</label>
                                <input className="form-control"  type="text" name="password" placeholder="Enter new password" defaultValue="" onBlur={isValid} onChange={handleInput}/>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" >Confirm Password</label>
                                <input className="form-control"  type="text"  name="reppass" placeholder="Confirm password" defaultValue="" onBlur={isValid} onChange={handleInput}/>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                            <div className="small mb-1" >Security Question</div>
                            <select name="sec_que" required className="form-select " onBlur={isValid}  onChange={handleInput}>
                                        <option selected disabled>{ JSON.parse(localStorage.getItem("loggedinuser")).sequrity_que}</option>
                                        <option value="In which city were you born?">In which city were you born?</option>
                                        <option value="What is the name of your favorite pet?">What is the name of your favorite pet?</option>
                                        <option value="What high school did you attend?">What high school did you attend?</option>
                                        <option value="What was the make of your first car?">What was the make of your first car?</option>
                                        <option value="What was your favorite food as a child?">What was your favorite food as a child?</option>
                                    </select>
                            </div>
                            <div className="col-md-6">
                                <div className="small mb-1">Security Answer</div>
                                <input className="form-control" type="text" name="sec_ans " onBlur={isValid} defaultValue={JSON.parse(localStorage.getItem("loggedinuser")).sequrity_ans} onChange={handleInput}/>
                            </div>
                        </div>
                        <center>
                        <div className="col-sm-2">
                        <button className="btn btn-primary" type="button" onClick={sendData} disabled={!state.formvalid}>Save changes</button>
                        </div>
                        </center>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}
export default Edit;