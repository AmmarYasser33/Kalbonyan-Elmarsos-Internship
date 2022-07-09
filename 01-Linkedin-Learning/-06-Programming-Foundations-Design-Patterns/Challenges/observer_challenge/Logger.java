package com.edu.myPackage;

public class Logger implements Observer {
	private float temp;
	private float windSpeed;
	private float pressure;
	private WeatherStation weatherStation;
	
	public Logger(WeatherStation weatherStation) {
		this.weatherStation = weatherStation;
		weatherStation.registerObserver(this);
	}
	
	@Override
	public void update(float temperature, float windSpeed, float pressure) {
		// TODO Auto-generated method stub
		this.temp = temperature;
		this.windSpeed = windSpeed;
		this.pressure = pressure;
		log();
	}

	private void log() {
		System.out.println("Logging Data...");
	}

}
