package com.example.projectPool.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projectPool.entity.SwimmingPool;
import com.example.projectPool.repository.SwimmingPoolRepository;

@Service
public class SwimmingPoolService {
	
	@Autowired
	private SwimmingPoolRepository swimmingPoolRepository ;
	
	public SwimmingPool save(SwimmingPool swimmingPool)
	{
		return swimmingPoolRepository.save(swimmingPool) ;
	}
	
	public Iterable<SwimmingPool> load()
	{
		return swimmingPoolRepository.findAll() ;
	}
	
}
