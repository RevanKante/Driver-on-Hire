package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Booking;
import com.example.demo.entities.City;
import com.example.demo.entities.Driver;
import com.example.demo.entities.DriverDetails;
import com.example.demo.entities.User;

	@Repository	
	public interface BookingRepository extends JpaRepository<Booking, Integer>{
		
		
		@Query(value= "SELECT * FROM `bookings` WHERE `user_id`=?1", nativeQuery = true)
		public List<Booking> getAllCustBookings(int userid);
		
		@Query("select b from Booking b")
		public List<Booking> getallBookings(); //for admin to see all bookings
		
		@Query("select b from Booking b where date(ride_start_date)= current_date()")
		public List<Booking> todaysBookings(); // for admin to see everyday's bookings
		
		@Query("select b from Booking b where ride_status= 'pending'") // for driver to see pending bookings
		public List<Booking> getBooking();
		
		@Modifying
		@Query("update Booking b set b.ride_status='confirmed' where b.booking_id= :bookingid") // for driver, he can confirm bookings 
		public int confirmBooking(int bookingid);
		
		@Query(value= "SELECT * FROM `bookings` WHERE `user_id`=?1", nativeQuery = true) // for customer, he can see  bookings created by him
		public List<Booking> getConfirmedBookings4(int userid);
		
		@Query(value= "SELECT * FROM `bookings` WHERE `driver_id`=?1 and ride_status='confirmed'", nativeQuery = true) // for driver, he can see confirmed rides
		public List<Booking> getDriverConfirmedBookings(int driverid);
		
		@Query(value= "SELECT * FROM `bookings` WHERE `driver_id`=?1", nativeQuery = true)
		public List<Booking> allDriverBookings(int driverid);   //driver will get all his confirmed,completed bookings
		
		
		@Transactional
		@Modifying           //Cancelling ride from customer side //JPQL
		@Query("update Booking b set b.ride_status='cancelled' where b.booking_id= :bookingid")
		public int cancelCustRide(int bookingid);
		
		
		@Transactional
		@Modifying 			//Cancelling ride from driver side
		@Query("update Booking b set b.ride_status='pending' where b.booking_id= :bookingid")
		public int cancelBooking(int bookingid);
		
		/*	
		@Query("select b from Booking b where user_id= :userid")
		public List<Booking> getConfirmedBookings(int userid);	
		*/
			/*
		@Query("select b from Booking b where ride_status='pending'")
		public List<Booking> getConfirmedBookings();
		*/
			/*
		@Query("select b from Booking b where user_id= :userid")
		public List<Booking> getConfirmedBookings3(int userid);	*/
		/*
		@Query("select b from Booking b where User= :u")
		public List<Booking> getConfirmedBookings3(User u);	 */
		/*
		@Query("select b from Booking b where user_id= :userid")
		public List<Booking> getConfirmedBookings4(int userid);   AND `age`=?2   `ride_status`=?1 and 
		*/

		/*
		@Query(value= "SELECT * FROM `bookings` WHERE `user_id`=?2", nativeQuery = true)
		public List<Booking> getConfirmedCustBookings(String status, int userid);
		*/
		
		@Query(value= "SELECT * FROM `bookings` WHERE user_id=?1 AND ride_status=`confirmed` OR ride_status= 'pending'", nativeQuery = true)
		public List<Booking> getUpcomingCustBookings(int userid);  //SQLSyntaxErrorException: Unknown column 'confirmed' in 'where clause'
		/*
		@Query("select b from Booking b where user_id= :userid and ride_status='confirmed'")  user_id=?1 AND 
		public List<Booking> getConfirmedCustBookings(int userid);  //Parameter value [3] did not match expected type [com.example.demo.entities.User (n/a)]
*/
		/*
		@Query(value= "SELECT * FROM `bookings` WHERE `driver_id`=?1 and ride_status='confirmed'", nativeQuery = true)
		public List<Booking> getDriverBookings(int driverid);
		*/
		

		
		
		//Fetching driver details of respective booking
		@Query(value= "select b.booking_id,d.driver_id,u.user_id,u.first_name,u.last_name,u.contact from bookings b inner join drivers d on b.driver_id=d.driver_id inner join users u on d.user_id=u.user_id where b.booking_id =?1", nativeQuery = true)
		public DriverDetails getDriverDetails(int bookingid); 
		
}
