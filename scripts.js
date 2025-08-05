function add (a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){ return a*b;}
function divide(a,b){return a/b};

let string ="";
let lastNumber = 0;
let sign = "";

const btn = document.querySelectorAll('#unu, #doi, #trei, #patru, #cinci, #sase, #sapte, #opt, #noua, #plus, #scadere, #fractie, #imultire');
const display = document.querySelector(".display");
const egal = document.querySelector("#egal");

function show(num, flag){
  const digits = document.createElement("p");
  if(flag === true){
    display.textContent = lastNumber;
    return;
  }
  digits.textContent = num;
  display.appendChild(digits);
}



for(let i = 0; i < btn.length; i++){ 
  btn[i].addEventListener("click",() =>{ 
  string +=btn[i].value;
  show(btn[i].value);
});
}

function calcul(a,b){
  switch(sign){
    case "+": lastNumber = add(a,b);break;
    case "-": lastNumber = subtract(a,b);break;
    case "/": lastNumber = divide(a,b);break;
    case "*": lastNumber = multiply(a,b);break;
  }
}

egal.addEventListener("click",() =>{
  let a = Number(nr(string)[0]);
  let b = Number(nr(string)[1]);
  if(lastNumber != 0) 
    a = lastNumber;
  calcul(a,b);
  show(lastNumber,true);
  sign = "";
  string = ""; //am stat mult la functioa asta si trebuie doar da adaug linia asta
});

let nr= function splitByOperator(str) {
  let originalArray = str.split("");
  sign = originalArray.find(char => ["+","-","*","/"].includes(char)); //this line if from Chatgpt:(
  return str.split(sign);
}

