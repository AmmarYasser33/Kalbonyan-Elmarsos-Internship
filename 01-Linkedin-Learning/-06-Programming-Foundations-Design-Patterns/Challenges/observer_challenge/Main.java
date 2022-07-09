package com.edu.myPackage;

public class Main {
	public static void main(String[] args) {
		
		WeatherStation ws = new WeatherStation();
		UserInterface user = new UserInterface(ws);
		Logger logger = new Logger(ws);
		AlertSystem alert = new AlertSystem(ws);
		
		ws.changeValues(11, 22, 33);
		ws.changeValues(44, 55, 66);
		
		//Output
		/*
		Temperature now: 11.0 .. Wind Speed: 22.0 .. pressure:33.0
		Logging Data...
		Alert the system with new information!
		Temperature now: 44.0 .. Wind Speed: 55.0 .. pressure:66.0
		Logging Data...
		Alert the system with new information!
		*/
	}
	
}
