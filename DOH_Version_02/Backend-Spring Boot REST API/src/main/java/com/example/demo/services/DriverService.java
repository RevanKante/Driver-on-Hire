package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Driver;
import com.example.demo.repositories.DriverRepository;

@Service
public class DriverService 
{
	@Autowired
	DriverRepository drepo;
	
	public Driver checkDriver(String email1, String password1)
	{
		return drepo.checkDriver(email1,password1);
	}
	
	public Driver getDriver(int id)
	{
		return drepo.findById(id).get();
	}
}
