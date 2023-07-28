package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.User;
import com.example.demo.StService.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController
{
	@Autowired
	private UserService Userv;
	
	@GetMapping("/showuser")
	public  List<User> showUsers(){
		return Userv.getUser();
	}  
	
	@PostMapping("/adduser") 
	public User addUsers(@RequestBody User obj) {
		return Userv.addUser(obj);
	}	
	
	@GetMapping("/showuser/{id}")
	public Optional<User> findById(@PathVariable Long id) {
		return Userv.findById(id);
	}
	@PutMapping("/updateuser/{id}")
	public User update(@PathVariable Long id,@RequestBody User u){
		return Userv.update(id,u);
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public String removeUsers(@PathVariable Long id) {
		Userv.deleteById(id);
		return "Successfully Deleted!!";
	}
}