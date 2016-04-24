var ids = new Array("nr01","nr02","nr03","nr04","nr05","nr06","nr07","nr08","nr09","nr10");
var randomNumbers = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
var place2 = new Array("p2_01","p2_02","p2_03","p2_04","p2_05","p2_06","p2_07","p2_08","p2_09","p2_10","p2_11","p2_12","p2_13","p2_14","p2_15","p2_16");
var place3 = new Array("p3_01","p3_02","p3_03","p3_04","p3_05","p3_06","p3_07","p3_08","p3_09","p3_10","p3_11","p3_12","p3_13","p3_14","p3_15","p3_16");
var place4 = new Array("p4_01","p4_02","p4_03","p4_04","p4_05","p4_06","p4_07","p4_08","p4_09","p4_10","p4_11","p4_12","p4_13","p4_14","p4_15","p4_16");
var place5 = new Array("p5_01","p5_02","p5_03","p5_04","p5_05","p5_06","p5_07","p5_08","p5_09","p5_10","p5_11","p5_12","p5_13","p5_14","p5_15","p5_16");
var place6 = new Array("p6_01","p6_02","p6_03","p6_04","p6_05","p6_06","p6_07","p6_08","p6_09","p6_10","p6_11","p6_12","p6_13","p6_14","p6_15","p6_16");
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
	// alert(squareState);
	 if(numberToTransfer === numberLegal && squareState !== "bold"){
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
	 }
}
function placeNumber2(indexNo){
	 var pSquare = place2[indexNo];
     var numberLegal = document.getElementById(pSquare).innerHTML;	 
     var squareState = document.getElementById(pSquare).style.fontWeight;
	// alert(squareState);	 
	 
	 if(numberToTransfer === numberLegal && squareState !== "bold"){	     
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
	 }
	 else if(numberLegal === "?"){
	     document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
		 document.getElementById(place2[indexNo+1]).innerHTML = numberToTransfer;
	 }	 
}
function placeNumber3(indexNo){
	 var pSquare = place3[indexNo];
     var numberLegal = document.getElementById(pSquare).innerHTML;	   
	 var squareState = document.getElementById(pSquare).style.fontWeight;
	// alert(squareState);
	 if(numberToTransfer === numberLegal && squareState !== "bold"){	     
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
	 }
	 else if(numberLegal === "?"){
	     document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
		 document.getElementById(place3[indexNo+1]).innerHTML = numberToTransfer;
		 document.getElementById(place3[indexNo+2]).innerHTML = numberToTransfer;
		 document.getElementById(place3[indexNo+3]).innerHTML = numberToTransfer;
	 }	 
}
function placeNumber4(indexNo){
	 var pSquare = place4[indexNo];
     var numberLegal = document.getElementById(pSquare).innerHTML;	   
	 var squareState = document.getElementById(pSquare).style.fontWeight;
	// alert(squareState);
	 if(numberToTransfer === numberLegal && squareState !== "bold"){	     
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
	 }
	 else if(numberLegal === "?"){
	     document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
		 document.getElementById(place4[indexNo+1]).innerHTML = numberToTransfer;
		 document.getElementById(place4[indexNo+2]).innerHTML = numberToTransfer;
		 document.getElementById(place4[indexNo+3]).innerHTML = numberToTransfer;
	 }	 
}
function placeNumber5(indexNo){
	 var pSquare = place5[indexNo];
     var numberLegal = document.getElementById(pSquare).innerHTML;	   
	 var squareState = document.getElementById(pSquare).style.fontWeight;
	// alert(squareState);
	 if(numberToTransfer === numberLegal && squareState !== "bold"){	     
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
	 }
	 else if(numberLegal === "?"){
	     document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
		 document.getElementById(place5[indexNo+1]).innerHTML = numberToTransfer;
		 document.getElementById(place5[indexNo+2]).innerHTML = numberToTransfer;
		 document.getElementById(place5[indexNo+3]).innerHTML = numberToTransfer;
		 document.getElementById(place5[indexNo+4]).innerHTML = numberToTransfer;
		 document.getElementById(place5[indexNo+5]).innerHTML = numberToTransfer;
		 document.getElementById(place5[indexNo+6]).innerHTML = numberToTransfer;
		 document.getElementById(place5[indexNo+7]).innerHTML = numberToTransfer;
		 
	 }	 
}
function placeNumber6(indexNo){
	 var pSquare = place6[indexNo];
     var numberLegal = document.getElementById(pSquare).innerHTML;	   
	 var squareState = document.getElementById(pSquare).style.fontWeight;
	// alert(squareState);
	 if(numberToTransfer === numberLegal && squareState !== "bold"){	     
         document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
	 }
	 else if(numberLegal === "?"){
	     document.getElementById(pSquare).innerHTML = numberToTransfer;
		 document.getElementById(pSquare).style.color = '#000';
		 document.getElementById(pSquare).style.fontWeight = 'bold';
		 document.getElementById(pSquare).style.backgroundColor = '#0fc';
		 document.getElementById(origin).innerHTML = "";
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
}
function endGame(){
    document.getElementById("note").innerHTML = "Game over, your score:";
	document.getElementById("sets").innerHTML = "Scoring code not yet written";
}
