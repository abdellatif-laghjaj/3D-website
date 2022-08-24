//add loader while page is loading
window.onload = function () {
    document.getElementById("loader").style.display = "none";
}

//MAGIC MOUSE
options = {
	"cursorOuter": "circle-basic",
	"hoverEffect": "circle-move",
	"hoverItemMove": false,
	"defaultCursor": false,
	"outerWidth": 30,
	"outerHeight": 30
      };
    magicMouse(options);