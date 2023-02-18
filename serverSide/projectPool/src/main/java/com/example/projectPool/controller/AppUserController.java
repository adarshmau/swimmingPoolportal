package com.example.projectPool.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projectPool.entity.AppUser;
import com.example.projectPool.repository.AppUserRepository;
import com.example.projectPool.service.AppUserService;

@RestController
@RequestMapping("appUser")
@CrossOrigin
public class AppUserController {
	
	@Autowired
	private AppUserService appUserService ;
	
	@PostMapping("signup")
	public ResponseEntity<AppUser> signUp(@RequestBody AppUser appUser) throws Exception
	{
		return ResponseEntity.ok(appUserService.save(appUser)) ;
	}
	
//  http://localhost:9090/verification/email/singhlovish803@gmail.com/activationCode/1VTOvOVMEY24P1cy6PYK7F7qNiCbd6
	
	@GetMapping("/verification/email/{email}/activationCode/{activationCode}")
	public ResponseEntity<String> verifyEmail(@PathVariable String email , @PathVariable String activationCode )
	{
		String status = "Email Not Verified" ;
		AppUser appUser = appUserService.findByEmail(email);
		
		if(appUser.getActivationCode().equals(activationCode))
		{
			appUser.setStatus(1) ;
			appUserService.update(appUser);
			status = "Email Verified Succesfully";
		}
		return ResponseEntity.ok(status) ;
	}	
}
