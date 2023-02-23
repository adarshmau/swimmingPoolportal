package com.example.projectPool.dto;

import java.util.HashSet;
import java.util.Set;

import com.example.projectPool.entity.SwimmingPool;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SwimmingPoolDTO {
	private boolean status;
	private String message;
	
	private Iterable<SwimmingPool> pools;
}
