window.addEventListener('keyup', function(event) {

  if (event.keyCode === 32) {
    
     var racecarDiv = document.getElementById('racecar');
     var stageLightsDiv = document.getElementById('stageLights');
     var startLightsDiv = document.getElementById('startLights');
     var startLightsDiv1 = document.getElementById('startLights1');
     var startLightsDiv2 = document.getElementById('startLights2');
     var startLightsDiv3 = document.getElementById('startLights3');
     var startLightsDiv4 = document.getElementById('startLights4');
     var engineon = document.getElementById('engine');

     racecarDiv.style.left = "-10px";
     setTimeout(function () {stageLightsDiv.className += " on"}, 5000);
     setTimeout(function () {startLightsDiv.className += " on"}, 7000);
     setTimeout(function () {startLightsDiv1.className += " on"}, 8500);
     setTimeout(function () {startLightsDiv2.className += " on"}, 9500);
     setTimeout(function () {startLightsDiv3.className += " on"}, 10000);
     setTimeout(function () {startLightsDiv4.className += " on"}, 10500);
     engineon.className += " on";


      window.addEventListener('keyup', function(event) {
        if (event.keyCode === 39 || event.keyCode === 37) {
          //.style gives all the styles associated with racecarDiv in particular .left

        racecarDiv.style.left = parseInt(racecarDiv.style.left, 10) + 3 + "px";
           //console.log(racecarDiv.style.left);

         }

         //var backgroundgeton = document.getElementById('startLights4');
       

         if ((counter === 27) && (startLightsDiv4.className == "lights")) {
          track.style.background = "red";
          alert("FALSE START");
          setTimeout(function () {location.reload();}, 2000);
         }
         if (counter === 217) {
        alert("Race Over");
        racecarDiv.style.left = "-10px";
        location.reload();
        
         }  

      });
   }
});
var counter = 0;
var t0 = performance.now(); 
   
var t1 = performance.now();
console.log("Race took " + (t1 - t0) + " milliseconds."); 


window.addEventListener('keyup', function(event) {
      if (event.keyCode === 39 || event.keyCode === 37) {
        counter = counter + 1;
        console.log(counter);
      }
   });
//*********************************** TIME COUNTER ******************************************
// var counter = 0;
// var t0 = performance.now(); 
// function timer () {
// if (counter === 217) {
//   alert("Race Over");
// } 
// }    
// var t1 = performance.now();
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
