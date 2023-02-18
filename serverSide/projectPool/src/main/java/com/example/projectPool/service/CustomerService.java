package com.example.projectPool.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projectPool.entity.Customer;
import com.example.projectPool.repository.CustomerRepostitory;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepostitory customerRepostitory ;
	
	public Customer save(Customer customer)
	{
		return customerRepostitory.save(customer);
	}
	
}
