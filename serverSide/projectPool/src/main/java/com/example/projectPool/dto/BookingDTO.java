package com.example.projectPool.dto;


import java.sql.Date;
import java.sql.Time;
import java.time.format.DateTimeFormatter;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookingDTO {

	private String email;
	private Date date;
	private Integer quantity;
	private Integer poolId;
	private Time time;
	private Integer id;
	
}
