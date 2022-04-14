package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
public class Driver 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int driver_id;
	
	@Column
	private String license_no;
	
	@Column
	private String aadhar_no;
	
	@Column
	private int experience;
	
	@Column
	private int availability_status;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user_id;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "login_id")
	private Login login_id;
	//@JoinColumn(name = "user_id", referencedColumnName = "user_id", insertable = false, updatable = false)
	/*(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id", insertable="false", updatable="false")
	private User user_id1;*/
	/*
	@OneToOne(cascade = CascadeType.ALL)
	@Column(name = "user_id", insertable="false", updatable="false")
	private User user_id1;
	*/
	//@OneToOne(cascade = CascadeType.ALL)
	//@JoinColumn(name = "user_id", insertable = "false", updatable = "false" != null)
	//private User user_id2;

	public Driver() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Driver(String license_no, String aadhar_no, int experience, int availability_status, User user_id,
			Login login_id) {
		super();
		this.license_no = license_no;
		this.aadhar_no = aadhar_no;
		this.experience = experience;
		this.availability_status = availability_status;
		this.user_id = user_id;
		this.login_id = login_id;
	}

	public Driver(int driver_id, String license_no, String aadhar_no, int experience, int availability_status,
			User user_id, Login login_id) {
		super();
		this.driver_id = driver_id;
		this.license_no = license_no;
		this.aadhar_no = aadhar_no;
		this.experience = experience;
		this.availability_status = availability_status;
		this.user_id = user_id;
		this.login_id = login_id;
	}



	public int getDriver_id() {
		return driver_id;
	}



	public void setDriver_id(int driver_id) {
		this.driver_id = driver_id;
	}



	public String getLicense_no() {
		return license_no;
	}



	public void setLicense_no(String license_no) {
		this.license_no = license_no;
	}



	public String getAadhar_no() {
		return aadhar_no;
	}



	public void setAadhar_no(String aadhar_no) {
		this.aadhar_no = aadhar_no;
	}



	public int getExperience() {
		return experience;
	}



	public void setExperience(int experience) {
		this.experience = experience;
	}



	public int getAvailability_status() {
		return availability_status;
	}



	public void setAvailability_status(int availability_status) {
		this.availability_status = availability_status;
	}



	public User getUser_id() {
		return user_id;
	}



	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}



	public Login getLogin_id() {
		return login_id;
	}



	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}
		
	
}
