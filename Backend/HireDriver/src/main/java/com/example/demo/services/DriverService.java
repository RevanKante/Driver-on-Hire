package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Driver;
import com.example.demo.repositories.DriverRepository;

@Service
public class DriverService {

	@Autowired
	DriverRepository dr;
	
	
	public Driver getDriver(int id)
	{
		return dr.findById(id).get();
	}
}
