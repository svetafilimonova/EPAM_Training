function capitalize(str) {
    var firstCap = str[0].toUpperCase() + str.slice(1);
    return firstCap;
}

var myStr = "hello!";
console.log(capitalize(myStr));