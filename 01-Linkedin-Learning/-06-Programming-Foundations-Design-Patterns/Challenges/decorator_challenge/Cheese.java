package com.edu.myPackage;

public class Cheese extends Toppings {
	
	public Cheese(Pizza pizza) {
		this.pizza = pizza;
	}
	
	@Override
	public String getDescription() {
		return pizza.getDescription()+ ", Cheese";
	}

	@Override
	public double cost() {
		// TODO Auto-generated method stub
		return pizza.cost() + 0.1;
	}

}
