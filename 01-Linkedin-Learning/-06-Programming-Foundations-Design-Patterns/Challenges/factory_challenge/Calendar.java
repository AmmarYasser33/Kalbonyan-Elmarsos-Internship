package com.edu.myPackage;

public abstract class Calendar {
	Zone zone;
	
	public abstract void createCalendar();
	
	public void print() {
		System.out.println("--- " + zone.getDisplayName() + " Calendar ---");
		System.out.println("Offset from GMT: " + zone.getOffset());
	}
}
