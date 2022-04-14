package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.entities.UserRegister;
import com.example.demo.entities.UserUpdate;
import com.example.demo.services.LoginService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController 
{
	@Autowired
	UserService us;
	
	@Autowired
	LoginService ls;
	
	@PostMapping("/registeru")
	public User registerUser(@RequestBody UserRegister user)
	{
		User u = new User(user.getFirst_name(), user.getLast_name(), user.getContact(), user.getState(), user.getCity());
		User inserted = us.add(u);
		Login l = new Login(user.getEmail_id(),user.getPassword(),"customer",user.getSecurity_que(),user.getSecurity_ans(),inserted);
		ls.add(l);
		return us.add(u);
	}
	
	@PostMapping("/update")
	public int updateProfile(@RequestBody UserUpdate user)
	{
		User u = new User(user.getUser_id(), user.getFirst_name(), user.getLast_name(), user.getContact(), user.getState(), user.getCity());
		int inserted = us.updateUser(u.getUser_id(),u.getFirst_name(), u.getLast_name(), u.getContact(), u.getState(), u.getCity());
		Login l = new Login(user.getEmail_id(),user.getPassword(),user.getSecurity_que(),user.getSecurity_ans());
		ls.updateLogin(l.getEmail_id(),l.getPassword(),l.getSequrity_que(),l.getSequrity_ans());
		return inserted;
	}
}
