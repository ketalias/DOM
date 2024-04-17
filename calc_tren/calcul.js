
function renderForm(){
let operations = ["+", "-"];


let num1 = GenerateNum();
let num2 = GenerateNum();
if (num2 > num1) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}
document.getElementById("first_num_input").value = num1;
document.getElementById("second_num_input").value = num2;
let oper = RandomOper();
document.getElementById("operation").textContent = oper;

function RandomOper() {
    let index = Math.floor(Math.random() * 2); 
    return operations[index];
}

function GenerateNum() {
    return Math.floor(Math.random() * 100) + 1;
}
document.getElementById("answer").value = "";

}

renderForm();
 let correct = 0;
    let fails = 0;


function Next(){
    renderForm();
    document.getElementById("result").innerHTML = " ";}


function Check() {
    let answer = parseInt(document.getElementById("answer").value); 
    let result;
   

    if (document.getElementById("operation").textContent == "+") {
        result = parseInt(document.getElementById("first_num_input").value) + parseInt(document.getElementById("second_num_input").value);
    } else if (document.getElementById("operation").textContent == "-") {
        result = result = parseInt(document.getElementById("first_num_input").value) - parseInt(document.getElementById("second_num_input").value);
    }

    if (answer == result) {
        document.getElementById("result").innerHTML = "Yes!";
        correct+=1;
        document.getElementById("correct").innerHTML = correct;
    } else {
        document.getElementById("result").innerHTML = "No((";
        fails=fails+1;
        document.getElementById("fails").innerHTML = fails;
    }
}
