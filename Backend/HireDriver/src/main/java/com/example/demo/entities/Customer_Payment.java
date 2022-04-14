package com.example.demo.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "customer_payments")
public class Customer_Payment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int payment_id ;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "booking_id")
	private Booking booking_id;
	
	@Column
	private Date cust_pay_time;
	
	@Column
	private String amount;
	
	@Column
	private String payment_mode;
	
	@Column
	private String transaction_id;

	public Customer_Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer_Payment(int payment_id, Booking booking_id, Date cust_pay_time, String amount, String payment_mode,
			String transaction_id) {
		super();
		this.payment_id = payment_id;
		this.booking_id = booking_id;
		this.cust_pay_time = cust_pay_time;
		this.amount = amount;
		this.payment_mode = payment_mode;
		this.transaction_id = transaction_id;
	}

	public Customer_Payment(Booking b, Date cust_pay_time, String amount, String payment_mode,
			String transaction_id) {
		super();
		this.booking_id = b;
		this.cust_pay_time = cust_pay_time;
		this.amount = amount;
		this.payment_mode = payment_mode;
		this.transaction_id = transaction_id;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public Booking getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(Booking booking_id) {
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
