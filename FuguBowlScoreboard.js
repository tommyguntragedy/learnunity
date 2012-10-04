#pragma strict
// just assume single-player 

var font:Font;

function OnGUI() {
	if (font) GUI.skin.font = font;
	for (var f:int=0; f<10; f++) {
		var score:String="";
		var roll1:int = FuguBowlStateMachine.players[0].scores[f].ball1;
		switch (roll1) {
			case -1: score += " "; break;
			case 10: score +="X"; break;
			default: score += roll1;
		}
		score+="/";
		if (FuguBowlStateMachine.IsSpare(f,0)) {
			score +="I";
		} else {
			var roll2:int = FuguBowlStateMachine.players[0].scores[f].ball2;
			switch (roll2) {
			case -1: score += " "; break;
			case 10: score +="X"; break;
			default: score += roll2;
			}
		}
		if (f==9) {
			score+="/";
			if (FuguBowlStateMachine.IsSpare(f,0)) {
				score +="I";
			} else {
				var roll3:int = FuguBowlStateMachine.players[0].scores[f].ball3;
				switch (roll3) {
				case -1: score += " "; break;
				default: score += roll3;
				}
			}
		}
		GUI.Label(Rect(f*30+5,5,50,20),score);
	}
}