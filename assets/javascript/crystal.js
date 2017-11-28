$(document).ready(function(){
	//Random number at beginning between 19 and 120
	var Random=Math.floor(Math.random()*101+19)
	$('#randomNumber').text(Random);

	//Random numbers for crystals between 1 and 12
	var num1=Math.floor(Math.random()*11+1)
	var num2=Math.floor(Math.random()*11+1)
	var num3=Math.floor(Math.random()*11+1)
	var num4=Math.floor(Math.random()*11+1)

	//Score variables
	var userScore=0;
	var wins=0;
	var losses=0;

	$('#numberOfWins').text(wins);
	$('#numberOfLosses').text(losses);

	//Crystal clicks
	$('#red').on('click', function(){
		userScore=userScore + num1;
		console.log("New userScore=" + userScore);
		$('#totalScore').text(userScore);
			if(userScore === Random){
				win();
			}
			else if (userScore > Random){
				lose();
			}
	})


});