function luckySevens(startBet){
var startBet=document.getElementById("startbet").value;
startBet=Number(startBet);
var pot=startBet;
var history=[];
alert("function called"+" "+"ante is "+startBet);
for(i=1; pot>0;i++){
    var die1=(Math.floor(Math.random()*(1+6-1))+1);
    var die2=(Math.floor(Math.random()*(1+6-1))+1);
    var score=(die1+die2);
    if(score==7){
        pot+=4;
        }
    else{
        pot-=1;
    }
    history[history.length]=pot;
    }
    var maxPot=Math.max(...history);
    var displayPot=0
    if(maxPot<startBet){
    displayPot=startBet;
    }
    else{
        displayPot=maxPot;
    }
    document.getElementById("results").style.display="block";
    document.getElementById("rolls").innerText=i;
    document.getElementById("maxPot").innerText=maxPot;
    document.getElementById("ante").innerText=startBet;
    console.log(history);
    return false; 
}
function resetPage(){
startBet=0;
history=[];
maxPot=0;
document.getElementById("results").style.display="none";
}