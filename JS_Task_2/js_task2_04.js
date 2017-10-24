// function checkTheSame(arr) {
//     var result = 0;
//     for (var i = 0; i < arr.length; i++) {

//         if (arr[i - 1] === arr[i]) {
//             result = true;
//         } else {
//             result = false;
//         }
//     }

//     return result
// }

// var someArr = [1, 1, 3];

// console.log(checkTheSame(someArr));



// Вариант с forEach

// function equalValues(array) {

//     var result = false;

//     function checkTheSame(elem, index, arr) {

//         if (arr[index - 1] === arr[index]) {
//             result = true;
//         } else {
//             result = false;
//         }
//     }


//     array.forEach(checkTheSame);
//     console.log(result);
// }

// var someArr = [3, 5, 3];
// equalValues(someArr);


function equalValues(array) {

    var result = false;
    var i = 0;

    while (array[i] !== undefined) {


        if (array[i - 1] === array[i]) {
            result = true;
        } else {
            result = false;
        }

        i++;

    }

    console.log(result);
}

var someArr = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
var myArray = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];

equalValues(someArr);