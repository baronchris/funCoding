function validation(num1, num2, step){
var num1=document.forms["sourceData"]["num1"].value;
var num2=document.forms["sourceData"]["num2"].value;
var step=document.forms["sourceData"]["step"].value;
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
    var increment =(step*2);
    var results=[];
    if(num1%2==0){
        var i= Number(num1);
        for(i; i<=num2; i+=increment){
            results[results.length]=i;
            }
        }
    else{
        var n=Number(num1)+1;
        for(n; n<=num2; n+=increment){
            results[results.length]=n;
        }
    }
    return results;
}
function resetForm(){
    document.getElementById("resultspace").innerHTML="";
    document.forms["sourceData"]["num1"].value="";
    document.forms["sourceData"]["num2"].value="";
    document.forms["sourceData"]["step"].value="";
}