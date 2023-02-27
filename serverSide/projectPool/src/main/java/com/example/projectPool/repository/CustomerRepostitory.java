package com.example.projectPool.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.projectPool.entity.AppUser;
import com.example.projectPool.entity.Customer;

public interface CustomerRepostitory extends CrudRepository<Customer, Integer> {

	public Customer findByAppUser(AppUser appUser);
}
