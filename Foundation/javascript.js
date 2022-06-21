// let btn = document.getElementById("btn");
// btn.addEventListener("click", alertMe);

// function alertMe(){
//     alert("The Button has been clicked!");
// }

let f1 = document.getElementById("add7");
f1.addEventListener("click", add7);

function add7(){
    let inputNum = Number(prompt("What is your number?"));
    console.log(inputNum+7);
}

let f2 = document.getElementById("multiply");
f2.addEventListener("click", multiply);

function multiply(){
    let input1 = Number(prompt("What is your first number?"));
    let input2 = Number(prompt("What is your second number?"));
    console.log(input1*input2);
}


let f3 = document.getElementById("capitalize");
f3.addEventListener("click", capitalize);

function capitalize(){
    let input = prompt("What is your text?");
    output = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    console.log(output);
}


let f4 = document.getElementById("lastLetter");
f4.addEventListener("click", lastLetter);

function lastLetter() {
    let input = prompt("What is your text?");
    console.log(`This text ends with a "${input.slice(-1)}"`);
}

