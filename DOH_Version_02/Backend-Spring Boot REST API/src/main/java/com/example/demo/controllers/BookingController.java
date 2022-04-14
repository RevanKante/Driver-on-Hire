package com.example.demo.controllers;

import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.entities.BookingRegister;
import com.example.demo.entities.City;
import com.example.demo.entities.Driver;
import com.example.demo.entities.DriverDetails;
import com.example.demo.entities.User;
import com.example.demo.services.BookingService;
import com.example.demo.services.CityService;
import com.example.demo.services.DriverService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookingController {
	
	@Autowired
	BookingService bs;
	
	@Autowired
	CityService cs;
	
	@Autowired
	UserService us;
	
	@Autowired
	DriverService ds;
	/* With Driver ID
	@PostMapping("/generatebooking")
	public Booking generatebooking(@RequestBody BookingRegister b) throws ParseException 
	{
		City c = cs.getCity(b.getCity_id());
		User u = us.getUser(b.getUser_id());
		Driver d = ds.getDriver(b.getDriver_id());
		
		Date cdate = new Date((Calendar.getInstance().getTimeInMillis())+19800000);
		System.out.println(cdate);
		
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		java.util.Date ridedate =df.parse(b.getRide_start_date());
		long millis = ridedate.getTime();
		java.util.Date rideStartDate = new Date(millis+19800000);
		
		Booking booking = new Booking(cdate,rideStartDate, b.getDuration_hrs(), b.getPickup_address(),  b.getTotal_fare(), b.getRide_status(), c, b.getDestination_city_id(), u, d);

		return bs.save(booking);		
	}	
	*/
	@PostMapping("/generatebooking")
	public Booking generatebooking(@RequestBody BookingRegister b) throws ParseException 
	{
		City c = cs.getCity(b.getCity_id());
		User u = us.getUser(b.getUser_id());
		//Driver d = ds.getDriver(b.getDriver_id());
		
		Date cdate = new Date((Calendar.getInstance().getTimeInMillis())+19800000);
		System.out.println(cdate);
		
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		java.util.Date ridedate =df.parse(b.getRide_start_date());
		long millis = ridedate.getTime();
		java.util.Date rideStartDate = new Date(millis+19800000);
		
		Booking booking = new Booking(cdate,rideStartDate, b.getDuration_hrs(), b.getPickup_address(),  b.getTotal_fare(), b.getRide_status(), c, b.getDestination_city_id(), u );

		return bs.save(booking);		
	}	
	
	@GetMapping("/generatefare")
	public double generateFare(@RequestParam ("duration_hrs") int duration)
	{
		return bs.generateFare(duration);		
	}
	
	@GetMapping("/getallcustbookings")
	public List<Booking> getAllCustBookings(@RequestParam ("user_id") int userid)
	{
		//int uid = b.getUser_id();
		return bs.getAllCustBookings(userid);		
	}
	

	@GetMapping("/cancelCustRide")  //working
	public int cancelCustRide(@RequestParam ("bookingid") int bookingid)
	{
		 return bs.cancelCustRide(bookingid);	
	}

	
	@GetMapping("/cancelbooking")   //working
	public int cancelBooking(@RequestParam ("bookingid") int bookingid)
	{
		return bs.cancelBooking(bookingid);
	}
	
	@GetMapping("/driverdetails")   //Required request parameter 'bookingid' for method parameter type int is not present]
	public DriverDetails getDriverDetails(@RequestBody DriverDetails dd)
	{
		int bookingid = dd.getBooking_id();
		return bs.getDriverDetails(bookingid);
	}
	
	@GetMapping("/getallbookings")
	public List<Booking> getallBookings()
	{
		return bs.getallBookings();
	}
	
	@GetMapping("/todaysbookings")
	public List<Booking> todaysBookings()
	{
		return bs.todaysBookings();
	}

	@GetMapping("/pendingbookings")
	public List<Booking> fetch()
	{
		return bs.getAll();
	}
	@GetMapping("/confirmbooking")
	public int confirmBooking(@RequestParam ("bookingid") int bookingid) {
		
		System.out.println(bookingid);
		return bs.confirmBooking(bookingid);
	}
	@GetMapping("/getconfirmedbookings4")
	public List<Booking> getConfirmedBookings4(@RequestBody BookingRegister b)
	{
		int uid = b.getUser_id();
		return bs.getConfirmedBookings4(uid);		
	}
	
	@PostMapping("/driverconfirmedbookings")
	public List<Booking> getDriverConfirmedBookings(@RequestBody BookingRegister b) 
	{
		int driverid = b.getDriver_id();
		return bs.getDriverConfirmedBookings(driverid);
	}
	
	@PostMapping("/alldriverbookings")
	public List<Booking> allDriverBookings(@RequestBody BookingRegister b)
	{
		int driverid = b.getDriver_id();
		return bs.allDriverBookings(driverid);
	}
	/*
	@GetMapping("/getconfirmedbookings")
	public List<Booking> getConfirmedBookings(@RequestParam ("user_id") int userid)
	{
		return bs.getConfirmedBookings(userid);		
	}*/
	/*
	@GetMapping("/getconfirmedbookings")
	public List<Booking> getConfirmedBookings()
	{
		return bs.getConfirmedBookings();		
	}
	*/
	/*
	@GetMapping("/getconfirmedbookings3")
	public List<Booking> getConfirmedBookings3(@RequestBody BookingRegister b)
	{
		User u = us.getUser(b.getUser_id());
		
		return bs.getConfirmedBookings3(u.getUser_id());		
	}*/
	/*
	@GetMapping("/getconfirmedbookings3")
	public List<Booking> getConfirmedBookings3(@RequestBody BookingRegister b)
	{
		User u = us.getUser(b.getUser_id());
		
		return bs.getConfirmedBookings3(u);		
	}*/
	

	/*
	@GetMapping("/getconfirmedcustbookings")
	public List<Booking> getConfirmedCustBookings(@RequestParam ("user_id") int userid)
	{
		System.out.println("User ID: "+userid);
		List<Booking> newList = new ArrayList<Booking>();
		newList = bs.getConfirmedCustBookings("confirmed",userid);
		System.out.println(newList);
		return newList;
		//return bs.getConfirmedCustBookings(userid);		
	}
*/

	/*
	@GetMapping("/getdriverconfirmedbookings")
	public List<Booking> getConfirmedBookings4(@RequestBody BookingRegister b)
	{
		int did = b.getDriver_id();
		return bs.getConfirmedBookings4(did);		
	}
	*/
	@GetMapping("/getupcomingcustbookings")   //working
	public List<Booking> getUpcomingCustBookings(@RequestBody BookingRegister b)
	{
		int uid = b.getUser_id();
		return bs.getUpcomingCustBookings(uid);		
	}

}
