package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer_Payment;
import com.example.demo.repositories.Customer_PaymentRepository;

@Service
public class Customer_PaymentService {
	
	@Autowired
	Customer_PaymentRepository c_paymentrepo;

	public Customer_Payment save(Customer_Payment cp)
	{
		return c_paymentrepo.save(cp);
	}
}
