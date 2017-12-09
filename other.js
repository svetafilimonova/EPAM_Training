var myCalcs = [];
var calcCounter = 0;
var Calculator = function(){
    
    var result = 0;
   
    this.add = function(a) {
       result += parseFloat(a);
      var func = function(b){
        return result = parseFloat(b) + parseFloat(a) ;
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
      // return result;
    }
  };


  
  
 
  // var operands = ["",""];
  // var currOperands = 0;
  // var currentFunc = null;
  // var isOperator = true;

  function createCalc() {

    var operands = ["",""];
    var currOperands = 0;
    var currentFunc = null;
    var isOperator = true;
    
    myCalcs.push(new Calculator());
    // var myCalc = new Calculator();
    //we got +1 calc now
    calcCounter++;
    var myCalc = myCalcs[calcCounter-1];
    
    // var anotherCalc = new Calculator();
    // myCalcs.push(new Calculator());
    
    var wrapper = document.querySelector('.wrapper');
    console.log(wrapper);
    var calc = document.createElement('div');
    calc.className = "calculator";
    wrapper.appendChild(calc);
    console.log("load");
    var display = document.createElement("input");
    display.className = "display";
    display.disabled = true;
    display.type = "text";
    display.value = "0";
    calc.appendChild(display);
    console.log(display);
    var numOfRows = 5;
    var btnNames = ["CE", "C" , "7", "8", "9", "*", "4", "5" , "6", "-", "1", "2","3" , "+", "0", ".", "=", "/"];
    var btnClasses = ["btn cancel", "btn cancel" , "btn number", "btn number", "btn number", "btn ops mult", "btn number", "btn number" , "btn number",
                      "btn ops subt", "btn number", "btn number","btn number" , "btn ops sum", "btn number", "btn decimal", "btn ops result", "btn ops division"];
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
          // calcBtns.className = "btn";
          calcBtns.className = btnClasses[btnNameIndex];
          calcBtns.type = "button";
          calcBtns.innerHTML = btnNames[btnNameIndex];
          calcRow.appendChild(calcBtns);
          btnNameIndex ++;
          // console.log(calcBtns);
      }
      
    };


// var btns = document.querySelectorAll(".btn");

var btns = document.querySelectorAll(".btn");

btns.forEach(function(element, index) {

  element.addEventListener("click", function(e){
    // if(e.target.className === "btn number"){
    //   var myDisplay = this.parentNode.parentNode.firstChild;

    //   if(myDisplay.value == 0)
    //   {myDisplay.value = this.innerHTML;}
    //   else{myDisplay.value += this.innerHTML;}

    //   operands[currOperands] += this.innerHTML;
    //   isOperator = true;

    // }

    // if(e.target.className === "btn op sum"){



    // }

    var btnClass = e.target.className;
    var myDisplay = this.parentNode.parentNode.firstChild;
    var currentValue = 0;

    switch (btnClass) {
      case "btn number" : 
      
        if(myDisplay.value == 0)
        {myDisplay.value = this.innerHTML;}
        else{myDisplay.value += this.innerHTML;}

        operands[currOperands] += this.innerHTML;
        isOperator = true;
        break;

        case "btn ops sum" :
        if (isOperator){
          if (operands[0] !== "" && operands[1] !== "" ){
            currentFunc = myCalc.add(operands[0])(operands[1]);
            currentValue = myCalc.check();
            currentValue = currentFunc;
            myDisplay.value = currentValue;
            operands = [currentValue, ""];
            currentFunc =  myCalc.add(operands[0]);
            
          } else {
            if(operands[0] !== ""){
              currentFunc = myCalc.add(operands[0]);
            }
          }
          // if ( typeof(currentFunc) === "function")
          // {
          //   
          // } 
          // else {
          //   currentValue = myCalc.add(operands[0])(operands[1]);
          //   myDisplay.value = currentValue;
          //   operands = [currentValue, ""];
          // }
          //currentFunc(operands[0]);
          myDisplay.value += this.innerHTML;
          currOperands = 1;
          isOperator = false;
        }
        break;
        case "btn ops result" : 
        console.log("mice");
        currentFunc(operands[1]);
        currentValue = myCalc.check();
        myDisplay.value = currentValue;
        operands = [currentValue, ""];
        // operands = ["", ""];
        
    }
    });
});


          
};


document.addEventListener("DOMContentLoaded", createCalc);
var addCalcBtn = document.getElementById('add');
addCalcBtn.addEventListener("click", createCalc);



