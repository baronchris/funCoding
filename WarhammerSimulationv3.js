/*to do 
1:split input into two forms, 
2:move radios out of forms
use "var x = document.getElementById("myRadio").checked; " simulacra
3: get powerweapons bolean up and running
4: add in leadership test
*/
function turnOrder(){
alert("function turnOrder called");
var unitA =[];
var unitB =[];
var hitsA=0;
var hitsB=0;
var woundsA=0;
var woundsB=0;
var armourPA=0;
var armourPB=0;
var savesA=0;
var savesB=0;
var unsavedWoundsA=0;
var unsavedWoundsB=0;
var totalAttacksA=0;
var totalAttacksB=0;
var survivorsA=0;
var survivorsB=0;
var toWoundA=0;
var toWoundB=0;
var AhitsON=0;
var BhitsON=0;
var models1=document.forms["statlines"]["models1"].value;
var Ws1= document["statlines"]["Ws1"].value;
var B1= document.forms["statlines"]["B1"].value;
var S1= document.forms["statlines"]["S1"].value;
var T1= document.forms["statlines"]["T1"].value;
var I1= document.forms["statlines"]["I1"].value;
var A1= document.forms["statlines"]["A1"].value;
var Wo1= document.forms["statlines"]["Wo1"].value;
var L1= document.forms["statlines"]["L1"].value;
var save1 =document.forms["statlines"]["save1"].value;
alert("about to get armourP1");
var armourP1 =document.forms["statlines"]["armourP1"].value;
alert("unit 1 variables entered");
var models2 =document.forms["statlines"]["models2"].value;
var Ws2= document.forms["statlines"]["Ws2"].value;
var B2= document.forms["statlines"]["B2"].value;
var S2= document.forms["statlines"]["S2"].value;
var T2= document.forms["statlines"]["T2"].value;
var I2= document.forms["statlines"]["I2"].value;
var A2= document.forms["statlines"]["A2"].value;
var Wo2= document.forms["statlines"]["Wo2"].value;
var L2= document.forms["statlines"]["L2"].value;
var armourP2 =document.forms["statlines"]["armourP2"].value;
var save2 =document.forms["statlines"]["save2"].value;
var unitid1="Unit 1";
var unitid2="Unit 2";
alert("parameters entered");
var statline1 =[];
statline1 =[Ws1,B1,S1,T1,I1,A1,Wo1,L1,save1,models1,unitid1,armourP1];
var statline2 =[];
statline2= [Ws2,B2,S2,T2,I2,A2,Wo2,L2,save2,models2,unitid2,armourP2];
alert("unit stats are unit 1: "+ statline1 +" "+ " & unit 2: " + statline2);

    if(statline1[4]>=statline2[4]){
        unitA=statline1;
        unitB=statline2;
        alert("Unit1 goes first");
    }
    else{
        unitA=statline2;
        unitB=statline1;
        alert("Unit2 goes first");
    }
totalAttacksA=(unitA[9]*unitA[5]);
totalAttacksB=(unitB[9]*unitB[5]);
alert("total initial attacks for unit A are " +totalAttacksA);
alert("total initial attacks unitB are: " +totalAttacksB);
AhitsON=testavb(unitA[0],unitB[0]);
toWoundB=testavb(unitA[2],unitB[3]);
alert("unit A hits on a "+ AhitsON + " and wounds on a " +toWoundB);//seems to break after first go-round
BhitsON=testavb(unitB[0], unitA[0]);
toWoundA=testavb(unitB[2],unitA[3]);
alert("unit B hits on a "+ BhitsON + " and wounds on a " +toWoundA);
for(var i=0; i<3; i++){
    if(unitA[9]>0 && unitB[9]>0){
        alert("loop started, i ="+i );//breaks here now.  Why??
        hitsA=diceRoll(totalAttacksA, AhitsON);
        alert("unit a hits unit B "+hitsA+" times"); 
        woundsB=diceRoll(hitsA, toWoundB);
        savesB=armourSave(woundsB, unitB[8],unitA[11]);
        unsavedWoundsB=(woundsB-savesB);
        alert ("unit 'B' took " + unsavedWoundsB + " wounds");
        survivorsB=resolution(unsavedWoundsB, unitB[6], unitB[9]);
        unitB.splice(9,1,survivorsB);
    if(survivorsB<1){
        alert("unit B is destroyed");
        return false;
        }
    alert("the matrix entry for unit b models is now " + unitB[9]);
    totalAttacksB=(unitB[9]*unitB[5]);
    alert("the total attacks for unitB are now: " +totalAttacksB);
//counter-ATTACK!!!!
    alert("begin counter-attack!!");
    hitsB=diceRoll(totalAttacksB, BhitsON);
    alert("unit B hits unit A "+ hitsB+" times");
    woundsA=diceRoll(hitsB, toWoundA);
    alert("unit A is wounded "+ woundsA +" times)");
    savesA=armourSave(woundsA, unitA[8], unitB[11]);
    unsavedWoundsA=(woundsA-savesA) ;
    alert("Unit A took " +unsavedWoundsA + " unsaved wounds");
    survivorsA=resolution(unsavedWoundsA,unitA[6],unitA[9]);
    unitA.splice(9,1,survivorsA);
    if(survivorsA<1){
        alert("unit A is destroyed");
        return false;
        }
    alert("unit A now has " + unitA[9] +" models");
    totalAttacksA=(unitA[9]*unitA[5]);
    if(unitA[9]<1){
        alert("unitA was wiped out and unit B has " + unitB[9]);
    }
    if(unitB[9]<1){
        alert("unitB was wiped out and unit A has " + unitA[9]);
    }
    }
alert("unitA has " + unitA[9] + " and unit B has " + unitB[9]);
}
alert("unitA has " + unitA[9] + " and unit B has " + unitB[9]);
return false;    /*only during debugging*/
}

function diceRoll(rolls, threshold){
var rollresults =[];
for(var i=0; i<rolls; i++){
    rollresults[i]=(Math.floor(Math.random()*(1+6-1))+1);
}
console.log(rollresults);
var successes=resultTest(rollresults, threshold);
return successes;
}

function resultTest(rollresults, threshold){
var wonTest=0;
for(var i=0; i<rollresults.length;i++){
    if(rollresults[i]>=(threshold)){
        wonTest++;
    }
}
return wonTest;
}

function testavb(traitAttacker, traitDefender){
alert("attacker's trait is "+ traitAttacker+" "+ "defender's trait is "+ traitDefender);
var threshold=0;
var thresholdFinal=0;
threshold=(traitDefender-traitAttacker)+4;
    if (threshold<2){
        thresholdFinal=2;
    } 
    if(threshold>6){
        thresholdFinal=6;
    }
    if(threshold>=2 && threshold<=6){ 
        thresholdFinal=(threshold+0)
    }
    alert("final test value "+ thresholdFinal);
return thresholdFinal;
}

function armourSave(wounds, save, armourP){
    var finalSaves=0;
    if(save==""||isNaN(save) || save>6 || save<2){
        alert("no armour save");
        finalSaves=0;
    }
    else{
        var adjustSave= Number(save) + Number(armourP);
        if(adjustSave<7){
        alert("saving "+wounds+ "with a" + adjustSave+"-plus save");
        finalSaves=diceRoll(wounds, adjustSave);
        alert(finalSaves + " armour saves made");
    }
        if(adjustSave>6){
        finalSaves=0;
        alert("Armour is pierced");
    }
    }
    return finalSaves;
}
function resolution(woundsSustained, woundsPermodel, models){
    var unitDamage=0;
    unitDamage=(woundsSustained/woundsPermodel);
    var unitDamageRound=Math.floor(unitDamage);
    var survivors = models-unitDamageRound;
    if(0>=survivors){
        alert("wiped out");
    }
    else{
        alert(survivors + " members of unitB surivive to counter");
    }
    return survivors;
}
