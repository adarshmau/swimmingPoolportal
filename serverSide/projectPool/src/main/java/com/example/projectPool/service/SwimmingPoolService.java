package com.example.projectPool.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projectPool.entity.AppUser;
import com.example.projectPool.entity.Owner;
import com.example.projectPool.entity.SwimmingPool;
import com.example.projectPool.repository.AppUserRepository;
import com.example.projectPool.repository.OwnerRepository;
import com.example.projectPool.repository.SwimmingPoolRepository;

@Service
public class SwimmingPoolService {
	
	@Autowired
	private SwimmingPoolRepository swimmingPoolRepository ;
	
	@Autowired
	private AppUserRepository appUserRepository ;
	
	@Autowired
	private OwnerRepository ownerRepository ;
	
	public SwimmingPool save(SwimmingPool swimmingPool)
	{
		AppUser appUser = appUserRepository.findByEmail(swimmingPool.getUsername()) ;	
		Owner owner = ownerRepository.findByAppUser(appUser);
		swimmingPool.setOwner(owner);
		return swimmingPoolRepository.save(swimmingPool) ;
	}
	
	public Iterable<SwimmingPool> load(String username)
	{
		AppUser appUser = appUserRepository.findByEmail(username) ;	
		Owner owner = ownerRepository.findByAppUser(appUser);
		return swimmingPoolRepository.findByOwner(owner) ;
	}
	
	public Optional<SwimmingPool> findPool(Integer id)
	{
		return swimmingPoolRepository.findById(id) ;
	}
	
	public SwimmingPool findByTitle(String title)
	{
		return swimmingPoolRepository.findByTitle(title);
	}
}
