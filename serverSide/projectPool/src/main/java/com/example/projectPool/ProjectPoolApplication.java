package com.example.projectPool;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.projectPool.entity.AppUser;
import com.example.projectPool.entity.SwimmingPool;
import com.example.projectPool.repository.AppUserRepository;
import com.example.projectPool.service.AppUserService;
import com.example.projectPool.service.SwimmingPoolService;

@SpringBootApplication
public class ProjectPoolApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ProjectPoolApplication.class, args);
	}

	@Autowired
	private AppUserService appUserService;

	@Autowired
	private SwimmingPoolService swimmingPoolService;

	@Override
	public void run(String... args) throws Exception {
//		AppUser appUser1 = new AppUser();
//		appUser1.setFirstName("Shivam");
//		appUser1.setLastName("Ranjan");
//		appUser1.setEmail("c@c.com");
//		appUser1.setPassword("123");
//		appUser1.setRole("customer");
//		appUser1.setMobileNumber(65656445L);
//		appUser1.setStatus(1);
//		appUserService.save(appUser1) ;
//		
//		AppUser appUser2 = new AppUser();
//		appUser2.setFirstName("Anshu");
//		appUser2.setLastName("Ranjan");
//		appUser2.setEmail("o@o.com");
//		appUser2.setPassword("123");
//		appUser2.setRole("owner");
//		appUser2.setMobileNumber(65656445L);
//		appUser2.setStatus(1);
//		appUserService.save(appUser2) ;
//
//		AppUser appUser3 = new AppUser();
//		appUser3.setFirstName("Ahu");
//		appUser3.setLastName("jan");
//		appUser3.setEmail("a@a.com");
//		appUser3.setPassword("123");
//		appUser3.setRole("owner");
//		appUser3.setMobileNumber(656445L);
//		appUser3.setStatus(1);
//		appUserService.save(appUser3) ;
//
//		
//		SwimmingPool pool = new SwimmingPool();
//		pool.setTitle("Larapool");
//		pool.setAreaName("Btm 2nd stage");
//		pool.setCountry("India");
//	
//		pool.setPinCode(847201);
//		pool.setCity("Banglore");
//		pool.setAreaName("Btm");
//		pool.setPlotNo("33main");
//		pool.setState("Karnataka");
//		pool.setStreetName("6th road");
//		pool.setUsername("o@o.com");
//		 swimmingPoolService.save(pool);
//		
//		
//		SwimmingPool pool1 = new SwimmingPool();
//		pool1.setTitle("pool");
//		pool1.setAreaName("housekhous");
//		pool1.setCountry("India");
//		pool1.setPinCode(62001);
//		pool1.setCity("Delhi");
//		pool1.setAreaName("Btm");
//		pool1.setPlotNo("33main");
//		pool1.setState("Delhi");
//		pool1.setStreetName("6th road");
//		pool1.setUsername("o@o.com");
//		 swimmingPoolService.save(pool1);
//		
//		
//		
//		SwimmingPool pool2 = new SwimmingPool();
//		pool2.setTitle("dspool");
//		pool2.setAreaName("22nd stage");
//		pool2.setCountry("India");
//
//		pool2.setPinCode(62001);
//		pool2.setCity("patna");
//		pool2.setAreaName("boringRoad");
//		pool2.setPlotNo("33main");
//		pool2.setState("Bihar");
//		pool2.setStreetName("6th road");
//		pool2.setUsername("a@a.com");
//		 swimmingPoolService.save(pool2);
//		
//	
//		SwimmingPool pool3 = new SwimmingPool();
//		pool3.setTitle("sspool");
//		pool3.setAreaName("adinath");
//		pool3.setCountry("India");
//		pool3.setPinCode(752054);
//		pool3.setCity("bhubaneswar");
//		pool3.setAreaName("mahura");
//		pool3.setPlotNo("main");
//		pool3.setState("Odisha");
//		pool3.setStreetName("6th road");
//		pool3.setUsername("a@a.com");
//		 swimmingPoolService.save(pool3);
//		
//		SwimmingPool pool4 = new SwimmingPool();
//		pool4.setTitle("ddpool");
//		pool4.setAreaName("Swastik");
//		pool4.setCountry("India");
//		pool4.setPinCode(752054);
//		pool4.setCity("bhubaneswar");
//		pool4.setAreaName("mahura");;
//		pool4.setPlotNo("33main");
//		pool4.setState("Odisha");
//		pool4.setStreetName("5th road");
//		pool4.setUsername("a@a.com");
//		 swimmingPoolService.save(pool4);
//		
		
	}
}
