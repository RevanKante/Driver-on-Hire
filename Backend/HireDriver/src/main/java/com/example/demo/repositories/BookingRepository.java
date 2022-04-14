package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Booking;


	@Repository	
	public interface BookingRepository extends JpaRepository<Booking, Integer>{
		
		@Query("select b from Booking b")
		public List<Booking> getallBookings(); //for admin to see all bookings
		
		@Query("select b from Booking b where date(ride_start_date)= current_date()")
		public List<Booking> todaysBookings(); // for admin to see everyday's bookings
		
		@Query("select b from Booking b where ride_status= 'pending'") // for driver to see pending bookings
		public List<Booking> getBooking();
		
		@Modifying
		@Query("update Booking b set b.ride_status='confirmed' where b.booking_id= :bookingid") // for driver, he can confirm bookings 
		public int confirmBooking(int bookingid);
		
		@Modifying
		@Query("update Booking b set b.ride_status='pending' where b.booking_id= :bookingid") // for driver, he can cancel confirmed booking
		public int cancelBooking(int bookingid);
		
		@Query(value= "SELECT * FROM `bookings` WHERE `user_id`=?1", nativeQuery = true) // for customer, he can see  bookings created by him
		public List<Booking> getConfirmedBookings4(int userid);
		
		@Query(value= "SELECT * FROM `bookings` WHERE `driver_id`=?1 and ride_status='confirmed'", nativeQuery = true) // for driver, he can see confirmed rides
		public List<Booking> getDriverConfirmedBookings(int driverid);
		
		@Query(value= "SELECT * FROM `bookings` WHERE `driver_id`=?1", nativeQuery = true)
		public List<Booking> allDriverBookings(int driverid);   //driver will get all his confirmed,completed bookings
		
}
