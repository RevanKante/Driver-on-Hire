package com.example.demo.entities;

public class UserRegister 
{	
	private String first_name;	
	private String last_name;	
	private String contact;	
	private String state;
	private String city;	
	private String email_id;	
	private String password;	
	private String role;	
	private String security_que;
	private String security_ans;
	
	public UserRegister()
	{
		super();
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

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getSecurity_que() {
		return security_que;
	}

	public void setSecurity_que(String sequrity_que) {
		this.security_que = sequrity_que;
	}

	public String getSecurity_ans() {
		return security_ans;
	}

	public void setSecurity_ans(String sequrity_ans) {
		this.security_ans = sequrity_ans;
	}	
}
