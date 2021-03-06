package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> 
{
	@Query("select l from Login l where email_id= :email1 and password= :password1")
	public Login checkLogin(String email1, String password1);
	//@Query("select l from Login l join l.Driver d on l.user_id=d.user_id where email_id= :email1 and password= :password1")
	//public Login checkLogin(String email1, String password1);
	//SELECT pub FROM Publisher pub JOIN pub.magazines mag WHERE pub.revenue > 1000000
	//select l from login l join driver d on l.user_id=d.user_id where email_id=chinmayjadhav@gmail.com and password=Chinmay@123;

	
	@Query("select l from Login l where email_id= :email")
	public Login forgotPassword(String email);
	//@Query("select l from Login l join l.Driver d on l.user_id=d.user_id where email_id= :email1 and password= :password1")
	//public Login checkLogin(String email1, String password1);
	//SELECT pub FROM Publisher pub JOIN pub.magazines mag WHERE pub.revenue > 1000000
	//select l from login l join driver d on l.user_id=d.user_id where email_id=chinmayjadhav@gmail.com and password=Chinmay@123;
	
	@Transactional
	@Modifying
	@Query("UPDATE Login l set l.password = :pwd, l.security_que = :sec_que, l.security_ans =:Sec_ans where l.email_id = :email")
	public int updateLogin(String email, String pwd, String sec_que, String Sec_ans);
	
	@Query("select l from Login l where user_id= :id")
	public Login fetch(int id);
	
	@Query(value="select * from login where 'user_id'=?1", nativeQuery=true)
	public Login fetchUser(int id);
}
