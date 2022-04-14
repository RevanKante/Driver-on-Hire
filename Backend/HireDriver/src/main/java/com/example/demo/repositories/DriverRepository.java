package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Driver;
 
@Repository
public interface DriverRepository extends JpaRepository<Driver, Integer> 
{
	@Query(value = "select * from login l inner join drivers d on l.user_id=d.user_id inner join users u on l.user_id=u.user_id where email_id= :email1  and password= :password1", nativeQuery = true)
	public Driver checkDriver(String email1, String password1);
}
