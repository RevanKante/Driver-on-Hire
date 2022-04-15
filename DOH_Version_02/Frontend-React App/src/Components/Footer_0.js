import { Button } from "bootstrap";
import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function Footer1() {
    let navigate = useNavigate();
    
    const navigateToAboutUs = () => {
        navigate ("/aboutus");
    }

    const navigateToWhyUs = () => {
        navigate("/whyus");
    }

    const navigateToTnC = () => {
        navigate("/tnc");
    }

    const navigateToPrivacyPolicy = () => {
        navigate("/privacy");
    }

    const navigateToContactUs = () => {
        navigate("/contactus");
    }

    const navigateToPricingModel = () => {
        navigate("/pricing");
    }

    const navigateToHome = () => {
        navigate("/");
    }
        return (
            <div>
                <footer className="bg-dark text-center text-white" >
                    <div className="container-fluid p-4">
                        <section className="mb-4">
                            <a href="" className="text-white " style={{textDecoration:"none"}} onClick={navigateToHome}> DRIVERONHIRE </a>
                        </section>
                    
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
                                        <li> <a href="" className="text-white " style={{textDecoration:"none"}} onClick={navigateToAboutUs}>About us</a> </li>
                                    </ul>
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="/whyus" className="text-white" style={{textDecoration:"none"}}>Why us?</a> </li>
                                    </ul>
                                    {/* <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white">How it works?</a> </li>
                                    </ul> */}

                                </div>

                                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                    {/* <h5 className="">Links</h5> */}
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="/tnc" className="text-white" style={{textDecoration:"none"}} onClick={navigateToWhyUs}>Terms & Conditions</a> </li>
                                    </ul>
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="/privacy" className="text-white" style={{textDecoration:"none"}} onClick={navigateToPrivacyPolicy}>Privacy Policy</a> </li>
                                    </ul>
                                    {/* <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white">Become a Driver</a> </li>
                                    </ul> */}

                                </div>

                                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                    {/* <h5 className="">Links</h5> */}
                                    {/* <ul className="list-unstyled mb-0">
                                        <li> <a href="#" className="text-white">Need Help?</a> </li>
                                    </ul> */}
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="" className="text-white" style={{textDecoration:"none"}} onClick={navigateToContactUs}>Contact us</a> </li>
                                    </ul>
                                    <ul className="list-unstyled mb-0">
                                        <li> <a href="/pricing" className="text-white" style={{textDecoration:"none"}} onClick={navigateToPricingModel}>Pricing Model</a> </li>
                                    </ul>

                                </div>

                            </div>
                        </section>
                    </div>
                    <div className="text-center p-3" >
                        2022 Copyright:
                        <a className="text-white" href="" style={{textDecoration:"none"}} onClick={navigateToHome}>driveronhire.com</a>
                    </div>
                </footer>
                {/* https://mdbootstrap.com/docs/standard/navigation/footer/#! */}
            </div>

        )
    
}

export default Footer1;