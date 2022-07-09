package com.edu.myPackage;

public class Peppers extends Toppings {

	public Peppers(Pizza pizza) {
		this.pizza = pizza;
	}
	
	@Override
	public String getDescription() {
		// TODO Auto-generated method stub
		return pizza.getDescription() + ", Peppers";
	}

	@Override
	public double cost() {
		// TODO Auto-generated method stub
		return pizza.cost() + 1;
	}

}
