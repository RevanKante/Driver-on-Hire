function ContactUs() {
    return (        
        <div className="container">
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
				  <h5 className="control-label col-sm-2" for="fname">First Name:</h5>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
				  </div>
				</div>
				<div className="form-group">
				  <h5 className="control-form col-sm-2" for="lname">Last Name:</h5>
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
				  <div className="col-sm-offset-2 col-sm-2 mt-4">
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