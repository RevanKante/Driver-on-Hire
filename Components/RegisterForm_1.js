import React from "react";
import styles from './Register.css'
export default class Register2 extends React.Component {
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
            sec_ans: ""
            // reppass: "",
            /*errors: {
                emailerror: "",
                pwderror: ""
            },*/
            //  emailvalid: false,
            //pwdvalid: false,
            //formvalid: false,
            //msg: ""
        }

    }

    handleInput = (ev) => {
        const emailregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;
        const pass = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;

        const nm = ev.target.name;
        const val = ev.target.value;
        this.setState({ [nm]: val })
        //getting local variable populated with state variables
        /* let errors = this.state.errors;
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
                 if (val != this.state.reppass && val.length <= 8) {
                     //invalid pwd
                     errors.pwderror = "Password did not match";
                     pwdflag = false;
                 }
                 else {
                     //valid pwd
                     errors.pwderror = "";
                     pwdflag = true;
 
                 }
                 break;
         }
 
         //update state of errors,uid,pwd,uidvalid,pwdvalid - update formvalid
         this.setState({ errors, [nm]: val, emailvalid: emailflag, pwdvalid: pwdflag }, () => { this.setState({ formvalid: this.state.uidvalid && this.state.pwdvalid }) });
    */
    }

    // {/* handleInput=(ev)=>{
    //      const nm = ev.target.name;
    //      const val = ev.target.value;
    //      //validation applied
    //      this.setState({[nm]: val});
    //  }
    //  */}

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
                            <h1>Register</h1>
                            <form className="inline">
                                <div className="form-group">
                                    <input type="text" className="form-control mt-2" name="fname" value={this.state.fname} onChange={this.handleInput} placeholder="First Name" />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="text" className="form-control" name="lname" value={this.state.lname} onChange={this.handleInput} placeholder="Last Name" />
                                </div>

                                {/*  <div class="alert alert-danger" role="alert">
                                        {this.state.errors.emailerror}  
                                     </div>*/}

                                <div className="form-group">
                                    <input type="text" className="form-control mt-2" name="email" value={this.state.mob} onChange={this.handleInput} placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control mt-2" name="mobno" value={this.state.mob} onChange={this.handleInput} placeholder="Mobile Number" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control mt-2" name="state" value={this.state.state} onChange={this.handleInput} placeholder="State" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control mt-2" name="city" value={this.state.city} onChange={this.handleInput} placeholder="City" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control mt-2" name="password" value={this.state.pass} onChange={this.handleInput} placeholder="Password" />
                                </div>
                                {/*<div className="form-group">
                                    <input type="password" className="form-control mt-2" name="reppass" value={this.state.reppass} onChange={this.handleInput} placeholder="Confirm Password" />
                                      <div class="alert alert-danger" role="alert">
                                        {this.state.errors.pwderror}
                                 </div>
                                </div>*/}
                                <div className="form-group">
                                    <input type="text" className="form-control mt-2" name="sec_que" value={this.state.sec_que} onChange={this.handleInput} placeholder="Security Question" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control mt-2" name="sec_ans" value={this.state.sec_ans} onChange={this.handleInput} placeholder="Security Answer" />
                                </div>
                                <button type="submit" onClick={this.sendData} className="btn btn-primary mt-2">Create Account</button>
                            </form>
                            {this.state.fname};
                            {this.state.msg};
                        </section>
                    </section>
                </div>
            )
        )
    }
}