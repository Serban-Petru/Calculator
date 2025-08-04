// let string = prompt();




let array  = string.split("");

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
    console.log(undefined);

}