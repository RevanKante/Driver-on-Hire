package com.example.demo.controllers;

import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.entities.BookingRegister;
import com.example.demo.entities.City;
import com.example.demo.entities.Driver;
import com.example.demo.entities.User;
import com.example.demo.services.BookingService;
import com.example.demo.services.CityService;
import com.example.demo.services.DriverService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@Transactional
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
	
	@GetMapping("/generatefare")
	public double generateFare(@RequestParam ("duration_hrs") int duration)
	{
		return bs.generateFare(duration);		
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
	
	@GetMapping("/cancelbooking")
	public int cancelBooking(@RequestParam ("bookingid") int bookingid)
	{
		return bs.cancelBooking(bookingid);
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
}
