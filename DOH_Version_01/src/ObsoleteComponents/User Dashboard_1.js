import React from "react";

export default class UserDash extends React.Component{

render(){
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo">
                            <a href="" > <img /></a>
                        </div>
                        <div>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <header>
                                <div className="col-md-7">
                                    <nav className="">
                                        <div>
                                            <button>
                                                <span></span>
                                            </button>
                                        </div>
                                    </nav>
                                    <div>
                                        <input type={"email"}/>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div>
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                        </div>
                        <div className="">
                            <h1>Hello.JS</h1>
                            <div className="row">
                                <div className="col-md-5">
                                    <div>
                                        <h2> Sale</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
    
}