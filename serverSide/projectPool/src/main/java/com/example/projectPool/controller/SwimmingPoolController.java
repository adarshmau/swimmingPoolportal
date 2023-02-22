package com.example.projectPool.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projectPool.entity.SwimmingPool;
import com.example.projectPool.service.SwimmingPoolService;

@RestController
@RequestMapping("swimmingPool")
@CrossOrigin
public class SwimmingPoolController {

	@Autowired
	private SwimmingPoolService swimmingPoolService ;
	
	@PostMapping("save")
	public ResponseEntity<SwimmingPool> save(@RequestBody SwimmingPool swimmingPool)
	{
		return ResponseEntity.ok(swimmingPoolService.save(swimmingPool)) ;
	}
	
	@GetMapping
	public ResponseEntity<Iterable<SwimmingPool>> load()
	{
		return ResponseEntity.ok(swimmingPoolService.load()) ;
	}	
}
