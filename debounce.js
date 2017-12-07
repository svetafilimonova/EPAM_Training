function debounce(func,time){
    // console.log(1);

    return function(){
        var timerId = setTimeout(func,time);
    };
    clearTimeout(timerId);
};


// debounce(someFunc,5000);

function someFunc(){
    console.log(2);
};


// console.log(3);

var btn = document.querySelector(".btn");

console.log(btn);
btn.addEventListener("click",debounce(someFunc,3000));


function g(){
    return 10;
}

f('123', g());

function f(a,b){
    return a+b;
}




