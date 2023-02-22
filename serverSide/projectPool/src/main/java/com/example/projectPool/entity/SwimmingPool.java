package com.example.projectPool.entity;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class SwimmingPool {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer id ;
	private String username ;
	private String title ;
	private String plotNo ;
	private String streetName ;
	private String areaName ;
	private String city ;
	private String state ;
	private String country ;
	private int pinCode ;
	
	@ManyToOne
	@JsonIgnore
	private Owner owner ;
	
	@OneToMany(mappedBy = "swimmingPool")
	private Set<Booking> bookings = new HashSet<>() ;
}
