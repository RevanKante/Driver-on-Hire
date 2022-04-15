import React from "react";
import './User Dashboard_1.css';


export default class UserDash1 extends React.Component {


    render() {
        return (
            <div className="container-fluid">
                <br /><br />
                <div className="row">
                    <nav className="col-md-2 cp_custom_nav navbar navbar-expand-lg bg='dark'">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul id="left_user_menu" className="navbar-nav">
                                <li className="nav-item active" controller="index"><a href="javascript:void(0);" className="nav-link"><i className="fa fa-home"></i>Dashboard</a>  </li>

                                <li className="nav-item"><a href="/" className="nav-link"><i className="fa fa-globe"></i>Book Ride Now</a></li>

                                <li className="nav-item" controller="booking"><a href="javascript:void(0);" className="nav-link"><i className="fa fa-edit"></i>Bookings</a></li>

                                <li className="nav-item" controller="payment"><a href="javascript:void(0);" className="nav-link"><i className="fa fa-credit-card"></i>Payments</a></li>

                                {/* <li controller="offers"><a href="javascript:void(0);"><i className="fa fa-gift"></i>Offers</a></li> */}

                                {/* <li controller="referandearn"><a href="javascript:void(0);"><i className="fa fa-users"></i>Refer and earn</a></li> */}

                                <li className="nav-item" controller="setting"><a href="javascript:void(0);" className="nav-link"><i className="fa fa-cog"></i>Edit Profile</a></li>

                                {/* <li controller="notification"><a href="javascript:void(0);"><i className="fa fa-bell"></i>Notifications</a></li> */}

                                <li className="nav-item"><a href="/help"><i className="fa fa-comments-o nav-link" ></i>Support</a></li>

                                <li className="nav-item"><a href="/logout"><i className="fa fa-power-off nav-link"></i>Logout</a></li>
                            </ul>
                        </div>
                    </nav>

                    <div className="col-md-10" id="PageUserData" style={{ paddingLeft: "35px", paddingRight: "35x", paddingTop: "20px", paddingBottom: "20px" }} >
                        <div className="card public-profile border-0 rounded shadow" style={{ zIndex: "1" }} >
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 col-md-3 text-md-start text-center">
                                        <img src="/images/defalt.png" className="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="Not Available" />
                                    </div> {/*<!--end col--> */}

                                    <div className="col-lg-10 col-md-9">
                                        <div className="row align-items-end">
                                            <div className="col-md-7 text-md-start mt-4 mt-sm-0">
                                                <h3 className="title mb-0">Ashraf</h3>
                                                <small className="text-muted h6 me-2">+91 8446735343</small><br />
                                                <small className="text-muted h6 me-2"></small><br />
                                                <small className="text-muted h6 me-2"></small>
                                            </div> {/*<!--end col--> */}
                                        </div>   {/*<!--end row--> */}
                                    </div>   {/*<!--end col--> */}
                                </div>   {/*<!--end row--> */}
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: "30px" }}>
                            <div className="col-md-3 mt-4">
                                <div className="card counter-box border-0 bg-primary shadow text-center rounded">
                                    <div className="card-body py-5">
                                        <h2 className="mb-0 text-light title-dark"><span className="counter-value" data-target="97">1</span></h2>
                                        <h5 className="counter-head text-light title-dark mb-0">Total Bookings</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mt-4">
                                <div className="card counter-box border-0 bg-primary shadow text-center rounded">
                                    <div className="card-body py-5">
                                        <h2 className="mb-0 text-light title-dark"><span className="counter-value" data-target="97">0</span></h2>
                                        <h5 className="counter-head text-light title-dark mb-0">Complete Bookings</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mt-4">
                                <div className="card counter-box border-0 bg-primary shadow text-center rounded">
                                    <div className="card-body py-5">
                                        <h2 className="mb-0 text-light title-dark"><span className="counter-value" data-target="97">1</span></h2>
                                        <h5 className="counter-head text-light title-dark mb-0">Cancelled Bookings</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mt-4">
                                <div className="card counter-box border-0 bg-primary shadow text-center rounded">
                                    <div className="card-body py-5">
                                        <h2 className="mb-0 text-light title-dark"><span className="counter-value" data-target="97">&#x20B9; 0</span></h2>
                                        <h5 className="counter-head text-light title-dark mb-0">Payments</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar bg-light">


  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 3</a>
    </li>
  </ul>

</nav>
            </div>
        )
    }
}