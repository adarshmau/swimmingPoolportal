package com.example.projectPool.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Booking {
	@Id
	private Integer id;
	private Date date ;
	
	@ManyToOne
	private SwimmingPool swimmingPool ;
	
	@ManyToOne
	private Customer customer ;
}
