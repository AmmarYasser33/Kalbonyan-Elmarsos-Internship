package com.edu.myPackage;

public class Main {
	public static void main(String[] args) {
		
		ZoneFactory factory = new ZoneFactory();
		PacificCalendar calender = new PacificCalendar(factory);
		calender.createCalendar();
		calender.print();
	}
	
}
