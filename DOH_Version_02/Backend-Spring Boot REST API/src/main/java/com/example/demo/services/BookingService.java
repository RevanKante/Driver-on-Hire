package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Driver;
import com.example.demo.entities.DriverDetails;
import com.example.demo.entities.User;
import com.example.demo.repositories.BookingRepository;

@Service
public class BookingService {

	@Autowired
	BookingRepository bkrepo;
	
	
	public Booking save(Booking b)
	{
		return bkrepo.save(b);
	}
	
	public double generateFare(int duration)
	{
		double total_fare=600;
		double charges_per_hour=50;
		if(duration>6)
		{
			total_fare=total_fare+((duration-6)*charges_per_hour);
		}
		return total_fare ;
	}
	
	public List<Booking> getAllCustBookings(int userid) {
		return bkrepo.getAllCustBookings(userid);
	}
	
	public int cancelCustRide(int bookingid) {
		return bkrepo.cancelCustRide(bookingid);
	}
	
	public int cancelBooking(int bookingid)
	{
		return bkrepo.cancelBooking(bookingid);
	}
	
	public DriverDetails getDriverDetails(int bookingid)
	{
		return bkrepo.getDriverDetails(bookingid);
	}
	
	public List<Booking> getallBookings()
	{
		return bkrepo.getallBookings();
	}
	public List<Booking> todaysBookings()
	{
		return bkrepo.todaysBookings();
	}
	public Booking getBookings(int id)
	{
		return bkrepo.findById(id).get();
	}
	public List<Booking> getAll() {
		// TODO Auto-generated method stub
		return bkrepo.getBooking();
	}
	
	public int confirmBooking(int bookingid) {
		
		return bkrepo.confirmBooking(bookingid);
		//return 1;
	}
	
	public List<Booking> getConfirmedBookings4(int userid) {
		return bkrepo.getConfirmedBookings4(userid);
	}
	public List<Booking> getDriverConfirmedBookings(int driverid) {
		return bkrepo.getDriverConfirmedBookings(driverid);
	}
	public List<Booking> allDriverBookings(int driverid)
	{
		return bkrepo.allDriverBookings(driverid);
	}

/*
	public List<Booking> getConfirmedBookings(int userid) {
		return bkrepo.getConfirmedBookings(userid);
	}*/
	/*
	public List<Booking> getConfirmedBookings() {
		return bkrepo.getConfirmedBookings();
	}
	*/
	/*
	public List<Booking> getConfirmedBookings3(int userid) {
		return bkrepo.getConfirmedBookings3(userid);
	} */
	/*
	public List<Booking> getConfirmedBookings3(User u) {
		return bkrepo.getConfirmedBookings3(u);
	}*/
	
	/*
	public List<Booking> getConfirmedCustBookings(String status, int userid) {
		System.out.println(("Service UID: "+userid));
		return bkrepo.getConfirmedCustBookings(status, userid);
	}
	*/

	/*
	public List<Booking> getConfirmedBookings4(int did) {
		return bkrepo.getDriverBookings(did);
	}
	*/
	public List<Booking> getUpcomingCustBookings(int userid) {
		System.out.println(("Service UID: "+userid));
		return bkrepo.getUpcomingCustBookings( userid);
	}
	

	
}
