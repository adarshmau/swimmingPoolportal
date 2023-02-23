package com.example.projectPool.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.projectPool.entity.Owner;
import com.example.projectPool.entity.SwimmingPool;

public interface SwimmingPoolRepository extends CrudRepository<SwimmingPool , Integer>{
	
	public Iterable<SwimmingPool> findAllByTitleLike(String title) ;
	public Iterable<SwimmingPool> findByOwner(Owner owner);
	public Iterable<SwimmingPool> findAllByCityLikeAndStateLikeAndCountryLike(String city , String state , String country) ;
	
}
