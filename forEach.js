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


