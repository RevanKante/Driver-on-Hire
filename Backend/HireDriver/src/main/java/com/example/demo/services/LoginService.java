package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.repositories.LoginRepository;
import com.example.demo.repositories.UserRepository;

@Service
public class LoginService 
{
	@Autowired
	LoginRepository lrepo;
	
	@Autowired
	UserRepository urepo;
	
	public Login add(Login l)
	{
		return lrepo.save(l);
	}
	
	public Login checkLogin(String email, String Password)
	{
		Login l = lrepo.checkLogin(email, Password);
		if(l != null)
		{
			
			
			if(l.getRole().equals("customer"))
			{
				return l;
				
			}
			else if(l.getRole().equals("driver"))
			{
				//
			}
			else if(l.getRole().equals("admin"))
			{
				return l;
			}
			return l;
		}
		else 
			return null;
	}
	
	public Login forgotPassword(String email)
	{
		return lrepo.forgotPassword(email);
	}
	
	public int updateLogin(String email, String pwd, String sec_que, String Sec_ans)
	{
		return lrepo.updateLogin(email,pwd,sec_que,Sec_ans);
	}
	public Optional<Login> fetchUser(int id)
	{
		return lrepo.findById(id);
	}
}
