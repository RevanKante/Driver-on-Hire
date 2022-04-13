
import React from "react";
import styles from './Register.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
function Register() {
    let navigate = useNavigate();
    const [emailerror, setEmailError] = useState('');
    const [pwderror, setPwdError] = useState('');
    const [pwderror1, setPwdError1] = useState('');
    const [pwdvalid, setPwdvalid] = useState('');

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
        // errors: {
        //     emailerror: "",
        //     pwderror: "",
        //     pwderror1: "",
        // },
        emailvalid: false,
        pwdvalid: false,
        formvalid: false,
        msg: ""
    });

    const handleInput = (ev) => {
        const emailregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;
        const passregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

        const nm = ev.target.name;
        const val = ev.target.value;

        setState((state) => ({
            ...state,
            [ev.target.name]: ev.target.value,

        }));
        //const errors = state.errors;
        let emailflag = state.emailvalid;
        let pwdflag = state.pwdvalid;
        //console.log(state);
        
        switch (nm) {
            case 'email':
                if (!emailregexp.test(val)) {
                    //invalid uid
                    setEmailError("Email is invalid");
                    //state.emailflag = false;
                    setState({emailvalid : false});
                    emailflag = false;
                }
                else {
                    //valid uid
                    setEmailError("");
                    setState({emailvalid: true });//
                    emailflag = true;
                    // state.emailflag = true;
                }
                break;
           /* case 'password':
                if (val.length < 8 || val.length > 12) {
                    setPwdError("Password should contain minimum 8 and maximum 12 characters");
                    setState({pwdvalid : false});//
                    setPwdvalid(false);
                    pwdflag = false;
                }
                else if (!passregexp.test(val)) {
                    setPwdError("Password should contain atleast 1 uppercase letter, 1 lowercase letter, 1 number & 1 special character");
                    setState({pwdvalid : false});//
                    setPwdvalid(false);
                    pwdflag = false;
                }
                else {
                    //valid pwd
                    setPwdError("");
                    setState({pwdvalid: true });//
                    setPwdvalid(true);
                    pwdflag = true;
                    // state.pwdflag = true;
                }
                break; */
            /*case 'reppass':
                if (val !== state.password) {
                    //invalid pwd
                    setPwdError1("Password did not match");
                    setState({pwdvalid : false});//
                    setPwdvalid(false);
                    pwdflag = false;
                    // state.pwdflag = false;
                }
                else {
                    //valid pwd
                    setPwdError1("");
                    setState({pwdvalid: true });//
                    setPwdvalid(true);
                    pwdflag = true;
                    // state.pwdflag = true;
                } */
                break;
        }
        setState({...state, [nm]: val, emailvalid: emailflag, pwdvalid: pwdflag })
        // useEffect(() => {
        //     setState({...state, [nm]: val, emailvalid: emailflag, pwdvalid: pwdflag }, () => { setState({...state, formvalid: state.emailvalid && state.pwdvalid }) });
        if(emailflag)
            setState({formvalid : true});
        //  });
        //setState({...state, [nm]: val, emailvalid: emailflag, pwdvalid: pwdflag }, () => { setState({...state, formvalid: state.emailvalid && state.pwdvalid }) });
        //setState({...state,  [nm]: val, emailvalid: emailflag, pwdvalid: pwdflag }, () => { setState({ ...state, formvalid: state.emailvalid && state.pwdvalid }) });
        setState({...state, formvalid: state.emailvalid && state.pwdvalid })
        //setState({})
        //console.log(state);

        
        console.log(state.emailvalid);
       // console.log(emailflag);
       console.log(state.pwdvalid);
        // console.log(state.pwdvalid);
       console.log(state.formvalid)
    }
    const setFormValid =(ev)=>{
       setState({...state, formvalid: state.emailvalid && state.pwdvalid })
    }


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
            .then(data => setState({ msg: "Inserted : " + data.user_id }))
    }

    return (
        <div className="container">
            <section className="row justify-content-center">
                <section className="col-12 col-sm-6 col-md-4">
                    <h1>Register</h1>
                    <form className="inline">
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="fname" value={state.fname} onChange={handleInput} placeholder="First Name" />
                        </div>
                        <div className="form-group mt-2">
                            <input type="text" required className="form-control" name="lname" value={state.lname} onChange={handleInput} placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="email" value={state.mob} onChange={handleInput} placeholder="Email" />
                        </div>
                        <div style={{ backgroundColor: "white", color: "black" }}>
                            {/* {state.errors.emailerror} */}
                            {emailerror}
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="mobno" value={state.mob} onChange={handleInput} placeholder="Mobile Number" />
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="state" value={state.state} onChange={handleInput} placeholder="State" />
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="city" value={state.city} onChange={handleInput} placeholder="City" />
                        </div>
                        <div className="form-group">
                            <input type="password" required className="form-control mt-2" name="password" value={state.password} onChange={handleInput} placeholder="Password" />
                            <div style={{ backgroundColor: "white", color: "black" }}>
                                {/* {state.errors.pwderror} */}
                                {pwderror}
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="password" required className="form-control mt-2" name="reppass" value={state.reppass} onChange={handleInput} placeholder="Confirm Password" />
                            <div style={{ backgroundColor: "white", color: "black" }}>
                                {/* {state.errors.pwderror1} */}
                                {pwderror1}
                            </div>
                        </div>
                        <div className="form-group">
                            {/* <select>
                                    <option>In which city were you born?</option>
                                </select> */}
                            {/*<input type="text" className="form-control mt-2" name="sec_que" value={state.sec_que} onChange={handleInput} placeholder="Security Question" />*/}
                            <select name="sec_que" className="form-select mt-2" onChange={handleInput}>
                                <option selected disabled>Security Question</option>
                                <option value={"In which city were you born?"}>In which city were you born?</option>
                                <option value={"What is the name of your favorite pet?"}>What is the name of your favorite pet?</option>
                                <option value={"What high school did you attend?"}>What high school did you attend?</option>
                                <option value={"What was the make of your first car?"}>What was the make of your first car?</option>
                                <option value={"What was your favorite food as a child?"}>What was your favorite food as a child?</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control mt-2" name="sec_ans" value={state.sec_ans} onChange={handleInput} placeholder="Security Answer" />
                        </div>
                        <button type="submit" onClick={sendData} className="btn btn-primary mt-2" disabled={!state.formvalid}>Create Account</button>
                    </form>
                </section>
            </section>
        </div>
    )

}
export default Register;