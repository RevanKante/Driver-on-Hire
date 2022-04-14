package com.example.demo.entities;

import java.util.Date;

public class Customer_PaymentRegister {
	
	private int booking_id;
	
	private Date cust_pay_time;

	private String amount;

	private String payment_mode;
	
	private String transaction_id;

	public Customer_PaymentRegister() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer_PaymentRegister(int booking_id, Date cust_pay_time, String amount, String payment_mode,
			String transaction_id) {
		super();
		this.booking_id = booking_id;
		this.cust_pay_time = cust_pay_time;
		this.amount = amount;
		this.payment_mode = payment_mode;
		this.transaction_id = transaction_id;
	}

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public Date getCust_pay_time() {
		return cust_pay_time;
	}

	public void setCust_pay_time(Date cust_pay_time) {
		this.cust_pay_time = cust_pay_time;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getPayment_mode() {
		return payment_mode;
	}

	public void setPayment_mode(String payment_mode) {
		this.payment_mode = payment_mode;
	}

	public String getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(String transaction_id) {
		this.transaction_id = transaction_id;
	}

}
