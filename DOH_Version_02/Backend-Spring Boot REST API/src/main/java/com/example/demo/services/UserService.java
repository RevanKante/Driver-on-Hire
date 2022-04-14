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
	
//	public int updateProfile(UserRegister u)
//	{
////		User u = new User(user.getFirst_name(), user.getLast_name(), user.getContact(), user.getState(), user.getCity());
////		//User inserted = us.add(u);
////		Login l = new Login(user.getEmail_id(),user.getPassword(),"customer",user.getSecurity_que(),user.getSecurity_ans(),u);
////		urepo.updateProfile(null, null)
//		int status = urepo.updateProfile(u.getFirst_name(), u.getLast_name(), u.getContact(), u.getState(), u.getCity(), u.getPassword(), u.getSecurity_que(), u.getSecurity_ans(), u.getEmail_id());
//		return status;
//	}
	public int updateUser(int uid, String fname,String lname,String contact,String state,String city)
	{
		return urepo.updateUser(uid,fname,lname,contact,state,city);
	}
}
