package com.edu.myPackage;

public class AlertSystem implements Observer {
	private float temp;
	private float windSpeed;
	private float pressure;
	private WeatherStation weatherStation;
	
	public AlertSystem(WeatherStation weatherStation) {
		this.weatherStation = weatherStation;
		weatherStation.registerObserver(this);
	}
	
	@Override
	public void update(float temperature, float windSpeed, float pressure) {
		// TODO Auto-generated method stub
		this.temp = temperature;
		this.windSpeed = windSpeed;
		this.pressure = pressure;
		alert();
	}

	private void alert() {
		System.out.println("Alert the system with new information!");
	}
}
