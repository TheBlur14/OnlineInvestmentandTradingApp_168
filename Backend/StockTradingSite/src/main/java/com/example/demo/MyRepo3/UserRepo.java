package com.example.demo.MyRepo3;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.User;

public interface UserRepo extends JpaRepository<User, Long> {

}
