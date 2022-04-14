import logo from './logo.svg';
import './App.css';
import PrivacyPolicy from './Components/Privacy Policy_1';
import TnC from './Components/T&C_2';
import NavBar1 from './Components/NavBar_1';
import * as ReactBootStrap from "react-bootstrap";
import Footer1 from './Components/Footer_0';
import UserDash2 from './Components/CustDashboardNav_2 ';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Register1 from './ObsoleteComponents/RegisterForm_2';
import CustomerHome from './Components/CustHome_1';
import Aboutus from './Components/AboutUs_1';
import Whyus from './Components/WhyUs_1';
import UserDashboardNav from './Components/CustDashboardNav_2 ';
import ErrorPage from './Components/ErrorPage_1';
import Pricing from './Components/PricingModel_1';
import Reviews from './Components/Reviews_1';
import CustDashBooking from './Components/CustDashBooking_1';
import CustDashPayments from './Components/CustDashPayments_1';
import LoginForm2 from './Components/LoginForm_2';
import HomePage from './Components/HomePage_1';
import BookingSummary from './Components/BookingSummary_1';
import { useState } from "react/cjs/react.development";
// import reducer from "./reducer";
// import mystore from "./Strore";
import mystore from './Components/Strore';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import ourLogo from './Components/DOH_logo.jpg';
import RegisterationForm from './Components/RegistrationForm_3';
import ContactUs from './Components/Contactus_1';




function App() {

  useEffect(()=>{
    mystore.subscribe(() =>  setLoginFlag(mystore.getState().loggedin));
  })

  const[loginFlag, setLoginFlag] = useState("" )

  console.log("Loginflag= "+loginFlag);

  let navigate = useNavigate();
  const logout = () => {
    mystore.dispatch({ type: 'LOGGEDOUT' });
    localStorage.removeItem("loggedinuser");
  }

  const navigateToDashboard=()=>{
    navigate('/custdashnav');
  }

  const navigateToHome = () => {
    navigate("/");
}

  return (
    <div className="App">
      {/* <NavBar1 /> */}
      <div>

        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar fixed-top">
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href=""> <img src={ourLogo} style={{width:"115px", height:"35px"}} alt="Our main logo" class="logo" onClick={navigateToHome}/>  </ReactBootStrap.Navbar.Brand>  {/*//3.imimg.com/data3/MC/GT/MY-2/social-logo-500x500.png    DriverOnHire*/} 
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="me-auto">
                {/* <ReactBootStrap.Nav.Link href="/#">Drive With Us</ReactBootStrap.Nav.Link> */}
                <ReactBootStrap.Nav.Link href="">Need Help? Call: XX-XXXX-XXXX</ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>

              <ReactBootStrap.Nav>
                <div style={{ display: loginFlag ? 'none' : 'block' }}>
                  <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
                </div>
                <div style={{ display: loginFlag ? 'none' : 'block' }}>
                  <ReactBootStrap.Nav.Link href="/register">Register</ReactBootStrap.Nav.Link>
                </div>
                <div style={{ display: loginFlag ? 'block' : 'none' }}>    
                  <ReactBootStrap.Nav.Link href="" onClick={navigateToDashboard}>Dashboard</ReactBootStrap.Nav.Link>

                </div>
                <div style={{ display: loginFlag ? 'block' : 'none' }}>
                  <ReactBootStrap.Nav.Link href="/" onClick={logout}>Logout</ReactBootStrap.Nav.Link>

                </div>

              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm2 />} />
        {/* <Route path="/register" element={<Register1 />} /> */}
        <Route path="/customerhome" element={<CustomerHome />} />
        <Route path="/login" element={<TnC />} />
        <Route path="/register" element={<RegisterationForm />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/tnc" element={<TnC />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/custdashnav" element={<UserDashboardNav />} />
        <Route path="/custdashbooking" element={<CustDashBooking />} />
        <Route path="/custdashpayments" element={<CustDashPayments />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/booksummary" element={<BookingSummary />} />
        <Route path='*' element={<ErrorPage />} /> booksummary  
      </Routes>

      <Footer1 />
    </div>
  );
}
export default App;

