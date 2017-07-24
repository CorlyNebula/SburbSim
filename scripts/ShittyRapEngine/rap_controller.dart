import '../SBURBSim.dart';
import "dart:html";

//stay fresh, don't repeat rhymes.

num player1Score = 0;
num player2Score = 0;

//would be so dope to rap about what's happened in the session.
//could read session summary?
//worry about this LATER, and definitely not in this stand alone page.
//for now, rap about your own interests.
main() {
		//Math.seed = 612;
		var player1 = randomPlayerWithClaspect(new Session(83475), "Witch", "Time" );
		player1.chatHandle = "squareWave";
		player1.quirk = randomTrollSim(player1);
		var player2 = randomPlayerWithClaspect(new Session(83475), "Mage", "Space" );//why was it so hard to not type 'ace of space'???;
		player2.chatHandle = "sawTooth";
		player2.quirk = randomHumanSim(player2);
		//player2.interest1 = "Programming";
		//player2.interest2 = "Writing";
		rap(1,player1);
		rap(2,player2);
		rap(1,player1);
		rap(2,player2);
		rap(1,player1);
		rap(2,player2);
		querySelector("#score").innerHtml = "Player1: $player1Score Player2: $player2Score";

}

void rap(playerNum, player){
	//Math.seed =  getRandomSeed();

	//print("Rapping about: " + interest);

	var chosenRapTemplate = getRandomElementFromArray(rapTemplates);

	var raps = chosenRapTemplate.getRapLineForPlayer(player);
	var str = raps[0];
	var firstWord = raps[1];
	var secondWord = raps[2];
	if(playerNum==1){
			rapper1Line(str);
	}else{
			rapper2Line(str);
	}

	if(firstWord && secondWord && firstWord != secondWord){
		if(playerNum==1){
				player1Score ++;
				rap(1,player); //keep going till you can't
				return;
		}else{
				player2Score ++;
				rap(2,player); //keep going till you can't.
				return;
		}
	}else{
		//give up
	}


	//TODO, KEEP GOING UNTIL HIT MAX LINES OR NO RHYME (HEY, THAT RHYMED)
	//give up if either word is null or if they match.
}






//red text
void rapper1Line(line){
	querySelector("#rap").appendHtml("<font color='red'>"+line+"</font><br>");
}



//blue text
void rapper2Line(line){
	querySelector("#rap").appendHtml("<font color='blue'>"+line+"</font><br>");
}