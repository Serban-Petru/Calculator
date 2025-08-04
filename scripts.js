let string = prompt();
let array  = string.split("");

function add (a,b){return a+b;}

function subtract(a,b){return a-b;}

function multiply(a,b){ return a*b;}

function divide(a,b){return a/b};

function spliting(array_split){
    return array_split.split("-");
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

switch (String(array.filter(returnSign))) {
  case "+":
    console.log(add(Number(spliting(string)[0]), Number(spliting(string)[1])));
    break;
  case "-":
    console.log(subtract(Number(spliting(string)[0]), Number(spliting(string)[1])));
    break;
  case "*":
    console.log(multiply(Number(spliting(string)[0]), Number(spliting(string)[1])));
    break;
  case "/":
    console.log(divide(Number(spliting(string)[0]), Number(spliting(string)[1])));
    break;
  default:
    console.log(undefined);

}