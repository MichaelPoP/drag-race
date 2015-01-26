window.addEventListener('keyup', function(event) {
	      if (event.keyCode === 39) {
	       	//.style gives all the styles associated with racecarDiv in particular .left
	   	
	         racecarDiv.style.left = parseInt(racecarDiv.style.left, 10) + 10 + "px";
	         //console.log(racecarDiv.style.left);
         }

      });