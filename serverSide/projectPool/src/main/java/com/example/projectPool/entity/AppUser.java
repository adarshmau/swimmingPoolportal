package com.example.projectPool.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class AppUser {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer id ;
	private String firstName ;
	private String lastName ;
	private Long mobileNumber ;	
	@Column(unique = true)
	private String email ;
	private String password ;
	private String activationCode ;
	private String role ;
	private int status = 0 ; 
	
}
