function importWord(str, wrd, num) {
    var strToArr = str.split(' ');
    var index = num + 1;
    var addWrd = strToArr.splice(index, 0, wrd);
    var newStr = strToArr.join(" ");
    return newStr;
}

console.log(importWord("I love dogs", "really", 0));