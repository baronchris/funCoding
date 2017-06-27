var initSequence ="";
function Complementfinder(initSequence){
var initSequence= document.forms["sequencesubmit"]["initSequence"].value;
var strandLength =initSequence.length;
var complement = [];
var current="";
var resultString="";
var reverseComplement=[];
    for(var i=0; i<strandLength; i++){
        initSequence[i]
        if(initSequence[i]=="C"){
            current="G";
        }
        if(initSequence[i]=="G"){
            current="C";
        }
        if(initSequence[i]=="A"){
            current="T";
        }
        if(initSequence[i]=="T"){
            current="A";
        }
        if(initSequence[i]=="N"){
            current="N";
        }
        complement[i]=current;
    }
    alert("complement is "+complement);
    for(var j=0; j<(complement.length); j++){
        var revIndex=((complement.length)-j);
        reverseComplement[revIndex]=complement[j];
    }
    reverseComplement.splice(0,1);
    resultString=reverseComplement.join("");
    alert("the reverse complement of your sequence is: \n"+ resultString+
    " \n the length of your sequence is: "+complement.length);
    document.getElementById("resultsHolder").style.display ="block";
    document.getElementById("submitSequence").innerText = initSequence;
    document.getElementById("seqLength").innerText = strandLength;
    document.getElementById("revComp").innerText = resultString;
    document.getElementById("longinput").innerHTML = initSequence;
    document.getElementById("longResult").innerHTML =resultString;
    return false;
}


function resetForm() {
    complement =[];
    reverseComplement=[];
    resultString = "";
     document.getElementById("resultsHolder").style.display ="none";
    document.forms["sequencesubmit"]["initSequence"].value = "";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["sequencesubmit"]["initSequence"].focus();
}