var initSequence ="";
function Complementfinder(initSequence){
var initSequence= document.forms["sequencesubmit"]["initSequence"].value;
var complement = [];
var current="";
var resultString="";
var reverseComplement=[];
var initupper =initSequence.toUpperCase();
var strandLength =initupper.length;
var Acount=0;
var Tcount=0;
var Ccount=0;
var Gcount=0;
var Ncount=0;
var finalLength=0;
var Apercent =0;
var Tpercent=0;
var Cpercent=0;
var Gpercent=0;
alert(initSequence);
    for(var i=0; i<strandLength; i++){
        if(initupper[i] !== "A" || initupper[i] !=="C" 
        || initupper[i]!=="T" ||initupper[i]!=="G" || initupper[i]!=="N"){
            current="";
        }
        if(initupper[i]=="C"){
            current="G";
            Ccount++;
        }
        if(initupper[i]=="G"){
            current="C";
            Gcount++;
        }
        if(initupper[i]=="A"){
            current="T";
            Acount++;
        }
        if(initupper[i]=="T"){
            current="A";
            Tcount++;
        }
        if(initupper[i]=="N"){
            current="N";
            Ncount++;
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
    finalLength=resultString.length;
    Apercent=((Acount/finalLength)*100);
    alert(Acount+" bases are 'A'")
    alert(Apercent+"% of input is A");
    Tpercent=((Tcount/finalLength)*100);
    alert(Tcount+" bases are 'T'")
    alert(Tpercent+"% of input is T");
    Cpercent=((Ccount/finalLength)*100);
    alert(Ccount+" bases are 'C'")
    alert(Cpercent+"% of input is C");
    Gpercent=((Gcount/finalLength)*100);
    alert(Gcount+" bases are 'G'")
    alert(Gpercent+"% of input is G");
    alert("the reverse complement of your sequence is: \n"+ resultString+
    " \n the length of your sequence is: "+complement.length);
    document.getElementById("resultsHolder").style.display ="block";
    document.getElementById("submitSequence").innerText = initSequence;
    document.getElementById("seqLength").innerText = strandLength;
    document.getElementById("revComp").innerText = resultString;
    document.getElementById("Aprev").innerText = Apercent;
    document.getElementById("Tprev").innerText = Tpercent;
    document.getElementById("Cprev").innerText = Cpercent;
    document.getElementById("Gprev").innerText = Gpercent;
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