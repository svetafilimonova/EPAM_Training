// function showArrayInfo(arr) {

//     var arrayLength = arr.length;

//     for( var i = 0; i<arr.length; i++) {
//         console.log(arr[i]);
//     }

//   var output = "Число элементов: " + arrayLength;

//   console.log(output);

// }

// var myArray = [1,2,3,4,5];

// showArrayInfo(myArray);

                            //Вариант с forEach 

// function arrOutput(array) {
//     var elementCounter = 0;

//     function showArrayInfo(element, index, array) {
//         elementCounter++;
//         console.log(array[index]);
//     }

//     array.forEach(showArrayInfo);
//     return console.log("Общее число элементов:" + elementCounter);
// }

// var myArray = [1, 2, 3, 4];
// arrOutput(myArray);

function arrOutput(array) {
    var i = 0;

    while(array[i] !== undefined){
        console.log(array[i]);
        i++;
    }

    return console.log("Общее число элементов:" + i);
    
}

var myArray = [1, 2, 3, 4];
arrOutput(myArray);

