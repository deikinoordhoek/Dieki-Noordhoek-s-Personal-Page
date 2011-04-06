

function drawcanvas(){

	can = document.getElementById("canvas-1")
	if (typeof FlashCanvas != "undefined") {
	    FlashCanvas.initElement(can);
	}
	con = can.getContext("2d")
	con.fillStyle = "#ffffff"
	con.fillRect(50,25,150,100)
}
