function trimAString(str, num) {
    var index = num - 3;
    var newStr = str.slice(0, index) + "...";
    return newStr;
}

console.log(trimAString("ilovedogs", 5));