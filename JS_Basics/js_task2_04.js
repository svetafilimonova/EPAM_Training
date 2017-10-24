function checkTheSame(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {

        if (arr[i - 1] === arr[i]) {
            result = true;
        } else {
            result = false;
        }
    }

    return result
}

var someArr = [1, 1, 3];

console.log(checkTheSame(someArr));