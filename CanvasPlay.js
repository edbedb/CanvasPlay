var thewidth=600, theheight=600;
var theboard = [0,0,0,0,0,0,0,0,0]
var game_over = false;

window.addEventListener('load',eventWindowLoaded,false);
			
function eventWindowLoaded() {
	canvasApp();
}

function canvasApp() {
	var mouseX, mouseY;
	var x_move = true;
	var theCanvas=document.getElementById("canvas");
	var context = theCanvas.getContext("2d");
	
	theCanvas.addEventListener("mousemove",onMouseMove, false);
	theCanvas.addEventListener("click",onMouseClick, false);
	
	function onMouseMove(e) {
		mouseX = e.clientX-theCanvas.offsetLeft;
		mouseY = e.clientY-theCanvas.offsetTop;
	}
	
	function onMouseClick(e){
		if (game_over == false){
			var thesect = whichsector(mouseX, mouseY);
			if (x_move){
				if (drawLetter("X",thesect)) {
					x_move = false;
					if (checkwin()) game_over = true;
					//if (checkwin()) { alert("HERE2"); game_over = true;}
				}
			}
			else {
				if (drawLetter("O",thesect)) {
					x_move=true;
					if (checkwin()) game_over = true;
				}
			}
		}
	}
	
	drawScreen();
	
	function checkwin() {
		if (theboard[0] != 0 && theboard[0] == theboard[1] && theboard[0] == theboard[2]) {
			context.beginPath();
			context.strokeStyle = "green";
			context.lineWidth=5;
			context.moveTo(0,theheight/6);
			context.lineTo(thewidth,theheight/6);
			context.stroke();
			context.closePath();
			return true;
		}
		else if (theboard[3] != 0 && theboard[3] == theboard[4] && theboard[3] == theboard[5]) {
			context.beginPath();
			context.strokeStyle = "green";
			context.lineWidth=5;
			context.moveTo(0,theheight/2);
			context.lineTo(thewidth,theheight/2);
			context.stroke();
			context.closePath();
			return true;
		}
		else if (theboard[6] != 0 && theboard[6] == theboard[7] && theboard[6] == theboard[8]) {
			context.beginPath();
			context.strokeStyle = "green";
			context.lineWidth=5;
			context.moveTo(0,theheight/6*5);
			context.lineTo(thewidth,theheight/6*5);
			context.stroke();
			context.closePath();
			return true;
		}
		else if (theboard[0] != 0 && theboard[0] == theboard[3] && theboard[0] == theboard[6]) {
			context.beginPath();
			context.strokeStyle = "green";
			context.lineWidth=5;
			context.moveTo(thewidth/6,0);
			context.lineTo(thewidth/6,theheight);
			context.stroke();
			context.closePath();
			return true;
		}
		else if (theboard[1] != 0 && theboard[1] == theboard[4] && theboard[1] == theboard[7]) {
			context.beginPath();
			context.strokeStyle = "green";
			context.lineWidth=5;
			context.moveTo(thewidth/2,0);
			context.lineTo(thewidth/2,theheight);
			context.stroke();
			context.closePath();
			return true;
		}
		else if (theboard[2] != 0 && theboard[2] == theboard[5] && theboard[2] == theboard[8]) {
			context.beginPath();
			context.strokeStyle = "green";
			context.lineWidth=5;
			context.moveTo(thewidth/6*5,0);
			context.lineTo(thewidth/6*5,theheight);
			context.stroke();
			context.closePath();
			return true;
		}
		else if (theboard[0] != 0 && theboard[0] == theboard[4] && theboard[0] == theboard[8]) {
			context.beginPath();
			context.strokeStyle = "green";
			context.lineWidth=5;
			context.moveTo(0,0);
			context.lineTo(thewidth,theheight);
			context.stroke();
			context.closePath();
			return true;
		}
		else if (theboard[2] != 0 && theboard[2] == theboard[4] && theboard[2] == theboard[6]) {
			context.beginPath();
			context.strokeStyle = "green";
			context.lineWidth=5;
			context.moveTo(thewidth,0);
			context.lineTo(0,theheight);
			context.stroke();
			context.closePath();
			return true;
		}
		else return false;
	}
	
	function whichsector (x,y) { // TO DO: make this more efficient
		if (x< thewidth/3){  // 1,4,7
			if (y< theheight/3) { //1
				return 1;
			}
			else if (y< theheight*2/3){//4
				return 4;
			}
			else { //7
				return 7;
			}
		}
		else if (x < thewidth*2/3){ // 2,5,8
			if (y< theheight/3) { //2
				return 2;
			}
			else if (y< theheight*2/3){//5
				return 5;
			}
			else { //8
				return 8;
			}
		}
		else{ // 3,6,9
			if (y< theheight/3) { //3
				return 3;
			}
			else if (y< theheight*2/3){//6
				return 6;
			}
			else { //9
				return 9;
			}
		}
	}
	
	function drawBoard() {

		context.strokeStyle = "black";
		context.lineWidth=5;
		context.beginPath();
		context.moveTo(0,theheight/3);
		context.lineTo(thewidth,theheight/3);
		context.stroke();
		context.moveTo(0,theheight/3*2);
		context.lineTo(thewidth,theheight/3*2);
		context.stroke();
		context.moveTo(thewidth/3,0);
		context.lineTo(thewidth/3,theheight);
		context.stroke();
		context.moveTo(thewidth/3*2,0);
		context.lineTo(thewidth/3*2,theheight);
		context.stroke();
		context.endPath();
		
	}
	function drawLetter(theletter, theregion) {
		context.font = "100px serif";
		context.fillStyle = "#505050";
		context.textAlign = "center";
		context.textBaseline = "middle";
		if (theboard[theregion-1] != 0) return false;
		else {
			theboard[theregion-1] = theletter;
			switch (theregion){
				case 1:
					context.fillText(theletter,thewidth/6, theheight/6);
					break;
				case 2:
					context.fillText(theletter,thewidth/2, theheight/6);
					break;
				case 3:
					context.fillText(theletter,thewidth/6*5, theheight/6);
					break;
				case 4:
					context.fillText(theletter,thewidth/6, theheight/2);
					break;
				case 5:
					context.fillText(theletter,thewidth/2, theheight/2);
					break;
				case 6:
					context.fillText(theletter,thewidth/6*5, theheight/2);
					break;
				case 7:
					context.fillText(theletter,thewidth/6, theheight/6*5);
					break;
				case 8:
					context.fillText(theletter,thewidth/2, theheight/6*5);
					break;
				case 9:
					context.fillText(theletter,thewidth/6*5, theheight/6*5);
					break;
			}
			return true;
		}
	}
	
	function drawScreen() {
		drawBoard();
		//drawLetter();
		//context.endPath();
		
	}
}