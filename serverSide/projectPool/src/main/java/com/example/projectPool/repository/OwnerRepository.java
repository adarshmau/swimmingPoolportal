package com.example.projectPool.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.projectPool.entity.AppUser;
import com.example.projectPool.entity.Owner;

public interface OwnerRepository extends CrudRepository<Owner, Integer>{

	public Owner findByAppUser(AppUser appUser) ;
}
