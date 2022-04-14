package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.entities.UserRegister;
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
	
	public int updateUser(int uid, String fname,String lname,String contact,String state,String city)
	{
		return urepo.updateUser(uid,fname,lname,contact,state,city);
	}
}
