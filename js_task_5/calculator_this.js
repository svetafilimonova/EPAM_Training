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

// var calculate = calcIt;

// calculate();

// console.log(calculate().getResult());
// console.log(calculate().add(4));
// console.log(calculate().getResult());
// console.log(calculate().subtract(4));

// calculate.subtract(4);



// console.log(calculate.add(4)(3));


// ******************************THIS**********************************************

// function Calculator() {
  
//   var result = 0;
  
//   this.add = function(a) {
//      result += a;
//     var func = function(b){
//       return result = b + a ;
//     };
//     return func;
//   },


//   this.subtract =  function(a){
//     result -= a;
//     var func = function(b) {
//     return result = a - b;
//     };
//     return func;
//      },

//   this.mult =  function(a){
//     result *= a;
//     var func = function(b) {
//     return result = a * b;
//     };
//     return func;
//     },

//   this.div =  function(a){
//     result /= a;
//     var func = function(b) {
//     return result = a / b;
//     };
//     return func;
//     },
  

//   this.check = function(){
//     return result;
//   }
// }

// var calc = new Calculator;

// // console.log(calc.add(4));
// // console.log(calc.check());
// // console.log(calc.add(4)(5));
// // console.log(calc.subtract(4));
// console.log(calc.div(5)(3));
// console.log(calc.mult(5)(3));
// console.log(calc.check());

// ****************************Version 2***************************

function Calculator() {
  
  var result = 0;
  
  this.add = function(a) {
     result += a;
    var func = function(b){
      return result = b + a ;
    };
    return func;
  },


  this.subtract =  function(a){
    result -= a;
    var func = function(b) {
    return result = a - b;
    };
    return func;
     },

  this.mult =  function(a){
    result *= a;
    var func = function(b) {
    return result = a * b;
    };
    return func;
    },

  this.div =  function(a){
    result /= a;
    var func = function(b) {
    return result = a / b;
    };
    return func;
    },
  

  this.check = function(){
    return result;
  }
}

var calc = new Calculator;

// console.log(calc.add(4));
// console.log(calc.check());
// console.log(calc.add(4)(5));
// console.log(calc.subtract(4));
<<<<<<< HEAD
console.log(calc.div(5)(3));
console.log(calc.mult(5)(3));
=======
console.log(calc.div(3));
>>>>>>> 2dff8d8586e20aecf618dbc12fb0e018cea99a81
console.log(calc.check());
