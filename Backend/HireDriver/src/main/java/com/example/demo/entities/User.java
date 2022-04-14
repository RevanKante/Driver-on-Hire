package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_id;
	
	@Column
	private String first_name;
	
	@Column
	private String last_name;
	
	@Column
	private String contact;
	
	@Column
	private String state;
	
	@Column
	private String city;

	public User() 
	{
		super();
	}

	public User(String first_name, String last_name, String contact, String state, String city) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.contact = contact;
		this.state = state;
		this.city = city;
	}
	
	

	public User(int user_id) {
		super();
		this.user_id = user_id;
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

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
	
	@Override
	public String toString() {
		return "User [user_id=" + user_id + "]";
	}

	
}
