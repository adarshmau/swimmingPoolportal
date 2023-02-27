package com.example.projectPool.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projectPool.dto.BookingDTO;
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

	@GetMapping("load")
	public ResponseEntity<Iterable<Booking>> load()
	{
		return ResponseEntity.ok(bookingService.load());
	}
}
