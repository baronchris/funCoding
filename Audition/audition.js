function sumAudition(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var current=0;
    if(isNaN(number1) || number1<0 ){
        alert("number1 must be a positive number");
        return false;
    }
    if(isNaN(number2) || Number(number2) < Number(number1)){
        alert("number2 must be a positive number greater than \n number1");
        return false;
    }
    number1=Number(number1);
    number2=Number(number2);
    for(var i=number1; i<=number2; i++){
        current+=i;
    }
    alert("answer is: "+ current);
    document.getElementById("resultDisplay").innerHTML=current;
    return false;
}