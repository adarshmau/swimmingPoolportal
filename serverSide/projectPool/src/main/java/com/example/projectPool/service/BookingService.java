package com.example.projectPool.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

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
		String ownerMail = swimmingPool.getUsername();
		Booking booking = new Booking();
		
		booking.setPid(bookingDTO.getPoolId());
		booking.setCustomer(customer);
		booking.setSwimmingPool(swimmingPool);
		booking.setSwimmingPoolName(swimmingPool.getTitle());
		booking.setUserEmail(ownerMail);
		booking.setCustEmail(bookingDTO.getEmail());
		booking.setDate(bookingDTO.getDate());
		booking.setTime(bookingDTO.getTime());
		booking.setQuantity(bookingDTO.getQuantity());
		
		return bookingRepository.save(booking);
	}
	
	public Iterable<Booking> load(String email)
	{
		List<Booking> booking = new ArrayList<>();
		Iterable<Booking> bookings = bookingRepository.findAll();
//		AppUser appUser = appUserService.findByEmail(email);
//		Iterable<SwimmingPool> pools = swimmingPoolService.loadPools(appUser);
		for(Booking book : bookings)
		{
			if(book.getUserEmail().equals(email))
			{
				booking.add(book);
			}
		}
		return booking;
	}
	
	public String delete(Integer id)
	{
		bookingRepository.deleteById(id);
		return "Booking deleted successfully";
	}
	
	// listing all the bookings for cutomer side.
	public Iterable<Booking> loadCustBooking(String email)
	{
		List<Booking> booking = new ArrayList<>();
		Iterable<Booking> bookings = bookingRepository.findAll();
		for(Booking book : bookings)
		{
			if(book.getCustEmail().equals(email))
			{
				booking.add(book);
			}
		}
		return booking;
	}
	//find booking by id
	public Optional<Booking> findBooking(Integer id)
	{
		return bookingRepository.findById(id);
	}

	public Booking update(BookingDTO bookingDTO) {
		AppUser appUser = appUserService.findByEmail(bookingDTO.getEmail());
		Customer customer = customerService.findByAppUser(appUser);
		Optional<SwimmingPool> sp = swimmingPoolService.findPool(bookingDTO.getPoolId());
		SwimmingPool swimmingPool = sp.get();
		String ownerMail = swimmingPool.getUsername();
		Booking booking = new Booking();
		
		booking.setPid(bookingDTO.getId());
		booking.setId(bookingDTO.getId());
		booking.setCustomer(customer);
		booking.setSwimmingPool(swimmingPool);
		booking.setSwimmingPoolName(swimmingPool.getTitle());
		booking.setUserEmail(ownerMail);
		booking.setCustEmail(bookingDTO.getEmail());
		booking.setDate(bookingDTO.getDate());
		booking.setTime(bookingDTO.getTime());
		booking.setQuantity(bookingDTO.getQuantity());
		
		return bookingRepository.save(booking);
	}
}
