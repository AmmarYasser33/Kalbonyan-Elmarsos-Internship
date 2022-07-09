package com.edu.myPackage;

public class Olives extends Toppings {

	public Olives(Pizza pizza) {
		this.pizza = pizza;
	}
	
	@Override
	public String getDescription() {
		// TODO Auto-generated method stub
		return pizza.getDescription() + ", Olives";
	}

	@Override
	public double cost() {
		// TODO Auto-generated method stub
		return pizza.cost() + 0.2;
	}

}
