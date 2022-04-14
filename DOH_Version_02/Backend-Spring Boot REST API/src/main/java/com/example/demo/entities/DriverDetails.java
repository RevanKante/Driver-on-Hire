package com.example.demo.entities;

public class DriverDetails {
	private int booking_id;
	private int driver_id;
	private int user_id;
	private String first_name;
	private String last_name;
	private String contact;
	
	public DriverDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DriverDetails(int booking_id, int driver_id, int user_id, String first_name, String last_name,
			String contact) {
		super();
		this.booking_id = booking_id;
		this.driver_id = driver_id;
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.contact = contact;
	}

	public DriverDetails(int booking_id) {
		super();
		this.booking_id = booking_id;
	}

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public int getDriver_id() {
		return driver_id;
	}

	public void setDriver_id(int driver_id) {
		this.driver_id = driver_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	
	
}
