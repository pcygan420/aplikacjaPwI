var move_number = 0;
var stats = { CircleWin : 0, CrossWin : 0, Draws : 0 }
var sign = { Circle : 0, Cross : 1 }
var player = sign.Circle;
var game_cells = [ [-1, -1, -1], [-1, -1, -1], [-1, -1, -1] ];
var cells = [ ["00","01","02"], ["10","11","12"], ["20","21","22"] ];

//get language
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
var language = getCookie("Language")
	
function Move(cell) {
					
	move_number = move_number + 1;
			
	if(cell.innerHTML != ''){
		return;
	}
			
	var x = cell.id[0];
	var y = cell.id[1];
			
	if(player == sign.Circle) {
        cell.innerHTML = "o";
		game_cells[x][y] = 0;
	} else {
        cell.innerHTML = "x";
        game_cells[x][y] = 1;
	}
			
	if(player == sign.Circle) {
        player = sign.Cross;
        if (language == "en") {
            document.getElementById("turn-info").innerHTML = " cross";
        } else {
            document.getElementById("turn-info").innerHTML = " krzyżyków";
        }
	} else { 
        player = sign.Circle;
        if (language == "en") {
            document.getElementById("turn-info").innerHTML = " circle";
        } else {
            document.getElementById("turn-info").innerHTML = " kółek";
        }
    }
			
	//checking victory
	if(move_number > 4) {
			
		var result = CheckBoard();
		switch(result) {
            case 0:

                if (language == "en") {
                    alert("Circle wins");
                } else {
                    alert("Wygrana kółek");
                }

				stats.CircleWin = stats.CircleWin + 1;
				document.getElementById("circle").innerHTML = stats.CircleWin;
				ResetBoard();
				break;
            case 1:

                if (language == "en") {
                    alert("Cross wins");
                } else {
                    alert("Wygrana krzyżyków");
                }

				stats.CrossWin = stats.CrossWin + 1;
				document.getElementById("cross").innerHTML = stats.CrossWin;
				ResetBoard();
				break;
            case 2:

                if (language == "en") {
                    alert("Draw");
                } else {
                    alert("Remis");
                }

				stats.Draws = stats.Draws + 1;
				document.getElementById("draw").innerHTML = stats.Draws;
				ResetBoard();
				break;
						
			default:
				break;
		}
	}		
}
		
function ResetBoard() {
	move_number = 0;
	game_cells = [ [-1,-1,-1], [-1,-1,-1], [-1,-1,-1] ];
			
	document.getElementById("00").innerHTML = "";
	document.getElementById("01").innerHTML = "";
	document.getElementById("02").innerHTML = "";
	document.getElementById("10").innerHTML = "";
	document.getElementById("11").innerHTML = "";
	document.getElementById("12").innerHTML = "";
	document.getElementById("20").innerHTML = "";
	document.getElementById("21").innerHTML = "";
	document.getElementById("22").innerHTML = "";
}
		
function CheckBoard() {
	for (i=0; i<3; i++) {			
		if(game_cells[i][0] != -1 && game_cells[i][0] == game_cells[i][1] && game_cells[i][1] == game_cells[i][2]) 
			return game_cells[i][0];
 	}
			
	for (i=0; i<3; i++) {
		if(game_cells[0][i] != -1 && game_cells[0][i] == game_cells[1][i] && game_cells[1][i] == game_cells[2][i]) 
			return game_cells[0][i];
 	}
			
	if(game_cells[0][0] != -1 && game_cells[0][0] == game_cells[1][1] && game_cells[1][1] == game_cells[2][2])
		return game_cells[0][0];
			
	if(game_cells[0][2] != -1 && game_cells[0][2] == game_cells[1][1] && game_cells[1][1] == game_cells[2][0])
		return game_cells[0][2];
			
	if(move_number == 9)
		return 2;
}


    
    

