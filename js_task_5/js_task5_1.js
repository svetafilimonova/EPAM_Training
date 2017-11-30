// function calcIt() {
//   var result = 0;

//   var calculator = {
//     add: function(a) {
//       result += a;
//       var func = function(b) {
//         return result = b + a;
//       };
//       return func;
//     },
//     subtract: function(b) {
//         result -= a;
//         var func = function(a) {
//           return (result -= a);
//         };
//         return func;
//     },
//     divide: function(b) {
//       return (result /= b);
//     },
//     multiply: function(a) {
//       return (result *= a);
//     },
//     getResult: function() {
//       return result;
//     }
//   };

//   return calculator;
// }

// var calculate = calcIt();

// calculate();

// console.log(calculate().getResult());
// console.log(calculate().add(4));
// console.log(calculate().getResult());
// console.log(calculate().subtract(4));

// calculate.subtract(4);



// console.log(calculate.add(4)(3));


// THIS

function Calculator() {
  
  // var result = 0;
  
  this.add = function(a) {
     var result = a;
    var func = function(b){
      return a + b;
    };
    return func;


  },

  this.subtract =  function(a){
  
    var func = function(b) {
    return (result -= b);
    };
    return func;
     }
}

var calc = new Calculator;

console.log(calc.add(4)(5));
