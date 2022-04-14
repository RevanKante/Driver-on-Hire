import React from "react";
//import styles from './Register.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
function RegisterationForm() {
    let navigate = useNavigate();

    const [emailerror, setEmailError] = useState('');
    const [pwderror, setPwdError] = useState('');
    const [pwderror1, setPwdError1] = useState('');
    const [state, setState] = useState({
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
        emailvalid: false,
        pwdvalid: false,
        formvalid: false,
        repwdvalid: false,
        msg: ""
    });

    const sendData = (ev) => {
        ev.preventDefault();
        console.log(state);
        const reqData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: state.fname,
                last_name: state.lname,
                email_id: state.email,
                contact: state.mobno,
                password: state.password,
                city: state.city,
                state: state.state,
                security_que: state.sec_que,
                security_ans: state.sec_ans
            })
        }

        fetch("http://localhost:8080/registeru", reqData)
            .then(resp => resp.json())
            .then(alert("You have been successfully registered. Please Login now."))
            .then(navigate('/login'));
            // .then(data => state.msg = "Inserted : " + data.user_id)
            
    }

    const isValid = () => {
        if (state.pwdvalid && state.fname !== "" && state.lname !== "" && state.mobno !== "" && state.state !== "" && state.city !== "" && state.sec_que != "" && state.sec_ans != "" ) {
            state.formvalid = true;
        }
    }

    const handleInput = (ev) => {
        const emailregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;
        const passregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

        const nm = ev.target.name;
        const val = ev.target.value;

        setState((state) => ({
            ...state,
            [ev.target.name]: ev.target.value,

        }));

        let emailflag = state.emailvalid;
        let pwdflag = state.pwdvalid;
        switch (nm) {
            case 'email':
                if (!emailregexp.test(val)) {
                    //invalid uid
                    state.emailvalid = false;
                    emailflag = false;
                    setEmailError("Email is invalid");
                }
                else {
                    //valid uid
                    state.emailvalid = true;
                    emailflag = true;
                    setEmailError("");
                }
                break;
            case 'password':
                if (val.length < 8 || val.length > 12) {
                    setPwdError("Password should contain minimum 8 and maximum 12 characters");
                    state.pwdvalid = false;
                    pwdflag = false;
                }
                else if (!passregexp.test(val)) {
                    state.pwdvalid = false;
                    pwdflag = false;
                    setPwdError("Password should contain atleast 1 uppercase letter, 1 lowercase letter, 1 number & 1 special character");
                }
                else {
                    //valid pwd
                    state.pwdvalid = true;
                    pwdflag = true;
                    setPwdError("");
                }
                break;
            case 'reppass':
                if (val !== state.password) {
                    //invalid pwd
                    state.pwdvalid = false;
                    setPwdError1("Password did not match");
                    state.pwdvalid = false;
                }
                else {
                    //valid pwd
                    setPwdError1("");
                    state.pwdvalid = true;
                }
                break;
                case 'sec_ans':
                    if (state.emailvalid && state.pwdvalid && state.fname !== "" && state.lname !== "" && state.mobno !== "" && state.state !== "" && state.city !== "" && state.sec_que != "" && state.sec_ans != "" ) {
                        state.formvalid = true;
                    }
                    else if(emailerror !== '')
                    {
                        state.formvalid = false;
                    }
                    break;    
        }
    }

    return (
        <div className="container">
            <section className="row justify-content-center">
                <section className="col-12 col-sm-6 col-md-4"> <br/><br/><br/>
                    <h1 style={{textAlign:"center"}}>Register</h1>
                    <form className="inline">
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="fname" value={state.fname} onBlur={isValid} onChange={handleInput} placeholder="First Name" />
                        </div>
                        <div className="form-group mt-2">
                            <input type="text" required className="form-control" name="lname" value={state.lname} onBlur={isValid} onChange={handleInput} placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="email" value={state.mob} onBlur={isValid} onChange={handleInput} placeholder="Email" />
                        </div>
                        <div style={{ backgroundColor: "white", color: "black" }}>
                            {emailerror}
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="mobno" value={state.mob} onBlur={isValid} onChange={handleInput} placeholder="Mobile Number" />
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="state" value={state.state} onBlur={isValid} onChange={handleInput} placeholder="State" />
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="city" value={state.city} onBlur={isValid} onChange={handleInput} placeholder="City" />
                        </div>
                        <div className="form-group">
                            <input type="password" required className="form-control mt-2" name="password" value={state.password} onBlur={isValid} onChange={handleInput} placeholder="Password" />
                            <div style={{ backgroundColor: "white", color: "black" }}>
                                {pwderror}
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="password" required className="form-control mt-2" name="reppass" value={state.reppass} onBlur={isValid} onChange={handleInput} placeholder="Confirm Password" />
                            <div style={{ backgroundColor: "white", color: "black" }}>
                                {pwderror1}
                            </div>
                        </div>
                        <div className="form-group">
                                <select name="sec_que" className="form-select mt-2" onBlur={isValid} onChange={handleInput}>
                                <option selected disabled>Security Question</option>
                                <option value={"In which city were you born?"}>In which city were you born?</option>
                                <option value={"What is the name of your favorite pet?"}>What is the name of your favorite pet?</option>
                                <option value={"What high school did you attend?"}>What high school did you attend?</option>
                                <option value={"What was the make of your first car?"}>What was the make of your first car?</option>
                                <option value={"What was your favorite food as a child?"}>What was your favorite food as a child?</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="sec_ans" value={state.sec_ans} onBlur={isValid} onChange={handleInput} placeholder="Security Answer" />
                        </div >
                        <center><button type="submit" onClick={sendData} className="btn btn-primary mt-2" disabled={!state.formvalid} style={{width:"150px", justifyContent:"center"}}>Create Account</button></center>
                    </form><br/><br/>
                </section>
            </section>
        </div>
    )
}
export default RegisterationForm;