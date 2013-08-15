
window.addEventListener('load',eventWindowLoaded,false);
			
function eventWindowLoaded() {
	canvasApp();
}

function canvasApp() {
	var theCanvas=document.getElementById("canvas");
	var context = theCanvas.getContext("2d");
						
	drawScreen();
			
	function drawScreen() {
		context.fillStyle='#abcdef';
		context.fillRect(0,0,200,200);
		context.beginPath();
		context.strokeStyle="orange";
		context.lineWidth=5;
		context.arc(100,100,20,(Math.PI/180)*0, (Math.PI/180*360), false);
		context.stroke();
		context.closePath();
	}
}