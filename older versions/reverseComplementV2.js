function info(){
    alert("Sequence analysis software V2.5 \n By Chris Williams");
}

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
    for(var j=0; j<(complement.length); j++){
        var revIndex=((complement.length)-j);
        reverseComplement[revIndex]=complement[j];
    }
    alert("loop done");
    reverseComplement.splice(0,1);
    resultString=reverseComplement.join("");
    finalLength=resultString.length;
    alert("reverse complement is " +resultString);
    Apercent=((Acount/finalLength)*100);
    Tpercent=((Tcount/finalLength)*100);
    Cpercent=((Ccount/finalLength)*100);
    Gpercent=((Gcount/finalLength)*100);
    var readingFrame =" ";
    readingFrame=TSSFinder(initupper);
    var RNASeq=" "
    RNASeq=readingFrame.replace(/T/g,"U");
    alert("html entered readingFrame is: \n" +readingFrame);
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
    document.getElementById("ORF").innerHTML =readingFrame;
    document.getElementById("mRNAResult").innerHTML =RNASeq;
    alert("transcript of initial querrry is:" +RNASeq);
    return false;
}

function transcription(resultString){
    var resultlength =resultString.length;
    var mRNASeq= resultString.replace("T","U");
    for(var m=0; m < resultlength; m++ ){
        if(mRNASeq[m]=="T"){
            mRNASeq.splice(mRNASeq.length,1,"U");
        }
    }
    return mRNASeq;
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
    alert("stop sites at: "+amber+" "+ochre+" "+opal);//need to alter so only in frame stop codons used
    var stopArray =[amber, ochre, opal];
    for(j=0; j<3; j++){
        if(stopArray[j]<2){
            stopArray.splice(j,1);
        }
    }
    alert("stop array is " +stopArray);   
    var stopCodon =Math.min(...stopArray);
    alert("Stop position is " + stopCodon);
    for(var k=0; k<stopCodon+3; k++){
        finalArray[finalArray.length]=tripletstring[k];
    }
    var finalString=finalArray.join("");
    return finalString;
}
/*  for splitting strings into chunks of 3 try as codonAray
var str = 'abcdefghijkl';
 console.log(str.match(/.{1,3}/g)); */

function resetForm() {
    complement =[];
    reverseComplement=[];
    resultString = "";
     document.getElementById("resultsHolder").style.display ="none";
    document.forms["sequencesubmit"]["initSequence"].value = "";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["sequencesubmit"]["initSequence"].focus();
}