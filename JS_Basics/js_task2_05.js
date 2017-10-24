function findMaxVal(arr) {
    // for(var i=0; i < arr.length; i++){


    // }

    var result = Math.max.apply(Math, arr);

    return result += " - макисмальное значение"
}

var myArray = [1, 2, 10];

console.log(findMaxVal(myArray));