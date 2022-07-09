package com.edu.myPackage;

public class PacificCalendar extends Calendar {
	
	public PacificCalendar(ZoneFactory zoneFactory) {
		zone = zoneFactory.createZone("Zone_Pacific");
	}
	
	@Override
	public void createCalendar() {
		// TODO Auto-generated method stub
		System.out.println("Creating the calendar");
	}

}
