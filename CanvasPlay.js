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
		context.strokeStyle = "#abcdef";
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
		context.endPath();
		
	}
	function drawScreen() {
		drawBoard();
		
	}
}