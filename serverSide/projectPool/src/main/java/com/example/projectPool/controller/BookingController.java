package com.example.projectPool.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projectPool.dto.BookingDTO;
import com.example.projectPool.dto.DeletedBookingDTO;
import com.example.projectPool.entity.Booking;
import com.example.projectPool.service.BookingService;

@RestController
@RequestMapping("booking")
@CrossOrigin
public class BookingController {

	@Autowired
	private BookingService bookingService;;

	@PostMapping("save")
	public ResponseEntity<Booking> save(@RequestBody BookingDTO bookingDTO)
	{
		return ResponseEntity.ok(bookingService.save(bookingDTO));
	}

	//LOAD ALL THE bookings for owner
	@GetMapping("load/{email}")
	public ResponseEntity<Iterable<Booking>> load(@PathVariable String email)
	{
		return ResponseEntity.ok(bookingService.load(email));
	}

	@DeleteMapping("delete/{id}")
	public ResponseEntity<DeletedBookingDTO> delete(@PathVariable Integer id)
	{
		DeletedBookingDTO deletedBookingDTO = new DeletedBookingDTO();
		deletedBookingDTO.setMessage("Booking not deleted.");
		deletedBookingDTO.setStatus(false);
		String s = bookingService.delete(id);
		if(s.equals("Booking deleted successfully"))
		{
			deletedBookingDTO.setMessage("Booking deleted successfully");
			deletedBookingDTO.setStatus(true);
		}

		return ResponseEntity.ok(deletedBookingDTO);
	}
	
	//loading pools for customer
	@GetMapping("loadCustBooking/{email}")
	public ResponseEntity<Iterable<Booking>> loadCustBooking(@PathVariable String email)
	{
		return ResponseEntity.ok(bookingService.loadCustBooking(email));
	}
	
	//find pool by by id
	@GetMapping("findBooking/{id}")
	public ResponseEntity<Optional<Booking>> findBooking(@PathVariable Integer id)
	{
		return ResponseEntity.ok(bookingService.findBooking(id));
	}
	
	//updating the booking
	@PostMapping("update")
	public ResponseEntity<Booking> update(@RequestBody BookingDTO bookingDTO)
	{
		return ResponseEntity.ok(bookingService.update(bookingDTO));
	}
}
