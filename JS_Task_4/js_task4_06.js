function toCamelize(str) {

    var strToArr = str.split(" ");
    var cappedWord = "";
    var newStr = "";

    for (var i = 0; i < strToArr.length; i++) {

        var word = strToArr[i];

        if (i === 0) {

            var firstCamelized = strToArr[0].toLowerCase();

            newStr += firstCamelized;

        } else {
            cappedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
            newStr += cappedWord;
        }
    }

    return newStr;

}


console.log(toCamelize("CAMEL Case sTYLE"));