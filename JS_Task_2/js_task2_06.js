function checkNums(num) {
    var divWithoutRem = 0;
    if (num > 1000) {
        return "Введите число менее 1000."
    } else {
        for (var i = 2; i <= num; i++) {
            if (num % i === 0) {
                divWithoutRem++;
                if (divWithoutRem >= 2) {
                    return "Число " + num + " - составное число."
                }
            }
        }
        if (divWithoutRem < 2) return "Число " + num + " - простое число.";
    }
}

console.log(checkNums(27));