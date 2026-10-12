// script.js

const display = document.getElementById("display");




function appendToDisplay(input) {
    display.value += input;
}
function cleardisplay() {
   display.value = "";
}

function clearinput(){
    display.value = display.value.slice(0,- 1);
}
function calculate() {
   try{
    display.value = eval(display.value)
   }
   catch(Error){
    display.value = "Error";
   }
}