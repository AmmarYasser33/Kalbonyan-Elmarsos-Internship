package com.edu.myPackage;

public class Main {
	public static void main(String[] args) {
		
		Pizza piz = new ThincrustPizza();
		Pizza piz2 = new Cheese(piz);
		Pizza piz3 = new Peppers(piz2);
		
		System.out.println(piz3.getDescription()+" : "+piz3.cost()+"$");
	}
	
}
