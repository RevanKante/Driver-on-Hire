function ContactUs() {
    return (

        // <div classNameName="container">
        //     <div classNameName="row">
        //         <div classNameName="col-md-5">
        //             <form>
        //             <div classNameName="form-group">
        //                             <input type="text" classNameName="form-control mt-2" name="fname"  placeholder="First Name" />
        //                         </div>
        //                         <div classNameName="form-group mt-2">
        //                             <input type="text" classNameName="form-control" name="lname"  placeholder="Last Name" />
        //                         </div>
        //             </form>
        //         </div>
        //         <div classNameName="col-md-5">
        //             <div classNameName="container">
        //                 <div classNameName="content">
        //                     <h2>Contact Us</h2>
        //                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iure quisquam optio voluptas ipsam, minus exercitationem, accusantium perferendis fuga velit vel ratione obcaecati. Veritatis quae enim quia praesentium quas ea.</p>
        //                 </div>
        //                 <div classNameName="content-form">
        //                     <section>
        //                         <h2>address</h2>
        //                         <p>
        //                             {/* <FontAwesomeIcon icon="fa-solid fa-map-location" /> */}
        //                             Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
        //                             Inventore, praesentium nesciunt! Praesentium, illum libero velit <br />
        //                             aspernatur voluptatibus ad quia nostrum? Ab eaque suscipit laboriosam<br />
        //                             labore expedita necessitatibus commodi voluptates sit?<br />
        //                         </p>
        //                     </section>

        //                     <section>
        //                         {/* <FontAwesomeIcon icon="fa-solid fa-phone" /> */}
        //                         <h2>phone</h2>
        //                         <p>123-456-789</p>
        //                     </section>

        //                     <section>
        //                         {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
        //                         <h2>Email</h2>
        //                         <p>xyz@gmail.com</p>
        //                     </section>
        //                 </div>
        //             </div>
        //             <div classNameName="col-lg-7">
        //                 <h2>Send us a message</h2>
        //                 <form>

        //                 </form>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        
        <div className="container"><br/><br/>
	<div className="row">
		<div className="p-20 col-md-5 bg-dark text-white container-fluid" >
			<div className="contact-info p-5">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<section>
                <h2 >Address</h2>
                <p>
                    
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/>
                     Inventore, praesentium nesciunt! Praesentium, illum libero velit <br/>
                     aspernatur voluptatibus ad quia nostrum? Ab eaque suscipit laboriosam<br/> 
                     labore expedita necessitatibus commodi voluptates sit?<br/>
                </p>
            </section>

            <section>
                
                <h2>phone</h2>
                <p>123-456-789</p>
            </section>

            <section>
                <h2>Email</h2>
                <p>xyz@gmail.com</p>
            </section>
			</div>
		</div>
		<div className="col-md-7 bg-white text-dark container-fluid">
			<div className="contact-form p-5">
				<div className="form-group ">
				  <h5 className="control-label col-sm-4" for="fname">First Name:</h5>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
				  </div>
				</div>
				<div className="form-group">
				  <h5 className="control-form col-sm-4" for="lname">Last Name:</h5>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
				  </div>
				</div>
				<div className="form-group">
				  <h5 className="control-form col-sm-2" for="email">Email:</h5>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
				  </div>
				</div>
				<div className="form-group">
				  <h5 className="control-form col-sm-2" for="comment">Comment:</h5>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment"></textarea>
				  </div>
				</div>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10 mt-4">
					<button type="submit" className="btn btn-default bg-primary">Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>

    )
}
export default ContactUs;