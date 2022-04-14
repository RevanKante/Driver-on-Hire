package com.example.demo.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "bookings")
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int booking_id;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd HH:mm")
	private Date book_date;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date ride_start_date;
	
	@Column
	private int  duration_hrs;
	
	@Column(name="pickup_addr")
	private String pickup_address;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date actual_ride_end_time;
	
	@Column
	private double total_fare;
	
	@Column
	private String ride_status;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "city_id")
	private City city_id;
	
	@Column
	private String destination_city_id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user_id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "driver_id")
	private Driver driver_id;
	
	

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Booking(int booking_id, Date book_date, Date ride_start_date, int duration_hrs, 
			String pickup_address, Date actual_ride_end_time, double total_fare, String ride_status, City city_id,
			String destination_city_id, User user_id, Driver driver_id) {
		super();
		this.booking_id = booking_id;
		this.book_date = book_date;
		this.ride_start_date = ride_start_date;
		this.duration_hrs = duration_hrs;
		this.pickup_address = pickup_address;
		this.actual_ride_end_time = actual_ride_end_time;
		this.total_fare = total_fare;
		this.ride_status = ride_status;
		this.city_id = city_id;
		this.destination_city_id = destination_city_id;
		this.user_id = user_id;
		this.driver_id = driver_id;
	}

	public Booking(Date date, Date ride_start_date, int duration_hrs, String pickup_address,
			Date actual_ride_end_time, double total_fare, String ride_status, City city_id,
			String destination_city_id, User user_id, Driver driver_id) {
		super();
		this.book_date = date;
		this.ride_start_date = ride_start_date;
		this.duration_hrs = duration_hrs;
		this.pickup_address = pickup_address;
		this.actual_ride_end_time = actual_ride_end_time;
		this.total_fare = total_fare;
		this.ride_status = ride_status;
		this.city_id = city_id;
		this.destination_city_id = destination_city_id;
		this.user_id = user_id;
		this.driver_id = driver_id;
	}
	
	public Booking(Date book_date, Date rideStartDate, int duration_hrs, String pickup_address, double total_fare,
			String ride_status, City city_id, String destination_city_id, User user_id, Driver driver_id) {
		super();
		this.book_date = book_date;
		this.ride_start_date = rideStartDate;
		this.duration_hrs = duration_hrs;
		this.pickup_address = pickup_address;
		this.total_fare = total_fare;
		this.ride_status = ride_status;
		this.city_id = city_id;
		this.destination_city_id = destination_city_id;
		this.user_id = user_id;
		this.driver_id = driver_id;
	}
	
	
	
	public Booking(User user_id) {
		super();
		this.user_id = user_id;
	}

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public Date getBook_date() {
		return book_date;
	}

	public void setBook_date(Date book_date) {
		this.book_date = book_date;
	}

	public Date getRide_start_date() {
		return ride_start_date;
	}

	public void setRide_start_date(Date ride_start_date) {
		this.ride_start_date = ride_start_date;
	}

	public int getDuration_hrs() {
		return duration_hrs;
	}

	public void setDuration_hrs(int duration_hrs) {
		this.duration_hrs = duration_hrs;
	}

	public String getPickup_address() {
		return pickup_address;
	}


	public void setPickup_address(String pickup_address) {
		this.pickup_address = pickup_address;
	}

	public Date getActual_ride_end_time() {
		return actual_ride_end_time;
	}

	public void setActual_ride_end_time(Date actual_ride_end_time) {
		this.actual_ride_end_time = actual_ride_end_time;
	}

	public double getTotal_fare() {
		return total_fare;
	}

	public void setTotal_fare(double total_fare) {
		this.total_fare = total_fare;
	}

	public String getRide_status() {
		return ride_status;
	}

	public void setRide_status(String ride_status) {
		this.ride_status = ride_status;
	}

	public City getPickup_city_id() {
		return city_id;
	}

	public void setPickup_city_id(City city_id) {
		this.city_id = city_id;
	}

	public String getDestination_city_id() {
		return destination_city_id;
	}

	public void setDestination_city_id(String destination_city_id) {
		this.destination_city_id = destination_city_id;
	}

	public User getuser_id() {
		return user_id;
	}

	public void setuser_id(User user_id) {
		this.user_id = user_id;
	}

	public Driver getDriver_id() {
		return driver_id;
	}

	public void setDriver_id(Driver driver_id) {
		this.driver_id = driver_id;
	}

	@Override
	public String toString() {
		return "Booking [user_id=" + user_id + "]";
	}
	
	
	
}
