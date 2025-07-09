let num = [1, 2, 3, 4, 5];
num.forEach(power);

function double(element, index, array) {
    array[index] = element * 2;
}

function power(element,index,array){
    array[index]=Math.pow(element,2);
}

function display(element) {
    console.log(element);
}
num.forEach(display);  

// / second example

let fruits = ["apple","orange","banana","coconut"];
fruits.forEach(upperCase);

function upperCase(element, index,array){
    array[index]=element.toUpperCase();
}

function display(element){
    console.log(element);
}
fruits.forEach(display);

// third example 

let fruits = ["APPLE","ORANGE","BANANA","COCONUT"];
 fruits.forEach(lowerCase);

function lowerCase(element,  index,array){
    array[index]=element.toLowerCase();

}

 function display(element){
     console.log(element);
 }
fruits.forEach(display);








