var numbers = function (someArray) {

    var oddNum = 0;
    var evenNum = 0;
    var zeroNum = 0;
    var resultArr = [];


    for (var i = 0; i < someArray.length; i++) {


        if (someArray[i] === 0) {
            zeroNum++;
        } else {
            if (someArray[i] % 2 === 0) {
                evenNum++;
            } else {
                oddNum++;
            }
        }

    }

    resultArr.push(evenNum);
    resultArr.push(oddNum);
    resultArr.push(zeroNum);

    var outputWithoutZero = "Количество четных чисел - " + resultArr[0] +
        ", количество нечетных чисел - " + resultArr[1];
    var outputWithZero = "Количество четных чисел - " + resultArr[0] +
        ", количество нечетных чисел - " + resultArr[1] + ",количество нулей:" + resultArr[2];

    if (zeroNum > 0) {
        console.log(outputWithZero);
    } else {
        console.log(outputWithoutZero);
    }


}


var inpArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 0, 0];

numbers(inpArray);