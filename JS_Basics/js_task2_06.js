function checkNums(num) {

    if (num > 1000) {
        return "Введите число менее 1000"
    } else {
        var dividers = [2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < dividers.length; i++) {

            if (num % dividers[i] === 0 && num != dividers[i]) {
                return "Число " + num + " - составное число"
            } else {
                return "Число " + num + " - простое число"
            }
        }
    }
}

console.log(checkNums(13));