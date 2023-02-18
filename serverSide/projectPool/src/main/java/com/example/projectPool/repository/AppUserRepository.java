package com.example.projectPool.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.projectPool.entity.AppUser;

public interface AppUserRepository extends CrudRepository<AppUser, Integer> {
	
	public AppUser findByEmail(String email) ;
	
	public AppUser findByEmailAndPassword(String email , String password) ;
	
}
