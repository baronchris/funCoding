function evenstep(number1, number2, step){
    var number1=document.forms["inputData"]["number1"].value;
    var number2=document.forms["inputData"]["number2"].value;
    var step=document.forms["inputData"]["step"].value;
    if(number1<1  || isNaN(number1)){
        alert("number1 is invalid");
        document.forms["inputData"]["number1"].focus();
        return false;
    }
    if(number2<1  || isNaN(number2)){
        alert("number2 is invalid");
        document.forms["inputData"]["number2"].focus();
        return false;
    }
    if(step<1 || isNaN(step)){
        alert("step invalid");
        return false;
    }
    if(number2-number1 <step){
        alert("invalid parameters number2 must be greater than number 1 \n and there must me a step between the number2 and number 1");
        return false;
    }
    var n1=0+String(number1);
    var n1a =Number(n1);
    var totalRange=[];
    for(var i=n1a; i<=number2; i++){
        totalRange[totalRange.length]=i;
    }
    var evenRange =[];
    for(var j=0;j<totalRange.length;j++){
        if(totalRange[j]%2==0){
            evenRange[evenRange.length]=totalRange[j];
        }
    }
    var finalRange=[];
    for(var k=0; k<evenRange.length; k++){
        if(k%step==0){
            finalRange[finalRange.length]=evenRange[k];
        }
    }
    document.getElementById("resultSpace").innerHTML=finalRange;
    return false;
}

/*

if(number1<1 || isNaN(number1)){
        alert("number 1 invalid");
        return false;
    }
    if(number2<1 || isNaN(number2)){
        alert("number 2 invalid");
        return false;
    }
    if(step<1 || isNaN(step)){
        alert("step invalid");
        return false;
    }
    alert("validation passed");*/