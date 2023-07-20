    package com.example.demo.MyRepo3;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Stocks;

public interface Repository extends JpaRepository<Stocks, Long> {

}
