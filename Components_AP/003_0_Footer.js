import { Button } from "bootstrap";
import React from "react";
import * as ReactBootStrap from "react-bootstrap";


class Footer1 extends React.Component
{
    render()
    {
        return(
            <div>
                <footer className="bg-dark text-center text-white" >
                    <div className="container p-4">
                        <section className="mb-4">
                            <a href="#" className="text-white "> DRIVERONHIRE </a>
                        </section>
                        {/* <section className="mb-4">
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role={"button"}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </section> */}

                        {/* <section className="">
                            <form action="">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-auto">
                                        <p className="p-2">
                                            <strong>Sign up </strong>
                                        </p>
                                    </div>
                                    <div className="col-md-5 col-12">
                                        <div className="form-outline form-white mb-4">
                                            <input type={"email"} id="form5Example21" className="form-control" />
                                            <label className="form-label" for="form5Example21" >Email Address</label>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-outline-light mb-4">
                                            Subscibe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section> */}

                        <section className="mb-4">
                            <p>
                                
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas. */}
                            </p>
                        </section>

                        <section className="">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                    {/* <h5 className="">Links</h5> */}
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white ">About us</a> </li>
                                    </ul>
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white">Why us?</a> </li>
                                    </ul>
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white">How it works?</a> </li>
                                    </ul>
                   
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                    {/* <h5 className="">Links</h5> */}
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white">Terms & Conditions</a> </li>
                                    </ul>
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white">Privacy Policy</a> </li>
                                    </ul>
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white">Become a Driver</a> </li>
                                    </ul>
                            
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                    {/* <h5 className="">Links</h5> */}
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white">Need Help?</a> </li>
                                    </ul>
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white">Contact us</a> </li>
                                    </ul>
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white">Pricing Model</a> </li>
                                    </ul>

                                </div>

                            </div>
                        </section>
                    </div>
                    <div className="text-center p-3" >
                        2022 Copyright:
                        <a className="text-white" href="#">driveronhire.com</a>
                    </div>
                </footer>

                
                {/* https://mdbootstrap.com/docs/standard/navigation/footer/#! */}

            </div>

)
}
}

export default Footer1;