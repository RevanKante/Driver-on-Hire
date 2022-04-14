package com.example.demo.entities;

import java.sql.Date;

public class BookingRegister {

	private String ride_start_date;

	private int  duration_hrs;
	
	private String pickup_address;
	
	private Date actual_ride_end_time;
	
	private double total_fare;
	
	
	private String ride_status;
	
	
	private int city_id;
	
	
	private String destination_city_id;
	
	
	private int user_id;
	
	
	private int driver_id;


	public BookingRegister() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BookingRegister(String ride_start_date, int duration_hrs,  String pickup_address,
			Date actual_ride_end_time, double total_fare, String ride_status, int city_id, String destination_city_id,
			int user_id, int driver_id) {
		super();
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

	public BookingRegister(int user_id) {
		super();
		this.user_id = user_id;
	}

	public String getRide_start_date() {
		return ride_start_date;
	}


	public void setRide_start_date(String ride_start_date) {
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


	public int getCity_id() {
		return city_id;
	}


	public void setCity_id(int city_id) {
		this.city_id = city_id;
	}


	public String getDestination_city_id() {
		return destination_city_id;
	}


	public void setDestination_city_id(String destination_city_id) {
		this.destination_city_id = destination_city_id;
	}


	public int getUser_id() {
		return user_id;
	}


	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	public int getDriver_id() {
		return driver_id;
	}


	public void setDriver_id(int driver_id) {
		this.driver_id = driver_id;
	}
}
