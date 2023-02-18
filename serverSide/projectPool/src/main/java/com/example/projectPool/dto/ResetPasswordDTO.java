package com.example.projectPool.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResetPasswordDTO {

	private String email ;
	private String activationCode ;
	private String password ;
}
