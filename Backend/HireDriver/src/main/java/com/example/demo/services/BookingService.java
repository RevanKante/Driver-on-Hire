package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.repositories.BookingRepository;

@Service
public class BookingService {

	@Autowired
	BookingRepository bkrepo;
	
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

	public List<Booking> getAll() {
		// TODO Auto-generated method stub
		return bkrepo.getBooking();
	}
	
	public int confirmBooking(int bookingid) {
		
		return bkrepo.confirmBooking(bookingid);
		//return 1;
	}
	
	public int cancelBooking(int bookingid)
	{
		return bkrepo.cancelBooking(bookingid);
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


	
}
