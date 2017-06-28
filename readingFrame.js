var initSequence=[];
function readingFrame(initSequence){
    var transcriptionStart=0;
    var ATGindex=0
    var tripletArray =[];
    for(var i=0; i<initSequence.length; i++){
        if(initSequence[i]=="A"&& initSequence[(i+1)]=="T" 
        && initSequence[(i+2)]=="G"){
            ATGindex=transcriptionStart=i;
            initSequence.indexOf("ATG");
            alert(ATGindex);
            tripletArray=initSequence.slice(i,i+3);
        }
}
return tripletArray
}

function TSSFinder(initSequence, searchSequence){
    var TSS=initSequence.indexOf("ATG");
    var tripletArray =[];
    var TSSadjust=TSS+1;  //since base counting starting at zero is not biological convention
    alert("Transcription start site begins at base#: "+ TSSadjust);
    for(i=TSS; i<initSequence.length; i+=3){
        if(initSequence.slice(i,i+2) != "TAG" && 
        initSequence.slice(i,i+2) != "TAA" && initSequence.slice(i,i+2) !="TGA"){
            tripletArray[tripletArray.length]=initSequence[i];
        }
        if(initSequence.slice(i,i+2) == "TAG" || 
        initSequence.slice(i,i+2) == "TAA" || initSequence.slice(i,i+2) =="TGA"){
            tripletArray[tripletArray.length]=initSequence[i];
            return tripletArray;
        }
    }
}

function TSSFinder(initSequence){
    var TSS=initSequence.indexOf("ATG");
    var tripletArray =[];
    var TSSadjust=TSS+1;  //since base counting starting at zero is not biological convention
    var finalArray=[];
    alert("Transcription start site begins at base#: "+ TSSadjust);
    for(i=TSS; i<initSequence.length; i++){
        tripletArray[tripletArray.length]=initSequence[i];
    }
    console.log(tripletArray);
    var tripletstring =tripletArray.join("");
    var amber =tripletstring.indexOf("TAG");
    var ochre =tripletstring.indexOf("TAA");
    var opal =tripletstring.indexOf("TGA")
    alert("stop sites at: "+amber+" "+ochre+" "+opal);
    var stopArray =[amber, ochre, opal];
    for(j=0; j<3; j++){
        if(stopArray[j]<0){
            stopArray.splice(j,1);
        }
    }
    alert("stop array is " +stopArray)
    var stopCodon =Math.min(...stopArray);
    alert("Stop position is " + stopCodon);
    for(var k=0; k<stopCodon+3; k++){
        finalArray[finalArray.length]=tripletstring[k];
    }
    var finalString=finalArray.join("");
    return finalString;
}