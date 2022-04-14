//import styles from './login.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import mystore from './Strore';

function LoginForm2() {
    let navigate = useNavigate();
    const [state, setState] = useState({

        email: "",
        password: "",
        customer: {},
        driver: {},
        loginerror: "",
        //flag: ""
    });

    // mystore.subscribe(()=>{setState({flag: mystore.getState().loggedin})})
    //console.log(state.flag);

    useEffect(() => {
        mystore.subscribe(() => setLoginFlag(mystore.getState().loggedin));
    })

    const [loginFlag, setLoginFlag] = useState("");
    console.log("Loginflag= " + loginFlag);



    const [role, setRole] = useState("");
    const handleInput = (ev) => {
        setState((state) => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
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
                email_id: state.email,
                password: state.password
            })
        }
        fetch("http://localhost:8080/checklogin", reqOptions)
            .then(resp => resp.text())
            .then(data => {
                if (data.length != 0) {
                    const json = JSON.parse(data);
                    let role = json.role;
                    //console.log(json);
                    if (role === "customer") {
                        // setState({customer:json});
                        // console.log(state.customer);
                        localStorage.setItem("loggedinuser", JSON.stringify(json));
                        console.log(JSON.parse(localStorage.getItem("loggedinuser")));
                        mystore.dispatch({ type: "LOGGEDIN" });
                        //console.log(mystore.loggedin);
                        navigate('/customerhome');
                    }
                    else if (role === "admin") {
                        // setState({customer:json});
                        // console.log(state.customer);
                        localStorage.setItem("loggedinuser", JSON.stringify(json));
                        //console.log(JSON.parse(localStorage.getItem("loggedinuser")));
                        mystore.dispatch({ type: "LOGGEDIN" });
                        navigate('/adminhome');
                    }
                    else if (role === "driver") {
                        fetch("http://localhost:8080/checkdriver", reqOptions)
                            .then(resp => resp.text())
                            .then(data => {
                                if (data.length != 0) {
                                    const json = JSON.parse(data);
                                    let role = json.role;
                                    localStorage.setItem("loggedinuser", JSON.stringify(json));
                                    console.log(JSON.parse(localStorage.getItem("loggedinuser")));
                                    mystore.dispatch({ type: "LOGGEDIN" });
                                    navigate('/driverhome');
                                }
                            });
                    }
                }
                else {
                    setState({ loginerror: "Incorrect id or password" });
                }

            })
    };


    return (
        <div className="container">
            <section className="row justify-content-center">
                <section className="col-12 col-sm-6 col-md-3"> <br /><br /><br />
                    <h1>Sign In</h1>
                    <form className="inline">
                        <div className="form-group">
                            <input type="email" className="form-control" onChange={handleInput} name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group mt-3">
                            <input type="password" className="form-control" onChange={handleInput} name="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" style={{ width: "150px" }} onClick={submitData}>Sign In</button>
                        <div style={{ backgroundColor: "white", color: "black" }}>
                            {state.loginerror}
                        </div>
                    </form>
                    <br /><br /><br />
                </section>
            </section>
        </div>
    )
}
export default LoginForm2