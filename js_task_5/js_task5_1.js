function calcIt() {
  var result = 0;

  var calculator = {
    add: function(a) {
      result += a;
      var func = function(b) {
        return result = b+a;
      };
      return func;
    },
    subtract: function(b) {
        result -= a;
        var func = function(a) {
          return (result -= a);
        };
        return func;
    },
    divide: function(b) {
      return (result /= b);
    },
    mutiply: function(a) {
      return (result *= a);
    },
    getResult: function() {
      return result;
    }
  };

  return calculator;
}

var calculate = calcIt();

// calculate();

// console.log(calculate().getResult());
// console.log(calculate().add(4));
// console.log(calculate().getResult());
// console.log(calculate().subtract(4));

// calculate.subtract(4);



console.log(calculate.add(4)(3));
