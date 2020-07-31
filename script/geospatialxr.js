var mapLoadTime = 1000;

document.getElementById("resizeButton").addEventListener("click", function(){
  var xrcontainer = document.getElementById("xrcontainer");
  xrcontainer.classList.toggle("fullscreen");
  xrcontainer.classList.toggle("smallscreen");
});

function updateMapLocation(lat, lon, zoom=16){
	mapParams = {"lat": lat, "lon": lon, "zoom": zoom};
	var paramsJSON = JSON.stringify(mapParams);
	gameInstance.SendMessage("CitySimulatorMap", "jsSetMap", paramsJSON);

	// Iowa City Hospital
	// {"lat": 41.65714506787528, "lon":-91.54739695223219, "zoom": 16}
}


function extendMap(west, east, north, south){
	mapParams = {"west": west, "east":east, "north":north, "south":south};
	var paramsJSON = JSON.stringify(mapParams);
	gameInstance.SendMessage("CitySimulatorMap", "jsSetExtent", paramsJSON);
}


var streamSensorPOIs = {"pois": [
							{"lat": 41.65714506787528, 
								"lon": -91.54739695223219, 
								"type": "StreamSensor", 
								"content": "Stream Sensor #1 \nDepth: 5 ft."},
							{"lat": 41.6569866321176, 
								"lon": -91.5409481636539, 
								"type": "RainGauge", 
								"content": "Rain Gauge \nStage: 23 ft."},
							{"lat": 41.6529866321176, 
								"lon": -91.5449481636539, 
								"type": "Warning", 
								"content": "Flood Warning \nStage: 3 ft."},
	
		]};

function addPOI(pois){
	var paramsJSON = JSON.stringify(pois);
	gameInstance.SendMessage("CitySimulatorMap", "jsSetPOIs", paramsJSON);	
}

function useCaseTrafficDouble(){
	useCaseTraffic();
	useCaseTraffic();
}

function useCaseTraffic(){

	updateMapLocation(37.5317132, -77.4289454);

	var accidentPOIs = {"pois": [
								{"lat": 37.53275, 
									"lon": 	-77.43183, 
									"type": "Accident", 
									"height": 70,
									"content": "Accident\nInjuries: 1\nFatalities: 0"},
								{"lat": 37.5356, 
									"lon": 	-77.42537, 
									"type": "Accident", 
									"height": 70,
									"content": "Accident\nInjuries: 2\nFatalities: 0"},
								{"lat": 37.53685, 
									"lon": 	-77.42532, 
									"type": "Accident", 
									"height": 70,
									"content": "Property Damage\nInjuries: 0\nFatalities: 0"},
			]};

	var warningPOIs = {"pois": [
								{"lat": 37.532351, 
									"lon": -77.423850, 
									"type": "Warning", 
									"height": 60,
									"content": "Construction \nRoad Widening"},
		
			]};

	var radioactivePOIs = {"pois": [
								{"lat": 37.5317132, 
									"lon": -77.4289454, 
									"type": "Radioactive", 
									"height": 70,
									"content": "Dosimeter Alert \nRadiation detected"},
		
			]};

	var sensorPOIs = {"pois": [
								{"lat": 37.5315219, 
									"lon": -77.4289258, 
									"type": "SensorGeneric", 
									"height": 55,
									"content": "V Detector #3 \nVoltage: 599"},
								// {"lat": 37.5316718, 
								// 	"lon": -77.4294247, 
								// 	"type": "SensorGeneric", 
								// 	"content": "Voltage Detector #4 \nVoltage: 599.8"},		
								{"lat": 37.5318271, 
									"lon": -77.4301372, 
									"type": "SensorGeneric", 
									"height": 45,
									"content": "V Detector #5 \nVoltage: 601.5"},	
								// {"lat": 37.5319175, 
								// 	"lon": -77.4307823, 
								// 	"type": "SensorGeneric", 
								// 	"content": "Voltage Detector #6 \nVoltage: 601.5"},
								// {"lat": 37.5319983, 
								// 	"lon": -77.4312519, 
								// 	"type": "SensorGeneric", 
								// 	"height": 55,
								// 	"content": "V Detector #7 \nVoltage: 600.6"},
								{"lat": 37.532094, 
									"lon": -77.4318125, 
									"type": "SensorGeneric", 
									"height": 65,
									"content": "V Detector #8 \nVoltage: 601.5"},
								{"lat": 37.5321802, 
									"lon": -77.4323719, 
									"type": "SensorGeneric", 
									"height": 75,
									"content": "V Detector #9 \nVoltage: 599.1"},	
			]};

	setTimeout(function(){
		addPOI(accidentPOIs);
		addPOI(radioactivePOIs);
		addPOI(sensorPOIs);
		addPOI(warningPOIs);

		enableTraffic();
	}, mapLoadTime);

}

function useCaseActiveShooterDouble(){
	useCaseActiveShooter();
	useCaseActiveShooter();
}

function useCaseActiveShooter(){

	updateMapLocation(37.526889, -77.451861);

	var policePOIs = {"pois": [
								{"lat": 37.527453997298124, 
									"lon": 	-77.45388267315083, 
									"type": "Police", 
									"height": 66,
									"content": "Sgt. Ray Martinez \nShots Fired: 3\nPulse: 119 bpm\nSpO2: 95.1%"},
								{"lat": 37.527490508593274, 
									"lon": 	-77.4538472520168, 
									"type": "Police", 
									"height": 45,
									"content": "Lieut. Joe West \nShots Fired: 4\nPulse: 109 bpm\nSpO2: 95.8%"},
			]};

	var shootingPOIs = {"pois": [
								{"lat": 37.5274504, 
									"lon": -77.45391, 
									"type": "Shooting", 
									"height": 80,
									"content": "Firearm Activity \nMultiple gunshots"},
		
			]};

	var unknownPOIs = {"pois": [
								{"lat": 37.524674,
									"lon": -77.455705, 
									"type": "Unknownpackage", 
									"height": 60,
									"content": "Suspicious Object \nSuspected Explosive"},
		
			]};

	var warningPOIs = {"pois": [
								{"lat": 37.525472,  
									"lon": -77.447247,
									"type": "Warning", 
									"height": 70,
									"content": "Dispatch \nTheft"},
								{"lat": 37.522268, 
									"lon": -77.448197, 
									"type": "Warning", 
									"height": 60,
									"content": "Dispatch \nTrespass"},
		
			]};

	setTimeout(function(){
		addPOI(policePOIs);
		addPOI(shootingPOIs);
		addPOI(unknownPOIs);
		addPOI(warningPOIs);

		enableTraffic();
	}, mapLoadTime);

}

function useCaseFloodDouble(){
	useCaseFlood();
	useCaseFlood();
}

function useCaseFlood(){

	// iowa city - iihr
	updateMapLocation(41.656723, -91.541021);
	//41.650825, -91.538054 - mcdonalds
	
	extendMap(1,1,1,2);



	// update depth value for damage values
	var stageSensorPOIs = {"pois": [
								{"lat": 41.656723,
									"lon": 	-91.541021,
									"type": "Sensor",
									"height": 85,
									"content": "Stream Gauge\nHeight: 17 ft 4 in\nDischarge: 8,370 ft3/s\nReported: 7/13/20 - 15:00 CDT"},
			]};

	var variousSensorsPOIs = {"pois": [
								{"lat": 41.656920,
									"lon": 	-91.541078,
									"type": "RainGauge", 
									"height": 70,
									"content": "Rain Gauge\nLast Reading: 0.4 in/hr"},
								{"lat": 41.651573, 
									"lon": 	-91.543518,
									"type": "Soil", 
									"height": 70,
									"content": "Hydro Station\nGroundwater Temp: 90.1 F\nSoil Moisture: 19% at 20 inches\nWind: 6 mph from SE"},
		
			]};

	var buildingPOIs = {"pois": [
								{"lat": 41.651668, 
									"lon": -91.539111, 
									"type": "Damage", 
									"height": 70,
									"content": "Damage Estimate \nLinder Tire Service\nStructure Damage: $58,954\nContent Damage: $170,310"},
								// {"lat": 41.651668, 
								// 	"lon": -91.539111, 
								// 	"type": "Damage", 
								// 	"height": 80,
								// 	"content": "Damage Estimate \nDairy Queen\nStructure Damage: $801\nContent Damage: $1,602"},
								{"lat": 41.655218,
									"lon": -91.539070, 
									"type": "Damage", 
									"height": 80,
									"content": "Damage Estimate \nFleet Services - Lot 64\nStructure Damage: 9%\nContent Damage: 26%"},
		
			]};

	addPOI(stageSensorPOIs);
	addPOI(variousSensorsPOIs);
	addPOI(buildingPOIs);


	setTimeout(function(){
		generateFlood();
		adjustFlood(1.2);
		gameInstance.SendMessage("CitySimulatorMap", "jsSetLayerInactive", "Water");

		enableTraffic();
	}, mapLoadTime);

}

function useCaseFireDouble(){
	useCaseFire();
	useCaseFire();
}

function useCaseFire(){

	updateMapLocation(32.380616, -110.953647);
	//
	//32.378172, -110.948663

	var firePOIs = {"pois": [
								{"lat": 32.378172,
									"lon": 	-110.948663,
									"type": "N/A",
									"height": 0,
									"content": ""},
			]};

	var fireDataPOIs = {"pois": [
								{"lat": 32.378172,
									"lon": 	-110.948663,
									"type": "FireData",
									"height": 205,
									"content": "Wildfire at Bighorn\nCause: Lightning\nFuels Involved: Grass/Brush"},
			]};

	var smokePOIs = {"pois": [
								{"lat": 32.378398, 
									"lon": 	-110.953461,
									"type": "SensorGeneric",
									"height": 205,
									"content": "Air Quality Sensor\nO2: 18.5%\nCO: 36.4 ppm\nHCN: 5.3 ppm\nLel: 82.2%\nParticles: 230 mg/m3"},
			]};

	var spottedPeoplePOIs = {"pois": [
								{"lat": 32.379904, 
									"lon": 	-110.947419,
									"type": "SensorGeneric",
									"height": 215,
									"content": "Stranded People \nGroup of 6"},
			]};

	var firemanPOIs = {"pois": [
								{"lat": 32.379030, 
									"lon": 	-110.950414, 
									"type": "Fireman", 
									"height": 200,
									"content": "Firefighter Corey Perry \nPulse: 119 bpm\nSpO2: 95.1%"},
								{"lat": 32.379328, 
									"lon": 	-110.950848, 
									"type": "Fireman", 
									"height": 220,
									"content": "Fire Chief Sarah Allen \nPulse: 109 bpm\nSpO2: 95.8%"},
			]};

	setTimeout(function(){
		generateFire(firePOIs);
		addPOI(fireDataPOIs);
		addPOI(smokePOIs);
		addPOI(firemanPOIs);
		addPOI(spottedPeoplePOIs);
		enableTraffic();
	}, mapLoadTime);
}

function enableTraffic(){
	gameInstance.SendMessage("CitySimulatorMap", "jsEnableTraffic", "all");	
}

function generateFlood(){
	gameInstance.SendMessage("CitySimulatorMap", "jsGenerateFlood", "");	
}

function generateFire(poiJSON){
	var paramsJSON = JSON.stringify(poiJSON);
	gameInstance.SendMessage("CitySimulatorMap", "jsSetFire", paramsJSON);	
}

function adjustFlood(level){
	mapParams = {"floodLevel": level};
	var paramsJSON = JSON.stringify(mapParams);
	gameInstance.SendMessage("CitySimulatorMap", "jsAdjustFlood", paramsJSON);
}

function setUserName(){
	gameInstance.SendMessage("CameraMain", "jsSetProfile", "Yusuf Sermet");	
}