const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
const decreaseByValue = document.getElementById("decreaseByValue");
const decreaseSubmitBtn = document.getElementById("decreaseSubmitBtn");
const increaseByValue = document.getElementById("increaseByValue"); 
const increaseSubmitBtn = document.getElementById("increaseSubmitBtn");


let count = 0;

decreaseSubmitBtn.onclick = function() {
    decreaseValue = document.getElementById("decreaseByValue").value;
    numberValueD = parseInt(decreaseValue);
    //console.log(typeof(numberValue)); **successfully converted to number**
}

increaseSubmitBtn.onclick = function() {
    increaseValue = document.getElementById("increaseByValue").value;
    numberValueI = parseInt(increaseValue);
}

let numberValueD = 0;
let numberValueI = 0;

decreaseBtn.onclick = function() {
    //count--;
    //count-=2;
    count -= numberValueD;
    countLabel.textContent = count;
}

increaseBtn.onclick = function() {
    //count++;
    //count+=2;
    count += numberValueI;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
    numberValueD = 0;
    numberValueI = 0;
    decreaseByValue.value = ""; // Reset the value of the textbox
    increaseByValue.value = "";
}

