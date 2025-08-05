function add (a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){ return a*b;}
function divide(a,b){return a/b};

let string ="";
let lastNumber = 0;
let sign = "";
let flagSign = 0;

const btn = document.querySelectorAll('#unu, #doi, #trei, #patru, #cinci, #sase, #sapte, #opt, #noua, #plus, #scadere, #fractie, #imultire');
// const plus = document.querySelector("#plus");
const semne = document.querySelector("#plus, #scadere"); // TODO: implementare pentru toate semnele
const display = document.querySelector(".display");
const egal = document.querySelector("#egal");

function show(num, flag, semn = ""){
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
    
  if(flagSign === 2){
    flagSign=1;
    string += sign+btn[i].value;
    console.log(string);
    show(btn[i].value);
  }
  else{
    string +=btn[i].value; 
    console.log(string);
    show(btn[i].value);
  }

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

plus.addEventListener("click",() =>{
  flagSign++;
  if(flagSign === 2){
  let a = Number(nr(string)[0]);
  let b = Number(nr(string)[1]);
  if(lastNumber != 0) 
    a = lastNumber;
  calcul(a,b);
  show(lastNumber,true, sign);
  show(sign);
  // sign = "";
  string = ""; //am stat mult la functioa asta si trebuie doar da adaug linia asta

}
});

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

