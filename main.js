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
  };
  
  
  var calculator = new Calculator;


  function createCalc() {
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
            calcBtns.type = "button";
            calcBtns.innerHTML = btnNames[btnNameIndex];
            calcRow.appendChild(calcBtns);
            btnNameIndex ++;
            // console.log(calcBtns);
        }
        
      };
        
      
      
  };

  // console.log(calcRow);
 
  
  document.addEventListener("DOMContentLoaded", createCalc);
  document.addEventListener("DOMContentLoaded", getBtns);
  
  var calcWrapper = document.querySelector(".wrapper"); 
  console.log(calcWrapper);
  var addCalcBtn = document.getElementById('add');
  addCalcBtn.addEventListener("click", createCalc);
  
  // calcDisplay.value = 0;


calcWrapper.onclick = function(event) {
  var target = event.target;
  var calcDisplay = document.querySelector("input");
  
  console.log(calcDisplay);

  if(target.className ==="btn" && target.innerHTML.match(/[0-9]/)) {
    console.log("num");

    if(calcDisplay.value == 0)
    {calcDisplay.value = target.innerHTML;}
    else{calcDisplay.value += target.innerHTML;}

  }




};
  

  

function getBtns(){

  var rows = document.getElementsByClassName('calc__row');
  var btns = document.getElementsByClassName('btn');

  console.log(rows.length);
  console.log("btn lenght: " + btns.length);


  // for(var i = 0; i < btns.length; i++) {

  //   // console.log(btns[i].innerHTML);
    
  //   if(btns[i].innerHTML.match(/[0-9]/)){
      
  //     btns[i].addEventListener("click", function(e){
  //       console.log("num");
  //     });
  //   };



  // };
  // console.log(didgits);
  
};
  


  

