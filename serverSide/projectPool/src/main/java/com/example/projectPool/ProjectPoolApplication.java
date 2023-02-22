package com.example.projectPool;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.projectPool.entity.AppUser;
import com.example.projectPool.repository.AppUserRepository;
import com.example.projectPool.service.AppUserService;

@SpringBootApplication
public class ProjectPoolApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ProjectPoolApplication.class, args);
	}
	
	
	@Autowired
	private AppUserService appUserService ;
	
	@Override
	public void run(String... args) throws Exception {
		AppUser appUser1 = new AppUser();
		appUser1.setFirstName("Shivam");
		appUser1.setLastName("Ranjan");
		appUser1.setEmail("c@c.com");
		appUser1.setPassword("123");
		appUser1.setRole("customer");
		appUser1.setMobileNumber(65656445L);
		appUser1.setStatus(1);
		appUserService.save(appUser1) ;
		
		AppUser appUser2 = new AppUser();
		appUser2.setFirstName("Anshu");
		appUser2.setLastName("Ranjan");
		appUser2.setEmail("o@o.com");
		appUser2.setPassword("123");
		appUser2.setRole("owner");
		appUser2.setMobileNumber(65656445L);
		appUser2.setStatus(1);
		appUserService.save(appUser2) ;

		AppUser appUser3 = new AppUser();
		appUser3.setFirstName("Ahu");
		appUser3.setLastName("jan");
		appUser3.setEmail("a@a.com");
		appUser3.setPassword("123");
		appUser3.setRole("owner");
		appUser3.setMobileNumber(656445L);
		appUser3.setStatus(1);
		appUserService.save(appUser3) ;
	}
}
