function debounce(func, time) {
    var timerId = null;

    return function () {
        if (timerId) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(func, time);

    };
};


// debounce(someFunc,5000);

function someFunc() {
    console.log("click");
};


// console.log(3);

var btn = document.querySelector(".btn");

console.log(btn);
btn.addEventListener("click", debounce(someFunc, 2000));


function g() {
    return 10;
}

f('123', g());

function f(a, b) {
    return a + b;
}