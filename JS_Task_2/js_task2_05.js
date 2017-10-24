// function findMaxVal(arr) {

//     var maxVal = arr[0];

//     for(var i=0; i < arr.length; i++){

//         if(maxVal < arr[i] ){
//             maxVal = arr[i];
//         }
//     }
//     return maxVal += " - макисмальное значение"
// }

// var myArray = [10, 200, 100];

// console.log(findMaxVal(myArray));



// C forEach 

// function findMaxVal(elem, index, arr) {

//         if(maxVal < arr[index] ){
//             maxVal = arr[index];
//         } 
// }

// var myArray = [10000000, 200, 500];
// var maxVal = myArray[0];

// myArray.forEach(findMaxVal);
// console.log(maxVal += " - макисмальное значение");



// function calcMax(array) {

//     function findMaxVal(elem, index, arr) {

//         if (maxVal < arr[index]) {
//             maxVal = arr[index];
//         }
//     }

//     var maxVal = array[0];

//     array.forEach(findMaxVal);
//     console.log(maxVal += " - макисмальное значение");

// }

// var myArray = [100000, 200, 500];

// calcMax(myArray);


function calcMax(array) {

    var i = 0;
    var maxVal = array[0];

    while (array[i] !== undefined) {

        if (maxVal < array[i]) {
            maxVal = array[i];
        }
        i++;
    }
    console.log(maxVal += " - макисмальное значение");

}

var myArray = [100000, 200, 500000000000, 100000, 200, 500, 100000, 20000000000000, 500];

calcMax(myArray);