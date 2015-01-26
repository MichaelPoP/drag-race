
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
