package com.example.projectPool.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChangePasswordDTO {
	
	private String email ;
	private String oldPassword ;
	private String newPassword ;
	private String message ;
	private boolean status ;
	
}
