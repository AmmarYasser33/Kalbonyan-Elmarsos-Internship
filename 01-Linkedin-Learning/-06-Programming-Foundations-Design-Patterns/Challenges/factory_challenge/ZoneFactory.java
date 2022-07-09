package com.edu.myPackage;

public class ZoneFactory {
	
	public Zone createZone(String zoneID) {
		Zone zone = null;
		if (zoneID == "Zone_Pacific") {
			zone = new ZoneUSPacific();
		}
		else if (zoneID == "Zone_Mountain") {
			zone = new ZoneUSMountain();
		}
		else if (zoneID == "Zone_Central") {
			zone = new ZoneUSCentral();
		}
		else if (zoneID == "Zone_Eastern") {
			zone = new ZoneUSEastern();
		}
		return zone;
	}
}
