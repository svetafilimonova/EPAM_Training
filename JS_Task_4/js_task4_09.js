function countSymbol(str) {

    var s = "";

    while (str.length > 0) {
        var char = str[0];
        var reg = new RegExp(char, "gi");
        var symAmount = str.match(reg).length;
        str = str.replace(reg, "");
        s += char + ":" + symAmount + " ";
    }
    return s;
}

var mystr = "asadgggghatesa";
console.log(countSymbol(mystr));