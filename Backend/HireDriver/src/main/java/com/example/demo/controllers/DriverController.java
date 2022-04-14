package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Driver;
import com.example.demo.entities.Login;
import com.example.demo.services.DriverService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DriverController 
{
	@Autowired
	DriverService ds;
	
	@PostMapping("/checkdriver")
	public Driver checkDriver(@RequestBody Login l)
	{
		return ds.checkDriver(l.getEmail_id(), l.getPassword());
	}
		
}
