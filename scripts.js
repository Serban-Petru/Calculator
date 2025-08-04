let string = "";




const btn = document.querySelectorAll('#unu, #doi, #trei, #patru, #cinci, #sase, #sapte, #opt, #noua, #plus');
const plus = document.querySelector("#plus");

function show(num){ 
  const display = document.querySelector(".display");
  const digits = document.createElement("p");
  digits.textContent = num;
  display.appendChild(digits);
}


for(let i = 0; i < btn.length; i++){ 
  btn[i].addEventListener("click",() =>{ 
  string +=btn[i].value;
  show(btn[i].value);
});
}

egal.addEventListener("click",() =>{
  let array  = string.split("");
  calcul(array);
  array="";
  string="";
});




function add (a,b){return a+b;}

function subtract(a,b){return a-b;}

function multiply(a,b){ return a*b;}

function divide(a,b){return a/b};

let nr= function spliting(array_split,s){
  return array_split.split(s);
}

function returnSign(array){
    if(array === "+")
        return array;
    else if(array === "-")
        return array;
    else if(array === "*")
        return array;
    else if(array === "/")
        return array;
    else
        return undefined;

}

function calcul(array){ 
switch (String(array.filter(returnSign))) {
  case "+":
    console.log(add(Number(nr(string,"+")[0]), Number(nr(string,"+")[1])));
    break;
  case "-":
    console.log(subtract(Number(nr(string,"-")[0]), Number(nr(string,"-")[1])));
    break;
  case "*":
    console.log(multiply(Number(nr(string,"*")[0]), Number(nr(string,"*")[1])));
    break;
  case "/":
    console.log(divide(Number(nr(string,"/")[0]), Number(nr(string,"/")[1])));
    break;
  default:
    console.log("error");

}
}