import React from "react";
import styles from './login.css'

export default class LoginForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    handleInput=(ev)=>{
        var nm = ev.target.name;
        var val = ev.target.value;

        this.setState({[nm]:val});
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
                            <button type="submit" className="btn btn-primary mt-3">Sign In</button>
                        </form>
                    </section>
                </section>
            </div>
        )
    }
}





