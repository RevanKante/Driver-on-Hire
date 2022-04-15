import Reviews from "./Reviews_1";
import styles from './HomePage_1.css';



function HomePage() {

    return (<div className="container-fluid">
        {/* <Reviews /> */}
        {/* <header class="header">
        <img src="//3.imimg.com/data3/MC/GT/MY-2/social-logo-500x500.png" alt="Our main logo" class="logo" />
      
        <nav class="navbar">
          <ul class="navbar-lists">
            <li><a href="#" class="navbar-link home-link" > Home </a> </li>
            <li><a href="#" class="navbar-link about-link" > About Us </a> </li>
            <li><a href="#" class="navbar-link contact-link" > Contact Us</a> </li>
            <li><a href="#" class="navbar-link Review-link" > Reviews</a> </li>
          </ul>
        </nav>
      </header>  */}

        {/* <!-- ======================== 
              Our Hero Section 
          ======================== --> */}
        <div>
            <main>
                <section class="section-hero section">
                    {/* <div class="container grid grid-two-column">  style={{backgroundImage: URL('https://www.digitalcreed.in/wp-content/uploads/2016/04/driver.jpg')}} */}
                    <div className="row" >
                        <div class="section-hero-data" className="col-md-6">
                            {/* <p class="hero-top-data">This is Us</p> */} <br /><br /><br />
                            {/* <p class="hero-top-data">This is Us</p> */} <br /><br /><br />
                            {/* <h1 class="hero-heading">Driver On Hire</h1> */}
                            <p class="hero-para" style={{marginLeft:"50px"}}>
                                Our web based application allows customers owning a car to request for a driver for their outstation round trips.  This is very helpful for the customers who cannot drive or do not want to drive on their own. It also allows the drivers not owning a vehicle or the freelancers who enjoy driving, to accept the rides flexibly as per their availability & convenience.
                            </p><br /><br /><br />
                            <div>
                                {/* <a href="#" class="btn hireme-btn">Join Us</a> */}
                            </div>
                        </div><br /><br /><br />
                        {/* <!-- hero section right side --> */}
                        <div class="section-hero-image" className="col-md-6"><br /><br /><br /><br /><br />
                            <img src="https://www.digitalcreed.in/wp-content/uploads/2016/04/driver.jpg" style={{ width: "700px", height: "450px" }} alt="This is Driver" class="hero-img" />
                        </div>
                    </div>
                </section>
            </main>
        </div>

        {/* <!-- ======================== 
              Cities section 
          ======================== --> */}

        <section class="section section-cities" id="cities-section">
            <div class="container">
                <h2 class="common-heading">Our Existence</h2>
                <p>
                    Driver On Hire maintains a long-standing relationship with the 5 major airports of India
                    For weekend getaways, business outings, and so on,
                    Driver On Hire Outstation has been established recently and currently covers over 700+ destinations across 50 cities.
                </p>
            </div>

            {/* <div class="p-btns">
        <div class="btn p-btn"data-btn-num="1">WebSite</div>
        <div class="btn p-btn"data-btn-num="2">Youtube</div>
        <div class="btn p-btn"data-btn-num="3">Design</div>
      </div> */}

            <div class="container grid grid-three-column cities-images">
                <div className="row">
                    <div className="col-lg-3">
                        <div class="img-overlay p-btn--1">
                            <img src="https://images.memphistours.com/large/a18740a16cbfc72d97c819b72670a297.jpg" style={{ width: "400px", height: "250px" }} alt="Mumbai" />
                            <div class="overlay">
                                <a href="" target="mumbai" class="common-heading">Mumbai</a>
                            </div>
                        </div>
                    </div><br/>
                    <div className="col-lg-3" style={{marginLeft:"150px"}}>
                        <div class="img-overlay p-btn--3">
                            <img src="https://static.toiimg.com/photo/53438383/.jpg" style={{ width: "400px", height: "250px" }} alt="Delhi" />
                            <div class="overlay">
                                <a href="" target="Delhi" class="common-heading">Delhi</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" style={{marginLeft:"150px"}}>
                        <div class="img-overlay p-btn--3">
                        <img src="//live.staticflickr.com/4457/26239597189_c9ab8d53ea_b.jpg" style={{ width: "400px", height: "250px" }} alt="Pune" />
                            <div class="overlay">
                                <a href="" target="Delhi" class="common-heading">Pune</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row" style={{marginTop:"20px"}}>
                    <div className="col-lg-3">
                        <div class="img-overlay p-btn--1">
                        <img src="//im.rediff.com/news/2014/aug/25chennai1.jpg" style={{ width: "400px", height: "250px" }} alt="Chennai" />
                            <div class="overlay">
                                <a href="" target="mumbai" class="common-heading">Chennai</a>
                            </div>
                        </div>
                    </div><br/>
                    <div className="col-lg-3" style={{marginLeft:"150px"}}>
                        <div class="img-overlay p-btn--3">
                        <img src="https://media.easemytrip.com/media/Blog/India/637045878100143683/637045878100143683fiQVxm.jpg" style={{ width: "400px", height: "250px" }} alt="Hydrabad" />
                            <div class="overlay">
                                <a href="" target="Delhi" class="common-heading">Hydrabad</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" style={{marginLeft:"150px"}}>
                        <div class="img-overlay p-btn--3">
                        <img src="https://static.toiimg.com/photo/63313958/.jpg" style={{ width: "400px", height: "250px" }} alt="Aurangabad" />
                            <div class="overlay">
                                <a href="" target="Delhi" class="common-heading">Aurangabad</a>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="row" style={{marginTop:"20px"}}>
                    <div className="col-lg-3">
                        <div class="img-overlay p-btn--1">
                        <img src="https://s3.india.com/travel/wp-content/uploads/2017/08/Deekshabhoomi-in-Nagpur.jpg" style={{ width: "400px", height: "250px" }} alt="Nagpur" />
                            <div class="overlay">
                                <a href="" target="mumbai" class="common-heading">Nagpur</a>
                            </div>
                        </div>
                    </div><br/>
                    <div className="col-lg-3" style={{marginLeft:"150px"}}>
                        <div class="img-overlay p-btn--3">
                        <img src="https://static.toiimg.com/photo/34117654/.jpg" style={{ width: "400px", height: "250px" }} alt="Goa" />
                            <div class="overlay">
                                <a href="" target="Delhi" class="common-heading">Goa</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" style={{marginLeft:"150px"}}>
                        <div class="img-overlay p-btn--3">
                        <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Taj-mahal.jpg" style={{ width: "400px", height: "250px" }} alt="Agra" />
                            <div class="overlay">
                                <a href="" target="Delhi" class="common-heading">Agra</a>
                            </div>
                        </div>
                    </div>
                </div>

         

             

            </div>
        </section>


        {/* <!-- ======================== 
              BioData section 
          ======================== --> */}
        <section class="section-biodata section">
            <div class="container grid grid-two-column">
                <div class="bio-image">
                    {/* <img src="//5.imimg.com/data5/IA/AX/MY-25412875/car-driver-services-in-delhi-500x500.jpg" style={{width:"400px", height:"250px"}} alt="My about us image"/>             */}
                </div>
                {/* <!-- About us right side --> */}
                <div>
                    {/* <h2 class="common-heading">Statistics</h2> */}
                    <br /> <br />
                    <p>
                        We strive to deliver this promise of unshaken reliability and trusted service to all our valued customers in every ride offered –
                        an icon of unshakable reliability and character, a core value built into the very foundation of our organization.
                    </p>
                    <br />

                    {/* <div class="bio-data-stats">
                        <div class="bio-stats">
                            <h3>Comfort</h3>
                            <div class="bio-progress-bar">
                                <span>85%</span>
                            </div>
                        </div>
                        <div class="bio-stats">
                            <h3>Reliability</h3>
                            <div class="bio-progress-bar bio-progress-2">
                                <span>80%</span>
                            </div>
                        </div>
                        <div class="bio-stats">
                            <h3>Trust</h3>
                            <div class="bio-progress-bar bio-progress-3">
                                <span>90%</span>
                            </div>
                        </div>
                        <div class="bio-stats">
                            <h3>Safty</h3>
                            <div class="bio-progress-bar bio-progress-4">
                                <span>75%</span>
                            </div>
                        </div>
                    </div> */}
                    {/* <div class="bio-data-btn">
                        <a href="#" class="btn">MORE</a>
                    </div> */}
                </div>
            </div>
        </section>





        {/* 
    <!-- ================================
              Our Work Counter Section 
          =============================== --> */}

        {/* <section class="section section-work-data">
            <div class="container grid grid-four-column">
                <div>
                    <h2 class="counter-numbers">5000+</h2>
                    <p>Rides Completed</p>
                </div>
                <div>
                    <h2 class="counter-numbers">6000+</h2>
                    <p>Happy Customers</p>
                </div>
                <div>
                    <h2 class="counter-numbers">370500+</h2>
                    <p>Distance Covered</p>
                </div>
                <div>
                    <h2 class="counter-numbers">300+</h2>
                    <p>Professional Drivers</p>
                </div>
            </div>
        </section>
 */}

    </div>)
}

export default HomePage;