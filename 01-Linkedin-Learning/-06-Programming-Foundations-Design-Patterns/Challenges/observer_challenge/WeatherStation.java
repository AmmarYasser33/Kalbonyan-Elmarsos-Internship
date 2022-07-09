package com.edu.myPackage;

import java.util.ArrayList;

public class WeatherStation implements Observable {
	private ArrayList<Observer> observers;
	private float temp;
	private float windSpeed;
	private float pressure;
	
	public WeatherStation() {
		this.observers = new ArrayList<Observer>();
	}

	@Override
	public void registerObserver(Observer o) {
		// TODO Auto-generated method stub
		observers.add(o);
	}

	@Override
	public void removeObserver(Observer o) {
		// TODO Auto-generated method stub
		int ind = observers.indexOf(o);
		if(ind >= 0)
			observers.remove(ind);
	}

	public void changeValues(float temp, float windSpeed, float pressure) {
		this.temp = temp;
		this.windSpeed = windSpeed;
		this.pressure = pressure;
		notifyObservers();
	}
	
	@Override
	public void notifyObservers() {
		// TODO Auto-generated method stub
		for (Observer obs : observers) {
			obs.update(temp, windSpeed, pressure);
		}
	}

	public float getTemp() {
		return temp;
	}

	public float getWindSpeed() {
		return windSpeed;
	}

	public float getPressure() {
		return pressure;
	}

}
