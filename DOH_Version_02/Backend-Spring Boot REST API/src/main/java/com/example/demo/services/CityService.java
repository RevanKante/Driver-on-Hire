package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.entities.City;
import com.example.demo.repositories.CityRepository;

@Service
public class CityService {
	
	@Autowired
	CityRepository crepo;
	
	public List<City> getAll()
	{
		return crepo.getCity() ;
	}

	public List<City> getCities(String state1) {
		// TODO Auto-generated method stub
		return crepo.getCities(state1);
	}

	public List<String> getStates()
	{
		return crepo.getStates();
	}
	
	public City getCity(int id)
	{
		return crepo.findById(id).get();
	}
	
	public City save(City c)
	{
		return crepo.save(c);
	}

}
