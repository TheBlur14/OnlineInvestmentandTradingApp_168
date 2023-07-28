package com.example.demo.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="StockDetails")
public class Stocks {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "SName")
	private String StockName;
	
	@Column(name = "Price")
	private int price;
	
	@Column(name="Track Stock Movement")
	private String tsm;
	
	public Stocks() {}

	public Stocks(Long id, String stockName, int price, String tsm) {
		super();
		this.id = id;
		this.StockName = stockName;
		this.price = price;
		this.tsm = tsm;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStockName() {
		return StockName;
	}

	public void setStockName(String stockName) {
		StockName = stockName;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getTsm() {
		return tsm;
	}

	public void setTsm(String tsm) {
		this.tsm = tsm;
	}
}
	
	
	