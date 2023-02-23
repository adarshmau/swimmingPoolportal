package com.example.projectPool.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.projectPool.entity.Owner;
import com.example.projectPool.entity.SwimmingPool;

public interface SwimmingPoolRepository extends CrudRepository<SwimmingPool , Integer>{
	
	public SwimmingPool findByTitle(String title) ;
	public Iterable<SwimmingPool> findByOwner(Owner owner);
	
}
