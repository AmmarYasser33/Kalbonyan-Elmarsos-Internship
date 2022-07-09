package com.edu.myPackage;

public abstract class PhoneCameraApp {
	
	ShareBehavior shareBehave;
	public void setShareBehave(ShareBehavior shareBehavior) {
		this.shareBehave = shareBehavior;
	}
	public void share() {
		shareBehave.share();
	}
	abstract void edit();
	public void take() {
		System.out.println("taking a pic");
	}
	public void save() {
		System.out.println("saving a pic");
	}
}
