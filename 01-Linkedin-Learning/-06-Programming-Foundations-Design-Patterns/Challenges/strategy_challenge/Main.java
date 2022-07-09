package com.edu.myPackage;

public class Main {
	public static void main(String[] args) {
		
		BasicCameraApp basic = new BasicCameraApp();
		basic.setShareBehave(new SocialShare());
		basic.share();
	}
	
}
