elements = $("startLights", "startLights1", "startLights2", "startLights3", "startLights4");
		   duration = 250,
         delayTime = 1000,
		   intervalId = setInterval(function () {
		   	$(elements.forEach(className += " on"(duration));
            if (elements.length === 0) {
            	clearInterval(intervalId);
            }
		   }, delayTime);

//*************************************************************************


 //ATTEMPT 2 
	 var timer = setInterval(wait, 2000); 
          function wait() {
           }
	   var lightIds = ["startLights", "startLights1", "startLights2", "startLights3", "startLights4"]; 
	   (div).each(function (lightup) {

	      document.getElementById("lightup").className += " on";
	      
      });

//***************************************************************************
	              
	   setTimeout(function () {countdown.className += " on"}, 3000);
	   setTimeout(function () {countdown.className += " on"}, 4000);
	   setTimeout(function () {countdown.className += " on"}, 5000);
	   setTimeout(function () {countdown.className += " on"}, 6000);
	   setTimeout(function () {countdown.className += " on"}, 7000);
	   setTimeout(function () {countdown.className += " on"}, 8000);

//***************************************************************************

var intervalId = setInterval(lightsOn, 3000);      
   function lightsOn(){    
	    var elements = document.getElementsByClassName("lights");
	    for (var i = 0; i < elements.length; i++) {
	        elements[i].className += " on";
	    }
	     
	    if(lights.length < 6){
	         clearInterval(intervalId);
    }
}

//SINGLE INTERVAL SET!
setInterval(function() {
	var countdown = document.getElementsByClassName('lights');
		   
		   for (var i = 0; i < countdown.length; i++) {
		   	countdown[i].className += " on";

	      }
}, 3000);








//WORKING LIGHTS NO INTERVAL **********************************
// var countdown = document.getElementsByClassName('lights');
		   
// 		   for (var i = 0; i < countdown.length; i++) {
// 		   	countdown[i].className += " on";
// 	      }
//*************************************************************