package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "login")
public class Login 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int login_id;
	
	@Column
	private String email_id;
	
	@Column
	private String password;
	
	@Column
	private String role;
	
	@Column
	private String security_que;
	
	@Column
	private String security_ans;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user_id;

	public Login() 
	{
		super();
	}
	
	
	
	public Login(int login_id) {
		super();
		this.login_id = login_id;
	}



	public Login(String email_id, String password) {
		super();
		this.email_id = email_id;
		this.password = password;
	}

	
	public Login(String email_id, String password, String security_que,
			String security_ans) {
		super();
		this.email_id = email_id;
		this.password = password;
		this.security_que = security_que;
		this.security_ans = security_ans;
	}

	public Login(String email_id) {
		super();
		this.email_id = email_id;
	}


	public Login(String email_id, String password, String role, String sequrity_que, String sequrity_ans,
			User user_id)
	{
		super();
		this.email_id = email_id;
		this.password = password;
		this.role = role;
		this.security_que = sequrity_que;
		this.security_ans = sequrity_ans;
		this.user_id = user_id;
	}

	public int getLogin_id() {
		return login_id;
	}

	public void setLogin_id(int login_id) {
		this.login_id = login_id;
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

	public String getSequrity_que() {
		return security_que;
	}

	public void setSequrity_que(String sequrity_que) {
		this.security_que = sequrity_que;
	}

	public String getSequrity_ans() {
		return security_ans;
	}

	public void setSequrity_ans(String sequrity_ans) {
		this.security_ans = sequrity_ans;
	}

	public User getUser_id() {
		return user_id;
	}

	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}
	
	
	
}
