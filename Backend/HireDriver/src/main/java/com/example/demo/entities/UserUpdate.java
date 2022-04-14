package com.example.demo.entities;

public class UserUpdate 
{
	private int user_id;
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
	
	public UserUpdate() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public UserUpdate(int user_id, String first_name, String last_name, String contact, String state, String city) {
		super();
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.contact = contact;
		this.state = state;
		this.city = city;
	}


	public UserUpdate(int user_id, String first_name, String last_name, String contact, String state, String city,
			String email_id, String password, String role, String security_que, String security_ans) {
		super();
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.contact = contact;
		this.state = state;
		this.city = city;
		this.email_id = email_id;
		this.password = password;
		this.role = role;
		this.security_que = security_que;
		this.security_ans = security_ans;
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
	public void setSecurity_que(String security_que) {
		this.security_que = security_que;
	}
	public String getSecurity_ans() {
		return security_ans;
	}
	public void setSecurity_ans(String security_ans) {
		this.security_ans = security_ans;
	}
	
	
}
