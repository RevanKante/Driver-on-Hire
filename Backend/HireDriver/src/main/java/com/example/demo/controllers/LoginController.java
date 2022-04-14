package com.example.demo.controllers;

import java.net.http.HttpClient.Redirect;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController 
{
	@Autowired
	LoginService ls;
	
	@PostMapping("/checklogin")
	public Login checkLogin(@RequestBody Login l)
	{
		Login u = ls.checkLogin(l.getEmail_id(), l.getPassword());
		return u;
	}
	
	@PostMapping("/forgotpassword")
	public Login forgotPassword(@RequestBody Login l)
	{
		Login login = ls.forgotPassword(l.getEmail_id());
		return login;
	}
	
	@PostMapping("/fetchuser")
	public Optional<Login> fetchUser(@RequestBody Login l)
	{
		int loginId = l.getLogin_id();
		return ls.fetchUser(loginId);
	}
}
