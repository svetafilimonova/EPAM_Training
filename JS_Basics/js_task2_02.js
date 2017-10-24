function showArrayInfo(arr) {

    var arrayLength = arr.length;

    for( var i = 0; i<arr.length; i++) {
        console.log(arr[i]);
    }

  var output = "Число элементов: " + arrayLength;
  
  console.log(output);

}

var myArray = [1,2,3,4,5];

showArrayInfo(myArray);
