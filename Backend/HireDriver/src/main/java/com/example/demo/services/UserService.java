package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService 
{
	@Autowired
	UserRepository urepo;
	
	public User add(User u)
	{
		return urepo.save(u);
	}
	
	public User getUser(int id)
	{
		return urepo.findById(id).get();
	}
}
