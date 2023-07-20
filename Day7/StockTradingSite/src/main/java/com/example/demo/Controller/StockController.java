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

import com.example.demo.Entity.Stocks;
import com.example.demo.StService.StockService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StockController
{
	@Autowired
	private StockService Sserv;
	
	@GetMapping("/show")
	public  List<Stocks> showStocks(){
		return Sserv.getStock();
	}  
	
	@GetMapping("/show/{id}")
	public Optional<Stocks> findById(@PathVariable Long id) {
		return Sserv.findById(id);
	}
	
	@PostMapping("/add") 
	public Stocks addStocks(@RequestBody Stocks obj) {
		return Sserv.addStock(obj);
	}	
	
	@PutMapping("/update/{id}")
	public Stocks update(@PathVariable Long id,@RequestBody Stocks st){
		return Sserv.update(id,st);
	}
	
	@DeleteMapping("/delete/{id}")
	public String removeStocks(@PathVariable Long id) {
		Sserv.deleteById(id);
		return "Successfully Deleted!!";
	}
	@GetMapping("/display")
	public List<Stocks> show(){
		return Sserv.showValues();
	}  
	@GetMapping("/displayit")
	public List<Stocks> sort(){
		return Sserv.sort();
	}
}