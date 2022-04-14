package com.example.demo.controllers;

import java.sql.Date;
import java.text.ParseException;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Customer_Payment;
import com.example.demo.entities.Customer_PaymentRegister;
import com.example.demo.services.BookingService;
import com.example.demo.services.Customer_PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Customer_PaymentController {
	
	@Autowired
	Customer_PaymentService c_paymentservice;
	
	@Autowired
	BookingService bs;
	
	@PostMapping("/generatepayment")
	public Customer_Payment generatebooking(@RequestBody Customer_PaymentRegister cp) throws ParseException 
	{
		Booking b = bs.getBookings(cp.getBooking_id());
		
		Date cust_pay_time = new Date((Calendar.getInstance().getTimeInMillis())+19800000);
		System.out.println(cust_pay_time);
		
		Customer_Payment payment = new Customer_Payment(b,cust_pay_time,cp.getAmount(),"offline",cp.getTransaction_id());
		
		return c_paymentservice.save(payment);		
	}	

}
