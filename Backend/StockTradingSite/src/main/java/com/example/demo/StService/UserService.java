package com.example.demo.StService;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.User;
import com.example.demo.MyRepo3.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo repo;

	// addEmployee
	public User addUser(User obj) {
		return repo.save(obj);
	}
	
	// getEmployee
	public List<User> getUser() {
		List<User> arr = new ArrayList<>();
		arr = repo.findAll();
		return arr;
	}
	
	//deleteById  
	public void deleteById(Long id) {
		repo.deleteById(id);
	}
	
	//getById
	public Optional<User> findById(Long id) {
		Optional<User> g = repo.findById(id);
		return g;
	}
	
	//Paging
	public List<User> showValues(){
		Pageable p=PageRequest.of(0,3);
		Page<User> c=repo.findAll(p);
		return c.toList();
	}
	
	//Sorting
	public List<User> sort(){
		return repo.findAll(Sort.by(Sort.Direction.DESC,"cost"));
	}
	
	//update
	public User update(Long id,User ur) {
	    User u= repo.findById(id).get();
		
		if(Objects.nonNull(u) && (!(Objects.isNull(ur.getName())))) {
			u.setName(ur.getName());
		}
		if(Objects.nonNull(u) && (!(Objects.isNull(ur.getEmail())))) {
			u.setEmail(ur.getEmail());
		}
		if(Objects.nonNull(u) && (!(Objects.isNull(ur.getPhoneno())))) {
			u.setPhoneno(ur.getPhoneno());
		}
		return repo.save(u);
	}
}
