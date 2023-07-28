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

import com.example.demo.Entity.Stocks;
import com.example.demo.MyRepo3.StockRepo;

@Service
public class StockService {

	@Autowired
	private StockRepo repo;

	// addEmployee
	public Stocks addStock(Stocks obj) {
		return repo.save(obj);
	}
	
	// getEmployee
	public List<Stocks> getStock() {
		List<Stocks> arr = new ArrayList<>();
		arr = repo.findAll();
		return arr;
	}
	
	//deleteById  
	public void deleteById(Long id) {
		repo.deleteById(id);
	}
	
	//getById
	public Optional<Stocks> findById(Long id) {
		Optional<Stocks> g = repo.findById(id);
		return g;
	}
	
	//Paging
	public List<Stocks> showValues(){
		Pageable p=PageRequest.of(0,3);
		Page<Stocks> c=repo.findAll(p);
		return c.toList();
	}
	
	//Sorting
	public List<Stocks> sort(){
		return repo.findAll(Sort.by(Sort.Direction.DESC,"cost"));
	}
	
	//update
	public Stocks update(Long id,Stocks st) {
		Stocks s= repo.findById(id).get();
		
		if(Objects.nonNull(s) && (!(Objects.isNull(st.getStockName())))) {
			s.setStockName(st.getStockName());
		}
		if(Objects.nonNull(s) && (st.getPrice()!=0)) {
			s.setPrice(st.getPrice());
		}
		if(Objects.nonNull(s) && (!(Objects.isNull(st.getTsm())))) {
			s.setTsm(st.getTsm());
		}
		return repo.save(s);
	}
}
