function displayValue (val){
   document.getElementById("display").value=document.getElementById("display").value+val;
}
function clearDisplay(){
    document.getElementById("display").value= " "
}

function Calculation(){
    var UserInput=document.getElementById("display").value;
    var result=eval(UserInput);

    document.getElementById("display").value=result;

}