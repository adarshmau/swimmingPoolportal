package com.example.projectPool.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projectPool.dto.LoginDTO;
import com.example.projectPool.entity.AppUser;
import com.example.projectPool.service.AppUserService;

@RestController
@RequestMapping("admin")
@CrossOrigin
public class AdminController {
	
	@Autowired
	private AppUserService appUserService ;
	
	@PostMapping("login")
	public ResponseEntity<LoginDTO> login(@RequestBody LoginDTO loginDTO)
	{
		AppUser appUser = appUserService.login(loginDTO) ; 
		
		if(appUser == null) {
			loginDTO.setStatus("Login Failed , Username not found");
		}
		else 
		{
			loginDTO.setStatus("Login Success");
			loginDTO.setRole(appUser.getRole());
			if(appUser.getStatus() == 0)
			{
				loginDTO.setStatus("Please Activate Your Email Before LoggingIn");
			}
		}
		return ResponseEntity.ok(loginDTO);
	}
}