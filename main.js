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
  
  var calculator = new Calculator;

  function createCalc() {
      var wrapper = document.getElementById('wrapper');
      console.log(wrapper);
      var calc = document.createElement('div');
      calc.className = "calculator";
      wrapper.appendChild(calc);
      console.log("load");
      var display = document.createElement("input");
      display.className = "display";
      display.id = "display";
      display.disabled = true;
      calc.appendChild(display);
      console.log(display);
      var numOfRows = 5;
      var btnNames = ["CE", "C" , "7", "8", "9", "*", "4", "5" , "6", "-", "1", "2","3" , "+", "0", ".", "=", "/"];
      var btnsInRow = 4;
      var btnNameIndex = 0;
      for(var i = 0; i < numOfRows; i++){

        var calcRow = document.createElement('div');
        calcRow.className = "calc__row";
        calc.appendChild(calcRow);

        if(i === 0){
            btnsInRow = 2;
        } else {
            btnsInRow = 4;
        };

        for(var j = 0; j < btnsInRow; j++) {
            var calcBtns = document.createElement('button');
            calcBtns.className = "btn";
            calcBtns.innerHTML = btnNames[btnNameIndex];
            calcRow.appendChild(calcBtns);
            btnNameIndex ++;
        }
        
      };
        


  }

  document.addEventListener("DOMContentLoaded", createCalc);

  var addCalcBtn = document.getElementById('add');

  addCalcBtn.addEventListener("click", createCalc);