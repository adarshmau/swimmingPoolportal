package com.example.projectPool.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.projectPool.entity.Booking;

public interface BookingRepository extends CrudRepository<Booking, Integer> {

}
