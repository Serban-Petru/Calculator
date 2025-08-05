let string = "";
let lastNumber = 0;
const btn = document.querySelectorAll('#unu, #doi, #trei, #patru, #cinci, #sase, #sapte, #opt, #noua, #plus');
const plus = document.querySelector("#plus");
const display = document.querySelector(".display");
const egal = document.querySelector("#egal");


function show(num,flag){
 
  
  const digits = document.createElement("p");
  if(flag === true)
    display.textContent="";
  digits.textContent = num;
  display.appendChild(digits);

}


for(let i = 0; i < btn.length; i++){ 
  btn[i].addEventListener("click",() =>{ 
  string +=btn[i].value;
  show(btn[i].value,false);
});
}

egal.addEventListener("click",() =>{
  let array  = string.split("");
  calcul(array);
  show(lastNumber,true);
  array="";
  string="";
});




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
    lastNumber = add(Number(nr(string,"+")[0]), Number(nr(string,"+")[1]));
    console.log(lastNumber);
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