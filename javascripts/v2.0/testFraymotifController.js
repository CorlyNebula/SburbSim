var globalFraymotifCreator = new FraymotifCreator(null);
loadNavbar();
var curSessionGlobalVar;

function makeFraymotif(){
		curSessionGlobalVar = new Session(Math.seed);
		var tier = $('[name="tier"] option:selected');
		var aspects = [];
		$('#aspects :selected').each(function(i, selected){
			aspects.push($(selected).text());
		});
		//in real sim, won't be shuffled, first player will be first element
		var players = createPlayersFromAspects(aspects);
		var fraymotif = globalFraymotifCreator.makeFraymotif(shuffle(players), tier.val());
		$("#fraymotifs").append("<br>" + fraymotif);
}

function createPlayersFromAspects(aspects){
	var ret = [];
	available_classes = classes; //allow all classes again for next fraymotif.
	for(var i = 0; i< aspects.length; i++){
		ret.push(getPlayerForAspect(aspects[i]));
	}
	return ret;
}

function getPlayerForAspect(aspect){
	var ret = randomPlayer(curSessionGlobalVar)
	ret.aspect = aspect;
	return ret;
}

function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

return array;
}