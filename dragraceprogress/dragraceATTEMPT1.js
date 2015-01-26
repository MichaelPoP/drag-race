(function() {
	
  },
  RaceTrack = function() {
 
  },
  Dragster = function() {
    // grab the car element
    this.elment = document.getElementById('racecar');
    // set the starting position of the dragster
    this.elment.style.left = "-20px";
  },
  Game = function() {
   
    this.tree = new xtree();
    
    this.track = new track();
    
    this.car = new racecar();

   

    this.attachListeners();
  

setTimeout(delay, 3000);
  var GoLights = function () {
    
    this.stageLights = document.getElementById('stageLights');
    this.startLights = document.getElementById('startLights');
 
};
  //an array that tells a light to turn on
GoLights.prototype.onLights =[];

GoLights.prototype.addToArray = function(){
   if(this.onLights.indexOf(this) === -1){
   	this.onLights.push(this);
   }

};

  GoLights.prototype.onLights = function delay() {
    for (var i = 0; i < this.length; i++) {
    	this[this.stageLights.className += " on";]
    	this[this.startLights.className += " on";]
    };
    
    
  };

  Game.prototype.attachListeners = function() {
    var self = this;
    // listen for user input, spacebar = start engine
    
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 32) {
        self.dragster.start();
      }
    });

    //listen for user input, right key = move forward
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 39) {
        self.dragster.advance();
      }
    });
    
  };

  Dragster.prototype.advance = function() {
    // this should move the car 
    this.element.style.left = parseInt(this.element.style.left, 10) + 3 + "px";
  };

  
})();


//NOTE FOR SHIFTING IDEA, create an event listener that reacts 
  //to pressing shift key so that when you press it at the right time 
  //then you increase the per pixel movement 
  //(ex: 1st gear goes from 1px per press to 2px per press)
  //might be able to use the .toggle method used in the to-do list example
  //on this page https://developer.mozilla.org/en-US/docs/Web/CSS/::before
//CODE TO MOVE THE CAR
//**************************************************************************
// var racecarDiv = document.getElementById('racecar');
//  racecarDiv.style.left = "0px";
//   window.addEventListener('keyup', function(event) {
//        if (event.keyCode === 39) {
//          racecarDiv.style.left = parseInt(racecarDiv.style.left, 10) + 10 + "px";
//          console.log(racecarDiv.style.left);
//       }
//     });
//**************************************************************************
//CODE TO TURN ON CAR AN LIGHTS (NO DELAY YET)
//  window.addEventListener('keyup', function(event) {
//  if (event.keyCode === 32) {
//    //setTimeout(stageLightsDiv, 3000);
//     var racecarDiv = document.getElementById('racecar');
//     var stageLightsDiv = document.getElementById('stageLights');
//     racecarDiv.style.left = "0px";
//     stageLightsDiv.className += " on";
  
//     window.addEventListener('keyup', function(event) {
//        if (event.keyCode === 39) {
//          //.style gives all the styles associated with racecarDiv .left
//           racecarDiv.style.left = parseInt(racecarDiv.style.left, 10) + 10 + "px";
//           //console.log(racecarDiv.style.left);
//          }
//       });
//    }
// }); 

//****************************************************************************
