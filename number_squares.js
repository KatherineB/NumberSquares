var ids = new Array("nr01","nr02","nr03","nr04","nr05","nr06","nr07","nr08","nr09","nr10");
var randomNumbers = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
var place1 = new Array("p1_01","p1_02","p1_03","p1_04","p1_05","p1_06","p1_07","p1_08","p1_09","p1_10","p1_11","p1_12","p1_13","p1_14","p1_15","p1_16");
var place2 = new Array("p2_01","p2_02","p2_03","p2_04","p2_05","p2_06","p2_07","p2_08","p2_09","p2_10","p2_11","p2_12","p2_13","p2_14","p2_15","p2_16");
var place3 = new Array("p3_01","p3_02","p3_03","p3_04","p3_05","p3_06","p3_07","p3_08","p3_09","p3_10","p3_11","p3_12","p3_13","p3_14","p3_15","p3_16");
var place4 = new Array("p4_01","p4_02","p4_03","p4_04","p4_05","p4_06","p4_07","p4_08","p4_09","p4_10","p4_11","p4_12","p4_13","p4_14","p4_15","p4_16");
var place5 = new Array("p5_01","p5_02","p5_03","p5_04","p5_05","p5_06","p5_07","p5_08","p5_09","p5_10","p5_11","p5_12","p5_13","p5_14","p5_15","p5_16");
var place6 = new Array("p6_01","p6_02","p6_03","p6_04","p6_05","p6_06","p6_07","p6_08","p6_09","p6_10","p6_11","p6_12","p6_13","p6_14","p6_15","p6_16");
var score1 = 0;
var score2 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var score3 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var score4 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var score5 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var score6 = 0;
var basicScore = 0;
var bonusScore2 = 0;
var bonusScore3 = 0;
var bonusScore4 = 0;
var bonusScore5 = 0;
var totalScore = 0;
var numberToTransfer = "";
var origin = "";
var randSets = 10;
function newGame(){
	score1 = 0;
	score2 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
	score3 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
	score4 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
	score5 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
	score6 = 0;
	basicScore = 0;
	bonusScore2 = 0;
	bonusScore3 = 0;
	bonusScore4 = 0;
	bonusScore5 = 0;
	totalScore = 0;
	numberToTransfer = "";
	origin = "";
	randSets = 10;
	document.getElementById("noteBox").style.display = "inline-block";
	document.getElementById("scoreBox").style.display = "none";
	document.getElementById("noteBox").style.backgroundColor = "#668866";
	document.getElementById("newNumbersBtn").value = "New Numbers";
	document.getElementById("sets").innerHTML = randSets;
	for( var i = 0; i < 10; i++){		
			document.getElementById(ids[i]).innerHTML = "";		
	}
	for ( var i = 0; i < 16; i++){
		document.getElementById(place1[i]).style.backgroundColor = "#ffffff";
		document.getElementById(place1[i]).style.fontWeight = "normal";
		document.getElementById(place1[i]).style.color = "#aaaaaa";
		document.getElementById(place2[i]).style.backgroundColor = "#ffffff";
		document.getElementById(place2[i]).style.fontWeight = "normal";
		document.getElementById(place2[i]).style.color = "#aaaaaa";
		document.getElementById(place3[i]).style.backgroundColor = "#ffffff";
		document.getElementById(place3[i]).style.fontWeight = "normal";
		document.getElementById(place3[i]).style.color = "#aaaaaa";
		document.getElementById(place4[i]).style.backgroundColor = "#ffffff";
		document.getElementById(place4[i]).style.fontWeight = "normal";
		document.getElementById(place4[i]).style.color = "#aaaaaa";
		document.getElementById(place5[i]).style.backgroundColor = "#ffffff";
		document.getElementById(place5[i]).style.fontWeight = "normal";
		document.getElementById(place5[i]).style.color = "#aaaaaa";
		document.getElementById(place6[i]).style.backgroundColor = "#ffffff";
		document.getElementById(place6[i]).style.fontWeight = "normal";
		document.getElementById(place6[i]).style.color = "#aaaaaa";
	}
	for ( var i = 0; i < 16; i+=2){		
		document.getElementById(place2[i]).innerHTML = "?";
		document.getElementById(place2[i+1]).innerHTML = "";
	}
	for ( var i = 0; i < 16; i+=4){		
		document.getElementById(place3[i]).innerHTML = "?";
		document.getElementById(place3[i+1]).innerHTML = "";
		document.getElementById(place3[i+2]).innerHTML = "";
		document.getElementById(place3[i+3]).innerHTML = "";
	}
	for ( var i = 0; i < 16; i+=4){		
		document.getElementById(place4[i]).innerHTML = "?";
		document.getElementById(place4[i+1]).innerHTML = "";
		document.getElementById(place4[i+2]).innerHTML = "";
		document.getElementById(place4[i+3]).innerHTML = "";
	}
	for ( var i = 0; i < 16; i++){		
		document.getElementById(place5[i]).innerHTML = "";
	}
	document.getElementById(place5[0]).innerHTML = "?";
	document.getElementById(place5[8]).innerHTML = "?";
	for ( var i = 0; i < 16; i++){		
		document.getElementById(place6[i]).innerHTML = "";
	}
	document.getElementById(place6[0]).innerHTML = "?";
}

function genRandNums(){
	randSets--;
    if(randSets > -1){
		for( var i = 0; i < 10; i++){
			var number = Math.floor(Math.random()*16);
			document.getElementById(ids[i]).innerHTML = randomNumbers[number];		
		}	
		document.getElementById("sets").innerHTML = randSets;
		
		if ( randSets == 2 || randSets == 3 ){
			document.getElementById("noteBox").style.backgroundColor = "#ddaa00";
	    }
		if ( randSets == 0 || randSets == 1 ){
			document.getElementById("noteBox").style.backgroundColor = "#ff0000";
	    }
		if ( randSets == 0){
			document.getElementById("newNumbersBtn").value = "End Game";
		}
	}
	else{
		if (randSets == -1){
			endGame();
		}	    		
	}
}
/*function getNumber(rSquare){
     origin = rSquare;
     numberToTransfer = document.getElementById(rSquare).innerHTML;
	 event.preventDefault();
}*/
nr01.onmousedown = function(e){
   origin = 'nr01';
   numberToTransfer = document.getElementById('nr01').innerHTML;
   e.preventDefault();
}
nr02.onmousedown = function(e){
   origin = 'nr02';
   numberToTransfer = document.getElementById('nr02').innerHTML;
   e.preventDefault();
}
nr03.onmousedown = function(e){
   origin = 'nr03';
   numberToTransfer = document.getElementById('nr03').innerHTML;
   e.preventDefault();
}
nr04.onmousedown = function(e){
   origin = 'nr04';
   numberToTransfer = document.getElementById('nr04').innerHTML;
   e.preventDefault();
}
nr05.onmousedown = function(e){
   origin = 'nr05';
   numberToTransfer = document.getElementById('nr05').innerHTML;
   e.preventDefault();
}
nr06.onmousedown = function(e){
   origin = 'nr06';
   numberToTransfer = document.getElementById('nr06').innerHTML;
   e.preventDefault();
}
nr07.onmousedown = function(e){
   origin = 'nr07';
   numberToTransfer = document.getElementById('nr07').innerHTML;
   e.preventDefault();
}
nr08.onmousedown = function(e){
   origin = 'nr08';
   numberToTransfer = document.getElementById('nr08').innerHTML;
   e.preventDefault();
}
nr09.onmousedown = function(e){
   origin = 'nr09';
   numberToTransfer = document.getElementById('nr09').innerHTML;
   e.preventDefault();
}
nr10.onmousedown = function(e){
   origin = 'nr10';
   numberToTransfer = document.getElementById('nr10').innerHTML;
   e.preventDefault();
}
function placeNumber1(pSquare){
     var numberLegal = document.getElementById(pSquare).innerHTML;	 
     var squareState = document.getElementById(pSquare).style.fontWeight;
	 if(numberToTransfer === numberLegal && squareState !== "bold"){
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";		
		 score1++;
	     if (score1 == 16){
			 score1 = 32;
	     }
	 }
}
function placeNumber2(indexNo){
	 var pSquare = place2[indexNo];
     var numberLegal = document.getElementById(pSquare).innerHTML;	 
     var squareState = document.getElementById(pSquare).style.fontWeight;
	 
     if( (numberToTransfer === numberLegal && squareState !== "bold") || numberLegal === "?"){	     
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
		 if (numberLegal === "?"){
			 document.getElementById(place2[indexNo+1]).innerHTML = numberToTransfer;
		 }
		 indexNo = pSquare.substring(3,5);	
         indexNo = Number(indexNo).toString();
		 score2[indexNo] = 1;
		 score2[0]++;
	     if (score2[0] == 16){
			 score2[0] = 48;
	     }	
	 }  	
}
function placeNumber3(indexNo){
	 var pSquare = place3[indexNo];
     var numberLegal = document.getElementById(pSquare).innerHTML;	   
	 var squareState = document.getElementById(pSquare).style.fontWeight;

	 if( (numberToTransfer === numberLegal && squareState !== "bold") || numberLegal === "?" ){	     
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
		 if (numberLegal === "?"){
			 document.getElementById(place3[indexNo+1]).innerHTML = numberToTransfer;
		     document.getElementById(place3[indexNo+2]).innerHTML = numberToTransfer;
		     document.getElementById(place3[indexNo+3]).innerHTML = numberToTransfer;
		 }
		 indexNo = pSquare.substring(3,5);	
         indexNo = Number(indexNo).toString();
		 score3[indexNo] = 1;
		 score3[0]++;
	     if (score3[0] == 16){
			 score3[0] = 48;
	     }
	 }
}
function placeNumber4(indexNo){
	 var pSquare = place4[indexNo];
     var numberLegal = document.getElementById(pSquare).innerHTML;	   
	 var squareState = document.getElementById(pSquare).style.fontWeight;

	 if( (numberToTransfer === numberLegal && squareState !== "bold") || numberLegal === "?"  ){	     
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
		 if (numberLegal === "?"){
			 document.getElementById(place4[indexNo+1]).innerHTML = numberToTransfer;
		     document.getElementById(place4[indexNo+2]).innerHTML = numberToTransfer;
		     document.getElementById(place4[indexNo+3]).innerHTML = numberToTransfer;
		 }
		 indexNo = pSquare.substring(3,5);	
         indexNo = Number(indexNo).toString();
		 score4[indexNo] = 1;
		 score4[0]++;
	     if (score4[0] == 16){
			 score4[0] = 48;
	     }
	 }
}
function placeNumber5(indexNo){
	 var pSquare = place5[indexNo];
     var numberLegal = document.getElementById(pSquare).innerHTML;	   
	 var squareState = document.getElementById(pSquare).style.fontWeight;

	 if( (numberToTransfer === numberLegal && squareState !== "bold") || numberLegal === "?"){	     
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
		 if (numberLegal === "?"){
			 document.getElementById(place5[indexNo+1]).innerHTML = numberToTransfer;
			 document.getElementById(place5[indexNo+2]).innerHTML = numberToTransfer;
			 document.getElementById(place5[indexNo+3]).innerHTML = numberToTransfer;
			 document.getElementById(place5[indexNo+4]).innerHTML = numberToTransfer;
			 document.getElementById(place5[indexNo+5]).innerHTML = numberToTransfer;
			 document.getElementById(place5[indexNo+6]).innerHTML = numberToTransfer;
			 document.getElementById(place5[indexNo+7]).innerHTML = numberToTransfer;
		 }
		 indexNo = pSquare.substring(3,5);	
         indexNo = Number(indexNo).toString();
		 score5[indexNo] = 1;
		 score5[0]++;
	     if (score5[0] == 16){
			 score5[0] = 48;
	     }
	 }
}
function placeNumber6(indexNo){
	 var pSquare = place6[indexNo];
     var numberLegal = document.getElementById(pSquare).innerHTML;	   
	 var squareState = document.getElementById(pSquare).style.fontWeight;

if( (numberToTransfer === numberLegal && squareState !== "bold") || numberLegal === "?"){	     
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
		 if (numberLegal === "?"){
			 document.getElementById(place6[indexNo+1]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+2]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+3]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+4]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+5]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+6]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+7]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+8]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+9]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+10]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+11]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+12]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+13]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+14]).innerHTML = numberToTransfer;
			 document.getElementById(place6[indexNo+15]).innerHTML = numberToTransfer;
		 }
		 score6++;
	     if (score6 == 16){
			 score6 = 64;
	     }
	 }

}
function endGame(){
    document.getElementById("noteBox").style.display = "none";
	document.getElementById("scoreBox").style.display = "inline-block";
	
	basicScore = score1 + score2[0] + score3[0] + score4[0] + score5[0] + score6;

	if (score2[0] < 48){
		for ( i = 1; i < 17; i+=2){
		  if (score2[i] + score2[i+1] == 2){
			  bonusScore2+=2;
		  }
		}
	}

	if (score3[0] < 48){
		for ( i = 1; i < 17; i+=4){
		  if (score3[i] + score3[i+1] + score3[i+2] + score3[i+3] == 4){
			  bonusScore3+=4;
		  }
		}
	}

	if (score4[0] < 48){
		for ( i = 1; i < 17; i+=4){
		  if (score4[i] + score4[i+1] + score4[i+2] + score4[i+3] == 4){
			  bonusScore4+=4;
		  }
		}
	}

	if (score5[0] < 48){
		for ( i = 1; i < 17; i+=8){
		  if (score5[i] + score5[i+1] + score5[i+2] + score5[i+3] + score5[i+4] + score5[i+5] + score5[i+6] + score5[i+7]== 8){
			  bonusScore5+=8;
		  }
		}
	}

	totalScore = basicScore + bonusScore2 + bonusScore3 + bonusScore4 + bonusScore5;
	document.getElementById("score").innerHTML = totalScore;
}
function openHowToPlay(){
	document.getElementById("how").style.display = "inline-block";
}
function closeHowToPlay(){
	document.getElementById("how").style.display = "none";
}



