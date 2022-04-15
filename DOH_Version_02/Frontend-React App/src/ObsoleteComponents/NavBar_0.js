import React  from "react";

class NavBar00 extends React.Component
{
    render(){
        return(
            <div>
                <header id="topnav" className="defaultscroll sticky bg-white">

                <div className="container">
                {/* <!-- Logo container--> */}
            
                 <div>
                     <a className="logo" href="#">
                    <img src="/logo/drivars_logo_black.png" height="55" alt=""/>
                    </a>
                 </div> 
                        <div className="buy-button">
                            <a href="#" className="btn btn-primary">Login</a>
                        </div>
                        {/* <!--end login button--> */}
                      

            {/* <!-- End Logo container--> */}
            <div className="row">                
                <div className="col-lg-7">
                    <div id="navigation">
                {/* <!-- Navigation Menu-->                  */}
                        <ul className="navigation-menu">

                                <li><a href="#" className="sub-menu-item">Offers</a></li>
                                <li><a href="#" className="sub-menu-item" >Drive With Us</a></li>
                                <li id="none"><a  href="#" className="sub-menu-item">Login</a></li>       
                        </ul>
                      
                    {/* </div><!--end navigation--> */}
                </div>
                </div>

                <div className="col-lg-5" id="contact_number">
                    <div className="d-flex features feature-clean m-2" style={{marginTop: "10px"}}>                        
                        <div className="text-primary text-center">
                            {/* <i className="uil uil-phone d-block rounded h3 mb-2" style="height: 40px; width: 40px; line-height: 40px;"></i> */}
                        </div>
                        <div className="content ms-1">
                            <h5 className="mb-1"><a href="#" className="text-dark" style={{marginTop:"1px"}}>+91 91744 52344</a></h5>
                            {/* <p className="text-muted mb-0" style="line-height: 0.5; font-size: 12px;" > 24/7 Support</p> */}
                            <p> 24/7 Support</p>
                        </div>
                    </div>
                </div>
            </div>
            
        
            <div className="menu-extras">
                        <div className="menu-item">
                            {/* <!-- Mobile menu toggle--> */}
                            {/* onclick="toggleMenu()" */}
                            <a href="#" className="navbar-toggle" id="isToggle">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                            {/* <!-- End mobile menu toggle--> */}
                        </div>
                    </div>
                    </div>
        {/* </div><!--end container--> */}
        <div className="cp_con">
            <a href="#">24/7 Support : +91 91744 52344</a>
        </div>
    </header>
    {/* <!--end header--> */}
    {/* <!-- Navbar End --> */}
            </div>
            
        )
    }
}

export default NavBar00;