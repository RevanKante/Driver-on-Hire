package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.City;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {

	@Query("select c from City c where state= :state1")
	public List<City> getCities(String state1);

	@Query("select c from City c")
	public List<City> getCity();
	
	@Query("select distinct c.state from City c")
	public List<String> getStates();


}
