function hello(callback){
    console.log("hello");
    callback();
}
function goodBye(){
    console.log(" good bye ");
}

hello(goodBye);

// example 2 
function sum(callback , x,y){
    let result =x+y;
    callback(result);
}

function displayContent(result){
    console.log(result );
}

sum(displayContent,2,3);