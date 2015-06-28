/*
function livesCounter() {
var lives = 0;
  for(var h = 10; h > lives.length; h--)
}

function timer() {}
    var timer = document.getElementById('.timer').innerHTML = h+ ":" + m + ":" + s;
    t = setInterval(function(){ timer() }, 500);
}

*/

var tileIconsArray = ["<i class="fa fa-heartbeat"></i>", "fa fa-heartbeat", "fa fa-cloud", "fa fa-cloud", "fa fa-dot-circle-o", "fa fa-dot-circle-o", "fa fa-cogs", "fa fa-cogs", "fa fa-leaf", "fa fa-leaf", "fa fa-globe", "fa fa-globe", "fa fa-bolt", "fa fa-bolt", "fa fa-diamond", "fa fa-diamond", "fa fa-puzzle-piece", "fa fa-puzzle-piece"];

var tilesSelected = [];
var iconShow = [];
var flippedCounter = 0;
Array.prototype.randomizeTiles = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
};

function newGame(){
	flippedCounter = 0;
	var output = '';
    tileIconsArray.randomizeTiles();
	for(var i = 0; i < tileIconsArray.length; i++){
    output += '<div id="tile_'+i+'" onclick="flipTile(this,\''+tileIconsArray[i]+'\')"></div>';
	}
	document.getElementById('game-board').innerHTML = output;
}

function flipTile(tile,val) {
	if(tile.innerHTML === "" && tilesSelected.length < 2){
		tile.innerHTML = val;
		if(tilesSelected.length === 0){
			tilesSelected.push(val);
			iconShow.push(tile.id);
		} else if(tilesSelected.length == 1){
			tilesSelected.push(val);
			iconShow.push(tile.id);
			if(tilesSelected[0] == tilesSelected[1]){
				flippedCounter += 2;
				// Clear both arrays
				tilesSelected = [];
            	iconShow = [];
				// Check to see if the whole board is cleared
				if(flippedCounter == tileIconsArray.length){
					alert("You win! Nice job, champ.");
					document.getElementById('game-board').innerHTML = "";
					newGame();
				}
			} else {
 var unmatched = function unflipTile(){
				    // Flip the 2 tiles back over
    var tile1 = document.getElementById(iconShow[0]);
    var tile2 = document.getElementById(iconShow[1]);
  	    tile1.innerHTML = "";
  	    tile2.innerHTML = "";
				    // Clear both arrays
				    tilesSelected = [];
            iconShow = [];
				};

					setTimeout(unmatched, 700);
			}
		}
	}
}

/* generates new board */
window.addEventListener(newGame());
