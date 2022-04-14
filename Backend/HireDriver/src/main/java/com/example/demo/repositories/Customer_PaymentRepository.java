package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Customer_Payment;

public interface Customer_PaymentRepository extends JpaRepository<Customer_Payment, Integer> {

}
