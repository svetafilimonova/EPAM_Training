// var numbers = function (someArray) {

//     var oddNum = 0;
//     var evenNum = 0;
//     var zeroNum = 0;
//     var resultArr = [];


//     for (var i = 0; i < someArray.length; i++) {


//         if (someArray[i] === 0) {
//             zeroNum++;
//         } else {
//             if (someArray[i] % 2 === 0) {
//                 evenNum++;
//             } else {
//                 oddNum++;
//             }
//         }

//     }

//     resultArr.push(evenNum);
//     resultArr.push(oddNum);
//     resultArr.push(zeroNum);

//     var outputWithoutZero = "Количество четных чисел - " + resultArr[0] +
//         ", количество нечетных чисел - " + resultArr[1];
//     var outputWithZero = "Количество четных чисел - " + resultArr[0] +
//         ", количество нечетных чисел - " + resultArr[1] + ", количество нулей: " + resultArr[2];

//     if (zeroNum > 0) {
//         console.log(outputWithZero);
//     } else {
//         console.log(outputWithoutZero);
//     }


// }

// var inpArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 0, 0];

// numbers(inpArray);


                                // Вариант с forEach

// function defineNums(array){

// var oddNum = 0;
// var evenNum = 0;
// var zeroNum = 0;
// var resultArr = [];


// var numbers = function (element, index, array) {
    
//             if (array[index] === 0) {
//                 zeroNum++;
//             } else {
//                 if (array[index] % 2 === 0) {
//                     evenNum++;
//                 } else {
//                     oddNum++;
//                 }
//             }
//     }


//     array.forEach(numbers);

//     resultArr.push(evenNum);
//     resultArr.push(oddNum);
//     resultArr.push(zeroNum);

//     var outputWithoutZero = "Количество четных чисел - " + resultArr[0] +
//         ", количество нечетных чисел - " + resultArr[1];
//     var outputWithZero = "Количество четных чисел - " + resultArr[0] +
//         ", количество нечетных чисел - " + resultArr[1] + ", количество нулей: " + resultArr[2];


//     if (zeroNum > 0) {
//        return console.log(outputWithZero);
//     } else {
//         return console.log(outputWithoutZero);
//     }

// }
    
    
// var inpArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 13, 0, 0];
// defineNums(inpArray);


function defineNums(array){

var oddNum = 0;
var evenNum = 0;
var zeroNum = 0;
var i = 0;


 while(array[i] !== undefined) {

    i++;
            if (array[i] === 0) {
                zeroNum++;
            } else {
                if (array[i] % 2 === 0) {
                    evenNum++;
                } else {
                    oddNum++;
                }
            }
    }

    var output = "Количество четных чисел - " + evenNum +
        ", количество нечетных чисел - " + oddNum;
     
    if (zeroNum > 0) {
        return console.log(output + ", количество нулей:  " + zeroNum);
    } else {
        return console.log(output);
    }

}
    
    
var inpArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 0, 0];
defineNums(inpArray);

