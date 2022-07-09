package com.edu.myPackage;

public abstract class Pizza {
	String description = "Simple Pizza";
	
	public String getDescription() {
		return description;
	}
	
	public abstract double cost();
}
