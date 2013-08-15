
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
	}
}