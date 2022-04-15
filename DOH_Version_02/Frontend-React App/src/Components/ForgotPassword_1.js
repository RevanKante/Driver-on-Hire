import { useState } from "react/cjs/react.development";
function ForgotPassword()
{
    const [state, setState] = useState({

        email: "",
        security_question: "",
        security_answer: "",
        answer_input: "",
        output: ""
    });

    const handleInput = (ev) => {
        setState((state) => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }


    const submitData = (ev) => {
        ev.preventDefault();
        console.log(state);
        if(state.security_answer == state.answer_input)
        {
            console.log(state);
            setState({error:"Password sent on register Email"});
        }
        else
        {
            setState({error:"Answer not match"});
        }      
    };



    const reqOptions = {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email_id: state.email
        })
    }
    const get = (ev) => {
        fetch("http://localhost:8080/forgotpassword", reqOptions)
        //fetch("http://localhost:8080/cancelCustRide?bookingId=" + ev.target.value)
        .then(resp => resp.text())
        .then(data => {
            if (data.length != 0) {
                const json = JSON.parse(data);
                setState({security_question:json.sequrity_que});
                setState({security_answer:json.sequrity_ans});
               // const ans = json.security_ans;
               // console.log(json);
               // if(state.security_ans === ans)
               //     setState({output:"Password sent on register Email"});
               // else
               //     setState({output:"Answer not match"});       
         }
         else
         {
             setState({output:"Wrong email"});
         }
        });
    }
    
    return (
        <div className="container">
            <section className="row justify-content-center">
                <section className="col-12 col-sm-6 col-md-3"><br/><br/><br/>
                    <h3>Forgot Password</h3>
                    <form className="inline">
                        <div className="form-group">
                            <input type="email" className="form-control" onChange={handleInput} onBlur={get} name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group mt-3">
                            <div>{state.security_question}</div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={handleInput} name="answer_input" placeholder="Enter Answer" />
                        </div>
                        <div className="form-group">
                                    <select className="form-select mt-2">
                                        <option selected disabled>{state.security_question}</option>
                                    </select>
                        </div>
                        <center><button type="submit" className="btn btn-primary mt-3" style={{width:"150px"}} onClick={submitData}>Get Password</button></center>
                        <div style={{ backgroundColor: "white", color: "black" }}>
                            {state.error}
                        </div>
                    </form>
                </section>
            </section>
        </div>
    )
}
export default ForgotPassword;