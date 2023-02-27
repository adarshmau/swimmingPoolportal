package com.example.projectPool.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projectPool.dto.BookingDTO;
import com.example.projectPool.entity.AppUser;
import com.example.projectPool.entity.Booking;
import com.example.projectPool.entity.Customer;
import com.example.projectPool.entity.SwimmingPool;
import com.example.projectPool.repository.BookingRepository;

@Service
public class BookingService {

	@Autowired
	private BookingRepository bookingRepository;
	
	@Autowired
	private AppUserService appUserService;
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private SwimmingPoolService swimmingPoolService;
	
	public Booking save(BookingDTO bookingDTO)
	{
		AppUser appUser = appUserService.findByEmail(bookingDTO.getEmail());
		Customer customer = customerService.findByAppUser(appUser);
		Optional<SwimmingPool> sp = swimmingPoolService.findPool(bookingDTO.getPoolId());
		SwimmingPool swimmingPool = sp.get();
		Booking booking = new Booking();
		
		booking.setCustomer(customer);
		booking.setSwimmingPool(swimmingPool);
		booking.setDate(bookingDTO.getDate());
		booking.setTime(bookingDTO.getTime());
		booking.setQuantity(bookingDTO.getQuantity());
		
		return bookingRepository.save(booking);
	}
	
	public Iterable<Booking> load()
	{
		return bookingRepository.findAll();
	}
}
