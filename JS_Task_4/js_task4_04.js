 function capAllWord(str) {

     var strToArr = str.split(" ");
     var cappedWord = "";
     var newStr = "";

     for (var i = 0; i < strToArr.length; i++) {

         var word = strToArr[i];
         cappedWord = word[0].toUpperCase() + word.slice(1);
         newStr += cappedWord + " ";

     }

     return newStr;

 }

 console.log(capAllWord("i love dogs"));