package com.example.projectPool.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projectPool.entity.Owner;
import com.example.projectPool.repository.OwnerRepository;

@Service
public class OwnerService {
	
	@Autowired
	private OwnerRepository ownerRepository ;
	
	public Owner save(Owner owner)
	{
		return ownerRepository.save(owner) ;
	}
	
	
}
