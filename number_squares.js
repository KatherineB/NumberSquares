var ids = new Array("nr01","nr02","nr03","nr04","nr05","nr06","nr07","nr08","nr09","nr10");
var randomNumbers = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
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

function genRandNums(){
    if(randSets > 0){
		for( var i = 0; i < 10; i++){
			var number = Math.floor(Math.random()*16);
			//alert(randomNumbers[number]);
			document.getElementById(ids[i]).innerHTML = randomNumbers[number];
			
		}
		randSets--;
		document.getElementById("sets").innerHTML = randSets;
	}
	else{
	    endGame();
	}
}
function getNumber(rSquare){
     origin = rSquare;
     numberToTransfer = document.getElementById(rSquare).innerHTML;
}
function placeNumber(pSquare){
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
		// alert(score1);
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
		// alert(score2[0]);		
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
		// alert(score3[0]);	
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
		// alert(score4[0]);	
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
		// alert(score5[0]);	
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
		// alert(score6);
	 }

}
function endGame(){
    document.getElementById("note").innerHTML = "Game over, your score:";
	basicScore = score1 + score2[0] + score3[0] + score4[0] + score5[0] + score6;
	//alert("basic score: " + basicScore);
	if (score2[0] < 48){
		for ( i = 1; i < 17; i+=2){
		  if (score2[i] + score2[i+1] == 2){
			  bonusScore2+=2;
		  }
		}
	}
	//alert(bonusScore2);
	if (score3[0] < 48){
		for ( i = 1; i < 17; i+=4){
		  if (score3[i] + score3[i+1] + score3[i+2] + score3[i+3] == 4){
			  bonusScore3+=4;
		  }
		}
	}
	//alert(bonusScore3);
	if (score4[0] < 48){
		for ( i = 1; i < 17; i+=4){
		  if (score4[i] + score4[i+1] + score4[i+2] + score4[i+3] == 4){
			  bonusScore4+=4;
		  }
		}
	}
	//alert(bonusScore4);
	if (score5[0] < 48){
		for ( i = 1; i < 17; i+=8){
		  if (score5[i] + score5[i+1] + score5[i+2] + score5[i+3] + score5[i+4] + score5[i+5] + score5[i+6] + score5[i+7]== 8){
			  bonusScore5+=8;
		  }
		}
	}
	//alert(bonusScore5);
	totalScore = basicScore + bonusScore2 + bonusScore3 + bonusScore4 + bonusScore5;
	document.getElementById("sets").innerHTML = totalScore;
}


