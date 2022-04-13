import React from "react";
import styles from './Register.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
function Register1() {
    let navigate = useNavigate();

    const [emailError, setEmailError] = useState('');
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
        errors: {
            emailerror: "",
            pwderror: "",
            pwderror1: "",
        },
        emailvalid: false,
        pwdvalid: false,
        formvalid: false,
        repwdvalid : false,
        msg: ""
    });

    const sendData = (ev) => {
        ev.preventDefault();
        // const emailregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;
        // const passregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
        // if (!emailregexp.test(state.email)) {
        //     //invalid uid
        //     state.emailvalid = false;
        //     state.errors.emailerror= "Email is invalid";
        // }
        // else {
        //     //valid uid
        //     state.emailvalid = true;
        //     state.errors.emailerror= "";
            
        // }
        // if (state.password.length < 8 || state.password.length > 12) {
        //     state.errors.pwderror="Password should contain minimum 8 and maximum 12 characters";
        //     state.pwdvalid = false;
        // }
        // else if (!passregexp.test(state.password)) {
        //     //invalid uid
        //     state.pwdvalid = false;
        //     state.errors.pwderror= "Password should contain atleast 1 uppercase letter, 1 lowercase letter, 1 number & 1 special character";
        // }
        // else {
        //     //valid uid
        //     state.pwdvalid = true;
        //     state.errors.pwderror="";
        // }

        // if (state.reppass !== state.password) {
        //     //invalid pwd
        //     state.errors.pwderror1= "Password did not match";
        //     state.pwdvalid = false;
        // }
        // else {
        //     //valid pwd
        //     state.errors.pwderror1= "";
        //     state.pwdvalid = true;
        // } 
        console.log(state);
    }

  /*  const enableButton = (ev) =>
    {
        if(state.emailvalid && state.pwdvalid)
        {
            console.log('updated');
            setState({formvalid : true});   
        }
    }*/

    const handleInput = (ev) => {
        const emailregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;
        const passregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

        const nm = ev.target.name;
        const val = ev.target.value;

        let emailflag = state.emailvalid;
        let pwdflag = state.pwdvalid;
       // let repwdflag = state.repwdvalid;

        setState((state) => ({
            ...state,
            [ev.target.name]: ev.target.value,

        }));

        if (nm === 'email' && !emailregexp.test(state.email)) {
            //invalid uid
            state.emailvalid = false;
            emailflag = false;
            console.log("in email false");
            setEmailError("Email is invalid");
            //state.errors.emailerror= "Email is invalid";
        }
        else if(nm === 'email' && emailregexp.test(state.email)) {
            //valid uid
            state.emailvalid = true;
           emailflag = true;
           console.log("in email true");
           setEmailError("");
           //state.errors.emailerror= "";
            
        }
        if ((nm === 'password') && (state.password.length < 8 || state.password.length > 12)) {
           // state.errors.pwderror="Password should contain minimum 8 and maximum 12 characters";
           setPwdError("Password should contain minimum 8 and maximum 12 characters"); 
           state.pwdvalid = false;
            console.log("in pwd false");
            pwdflag = false;
        }
        else if (nm === 'password' && (!passregexp.test(state.password))) {
            //invalid uid
            state.pwdvalid = false;
            pwdflag = false;
            console.log("in pwd reg false");
            setPwdError("Password should contain atleast 1 uppercase letter, 1 lowercase letter, 1 number & 1 special character");
            //state.errors.pwderror= "Password should contain atleast 1 uppercase letter, 1 lowercase letter, 1 number & 1 special character";
        }
        else if(nm === 'password' && (passregexp.test(state.password)))
        {
            //valid uid
            state.pwdvalid = true;
            pwdflag = true;
            console.log("in pwd true");
            setPwdError("");
            //state.errors.pwderror="";
        }

        if (nm === 'reppass' && val !== state.password) {
            //invalid pwd
            //state.errors.pwderror1= "Password did not match";
            setPwdError1("Password did not match");
            console.log("in repwd false");
            state.pwdvalid = false;
        }
        else if(nm === 'reppass' && val === state.password) {
            //valid pwd
           // state.errors.pwderror1= "";
           setPwdError1("");
            console.log("in repwd true");
            state.pwdvalid = true;
            if(state.emailvalid && state.pwdvalid)
        {
            console.log('updated');
            setState({formvalid : true});   
        }
        } 


        // if(state.emailvalid && state.pwdvalid )
        // {
        //     console.log('updated');
        //     setState({formvalid : true});   
        // }
        //setState({...state, [nm]: val, emailvalid: emailflag, pwdvalid: pwdflag })

    
        // if(state.emailvalid && state.pwdvalid)
        // state.formvalid = true;


        
            // setState({formvalid : true});
          
        console.log(emailflag, pwdflag);
        console.log(state.emailvalid, state.pwdvalid, state.repwdvalid, state.formvalid);
        // switch (nm) {
        //     case 'email':
        //         if (!emailregexp.test(val)) {
        //             //invalid uid
        //             setEmailError("Email is invalid");
        //             //state.emailflag = false;
        //             setState({emailvalid : false});
        //             emailflag = false;
        //         }
        //         else {
        //             //valid uid
        //             //setEmailError("");
        //             setState({emailvalid: true });//
        //             emailflag = true;
        //             // state.emailflag = true;
        //         }
        //         break;
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
        //         break;
        // }
        // setState({...state, [nm]: val, emailvalid: emailflag, pwdvalid: pwdflag })
        // useEffect(() => {
        //     setState({...state, [nm]: val, emailvalid: emailflag, pwdvalid: pwdflag }, () => { setState({...state, formvalid: state.emailvalid && state.pwdvalid }) });
        // if(emailflag)
        //     setState({formvalid : true});
        //  });
        //setState({...state, [nm]: val, emailvalid: emailflag, pwdvalid: pwdflag }, () => { setState({...state, formvalid: state.emailvalid && state.pwdvalid }) });
        //setState({...state,  [nm]: val, emailvalid: emailflag, pwdvalid: pwdflag }, () => { setState({ ...state, formvalid: state.emailvalid && state.pwdvalid }) });
        // setState({...state, formvalid: state.emailvalid && state.pwdvalid })
        //setState({})
        //console.log(state);
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
                            {/* {emailerror} */}
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
                                {/* {pwderror} */}
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="password"  className="form-control mt-2" name="reppass" value={state.reppass}  onChange={handleInput} placeholder="Confirm Password" />
                            <div style={{ backgroundColor: "white", color: "black" }}>
                                {/* {state.errors.pwderror1} */}
                                {/* {pwderror1} */}
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
                        <button type="submit" onClick={sendData} className="btn btn-primary mt-2" disabled={!state.formvalid} >Create Account</button>
                    </form>
                </section>
            </section>
        </div>
    )
}
export default Register1;