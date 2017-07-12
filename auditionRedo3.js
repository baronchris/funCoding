function validation(num1, num2, step){
var num1=document.forms["sourceData"]["num1"].value;
var num2=document.forms["sourceData"]["num2"].value;
var step=document.forms["sourceData"]["step"].value;
num1=Number(num1); //so yeah, the num1=Number(num1) thing was what I needed to make my first attempt work...
num2=Number(num2);
step=Number(step);
var differential=(num2-num1);
if(num1<0 || isNaN(num1)){
    alert("number 1 is invalid");
    return false;
    }
if(differential<1 || isNaN(num2)){
    alert("number 2 is invalid");
    return false;
}
if(step>differential || isNaN(step)){
    alert("number 2 is invalid");
    return false;
}
var outputArray=[];
outputArray=computation(num1, num2, step);
document.getElementById("resultspace").innerHTML=outputArray;
return false;
}
function computation(num1, num2, step){
    var range=[];
    var evens=[];
    var stepEven=[];
    for(var i=num1; i<=num2; i++){
        range[range.length]=i;
    }
    for(var j=0; j<range.length;j++){
        if(range[j]%2==0){
            evens[evens.length]=range[j];
        }
    }
    for(var k=0; k<evens.length; k++){
        if(k%step==0){
            stepEven[stepEven.length]=evens[k];
        }
    }
    return stepEven;
}

function resetForm(){
    document.getElementById("resultspace").innerHTML="";
    document.forms["sourceData"]["num1"].value="";
    document.forms["sourceData"]["num2"].value="";
    document.forms["sourceData"]["step"].value="";
}