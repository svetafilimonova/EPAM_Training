function delSpace(str) {
    var trimmedStr = str.trim();
    return trimmedStr;

}

var myStr = "        Hi!     ";

console.log(myStr);
console.log(delSpace(myStr));