package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	

	@Transactional
	@Modifying
	@Query("UPDATE User l set l.first_name = :fname, l.last_name = :lname, l.contact =:contact,l.state = :state, l.city =:city where l.user_id = :uid")
	public int updateUser(int uid,String fname,String lname,String contact,String state,String city);
	
}
