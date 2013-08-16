var width=500, height=500;
window.addEventListener('load',eventWindowLoaded,false);
			
function eventWindowLoaded() {
	canvasApp();
}

function canvasApp() {
	var theCanvas=document.getElementById("canvas");
	var context = theCanvas.getContext("2d");
		
	drawScreen();
			
	function drawBoard() {
		context.strokeStyle = "black";
		context.lineWidth=5;
		context.beginPath();
		context.moveTo(0,500/3);
		context.lineTo(500,500/3);
		context.stroke();
		context.moveTo(0,500/3*2);
		context.lineTo(500,500/3*2);
		context.stroke();
		context.moveTo(500/3,0);
		context.lineTo(500/3,500);
		context.stroke();
		context.moveTo(500/3*2,0);
		context.lineTo(500/3*2,500);
		context.stroke();
		
	}
	function drawLetter() {
		var xstring ="X";
		var ostring = "O";
		context.font = "100px serif";
		context.fillStyle = "#505050";
		context.textAlign = "center";
		context.textBaseline = "middle";
		var xwidth = context.measureText(xstring).width;
		var xpsn = 500/6;
		//xpsn = xpsn - xwidth/2;
		context.fillText(xstring,xpsn,500/6);
		context.fillText(ostring,500/2,500/2);
		
	}
	function drawScreen() {
		drawBoard();
		drawLetter();
		context.endPath();
		
	}
}