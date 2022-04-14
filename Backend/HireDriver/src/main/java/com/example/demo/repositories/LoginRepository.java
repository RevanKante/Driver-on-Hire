package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> 
{
	@Query("select l from Login l where email_id= :email1 and password= :password1")
	public Login checkLogin(String email1, String password1);
}
