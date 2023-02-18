package com.example.projectPool.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projectPool.dto.LoginDTO;
import com.example.projectPool.entity.AppUser;
import com.example.projectPool.entity.Customer;
import com.example.projectPool.entity.Owner;
import com.example.projectPool.repository.AppUserRepository;

@Service
public class AppUserService {
	
	@Autowired
	private AppUserRepository appUserRepository ;
	
	@Autowired
	private MailService mailService ; 
	
	@Autowired
	private CustomerService customerService ;
	
	@Autowired
	private OwnerService ownerService ;
	
	public AppUser save(AppUser appUser) throws Exception
	{
		appUserRepository.save(appUser) ;
		
//		String activationCode = mailService.sendEmailToVerify(appUser.getEmail()) ;				
//		appUser.setActivationCode(activationCode);
//		appUserRepository.save(appUser) ;
		
		appUser.setStatus(1);
		
		if(appUser.getRole().equals("customer"))
		{
			Customer customer = new Customer();
			customer.setAppUser(appUser);
			customerService.save(customer);
		}
		else if(appUser.getRole().equals("owner"))
		{
			Owner owner = new Owner() ;
			owner.setAppUser(appUser) ;
			ownerService.save(owner) ;
		}
		return appUser ;
	}
	
	public AppUser findByEmail(String email)
	{
		return appUserRepository.findByEmail(email);
	}
	
	public AppUser update(AppUser appUser)
	{
		return appUserRepository.save(appUser);
	}
	
	public AppUser login(LoginDTO loginDTO)
	{
		return appUserRepository.findByEmailAndPassword(loginDTO.getUsername(), loginDTO.getPassword());
	}
	
	public String resetPassword(String email , String activationCode , String password)
	{
		String message = "Activation Code is wrong " ;
		AppUser appUser = appUserRepository.findByEmail(email);
		if(appUser.getActivationCode().equals(activationCode))
		{
			appUser.setPassword(password);
			appUserRepository.save(appUser);
			message = "Password Changed SuccessFully" ;
		}
		return message ;
	}
	
}
