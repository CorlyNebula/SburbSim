part of SBURBSim;


class ExileJack extends Scene{
	bool canRepeat = false;
	List<dynamic> playerList = [];  //what players are already in the medium when i trigger?

	


	ExileJack(Session session): super(session);


	@override
	dynamic trigger(playerList){
		this.playerList = playerList;
		return (!this.session.jack.exiled && this.session.jack.getStat("power") < 10) && (this.session.jack.getStat("currentHP") >  0 && this.session.jack.crowned == null);
	}
	@override
	void renderContent(div){
		div.append("<br> <img src = 'images/sceneIcons/jack_icon.png'> "+this.content());
	}
	dynamic content(){
		this.session.jack.setStat("currentHP",0); //effectively dead.
		this.session.jack.exiled = true;
		String ret = " The plan has been performed flawlessly.  Jack has been exiled to the post-Apocalyptic version of Earth before he can cause too much damage.";
		return ret;
	}

}