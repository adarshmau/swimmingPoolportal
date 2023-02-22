package com.example.projectPool.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Owner {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer id ;
	
	@OneToOne
	private AppUser appUser ;
	
	@OneToMany(mappedBy = "owner")
	private Set<SwimmingPool> swimmingPool = new HashSet<>() ;
}
