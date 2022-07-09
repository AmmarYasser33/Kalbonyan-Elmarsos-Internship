package com.edu.myPackage;

public class UserInterface implements Observer {
	private float temp;
	private float windSpeed;
	private float pressure;
	private WeatherStation weatherStation;
	
	public UserInterface(WeatherStation weatherStation) {
		this.weatherStation = weatherStation;
		weatherStation.registerObserver(this);
	}
	
	@Override
	public void update(float temperature, float windSpeed, float pressure) {
		// TODO Auto-generated method stub
		this.temp = temperature;
		this.windSpeed = windSpeed;
		this.pressure = pressure;
		display();
	}

	private void display() {
		System.out.println("Temperature now: "+temp+" .. Wind Speed: "+windSpeed+" .. pressure:"+pressure);
	}

}
