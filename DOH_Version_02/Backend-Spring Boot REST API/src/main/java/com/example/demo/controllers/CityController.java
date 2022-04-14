package com.example.demo.controllers;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.entities.BookingRegister;
import com.example.demo.entities.City;
import com.example.demo.services.CityService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CityController {

	@Autowired
	CityService cs;
	
	@GetMapping("/getcities")
	public List<City> getCities (@RequestParam("stete") String state)
	{
		return cs.getCities(state);
	}
	
	@GetMapping("/allcities")
	public List<City> getAll()
	{
		return cs.getAll();
	}
	
	@GetMapping("/allstates")
	public List<String> getAllStates()
	{
		return cs.getStates();
	}
	
	@PostMapping("/addnewcity")
	public City addNewCity(@RequestBody City c) throws ParseException
	{
		String city = c.getCity_name();
		String state = c.getState();
		City ct = new City(city, state, 1);
		return cs.save(ct);
	}

}
