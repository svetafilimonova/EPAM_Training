var Calculator = function () {

  var result = 0;

  this.add = function (a) {
      result += parseFloat(a);
      var func = function (b) {
        return result = parseFloat(b) + parseFloat(a);
      };
      return func;
    },

// К остальным не нужен parseFloat они и так приводятся к числу
    this.subtract = function (a) {
      result -= a;
      var func = function (b) {
        return result = a - b;
      };
      return func;
    },

    this.mult = function (a) {
      result *= a;
      var func = function (b) {
        return result = a * b;
      };
      return func;
    },

    this.div = function (a) {
      result /= a;
      var func = function (b) {
        if (parseFloat(b) === 0) {
          return result = "Не дели на 0!";
        } else {
          return result = a / b;
        }
        
      };
      return func;
    },


    this.getResult = function () {
      return result;
    },
// Рисуем калькулятор
    this.init = function () {
      var wrapper = document.querySelector('.wrapper');
      this.calc = document.createElement('div');
      this.calc.className = "calculator";
      wrapper.appendChild(this.calc);
      var display = document.createElement("input");
      display.className = "display";
      display.disabled = true;
      display.type = "text";
      display.value = "0";
      this.calc.appendChild(display);
      
      var btnNames = [{
          title: 'CE',
          type: 'cancel'
        },
        {
          title: 'C',
          type: 'cancel'
        },
        {
          title: '7',
          type: 'number'
        },
        {
          title: '8',
          type: 'number'
        },
        {
          title: '9',
          type: 'number'
        },
        {
          title: '*',
          type: 'operation'
        },
        {
          title: '4',
          type: 'number'
        },
        {
          title: '5',
          type: 'number'
        },
        {
          title: '6',
          type: 'number'
        },
        {
          title: '-',
          type: 'operation'
        },
        {
          title: '1',
          type: 'number'
        },
        {
          title: '2',
          type: 'number'
        },
        {
          title: '3',
          type: 'number'
        },
        {
          title: '+',
          type: 'operation'
        },
        {
          title: '0',
          type: 'number'
        },
        {
          title: '.',
          type: 'operation'
        },
        {
          title: '=',
          type: 'operation'
        },
        {
          title: '/',
          type: 'operation'
        },
      ];

      var numOfRows = 5;
      var btnsInRow = 4;
      var btnCounter = 0;
      // лучше не придумала чем добавить счетчик
      for(var i = 0; i < numOfRows; i++){
        var calcRow = document.createElement('div');
        calcRow.className = "calc__row";
        this.calc.appendChild(calcRow);
    
        if (i === 0) {
            btnsInRow = 2;
        } else {
            btnsInRow = 4;
        };

        for(var j = 0; j < btnsInRow; j++) {
          var calcBtns = document.createElement('button');
          calcBtns.innerHTML = btnNames[btnCounter].title; 

          if (btnNames[btnCounter].type === 'number') {
            calcBtns.className = 'btn number';
          } else if (btnNames[btnCounter].type === 'cancel') {
            calcBtns.className = 'btn cancel';
          } else if (btnNames[btnCounter].type === 'operation') {
            calcBtns.className = 'btn ops';
          };
            
            switch (calcBtns.innerHTML) {
                case 'CE':
                calcBtns.classList.add('clear_op');
                break;
                case 'C':
                calcBtns.classList.add('clear');
                break;
                case '+':
                calcBtns.classList.add('sum');
                break;
                case '-':
                calcBtns.classList.add('subtr');
                break;
                case '=':
                calcBtns.classList.add('result');
                break;
                case '*':
                calcBtns.classList.add('multiply');
                break;
                case '/':
                calcBtns.classList.add('divide');
                break;
                case '.':
                calcBtns.classList.add('decimal');
                break;
            };
  
          calcBtns.type = "button";
          calcRow.appendChild(calcBtns);
          btnCounter++;
      };

    };

    this.calc.addEventListener('click', function(e) {
      if (!e.target.classList.contains('btn')) return;
      // если это не кнопка -  ничего не делаем
    
      var btnClass = e.target.className;
      var myDisplay = e.target.parentNode.parentNode.firstChild;
      var currentValue = 0;
    
      switch (btnClass) {
        case "btn number": 
          if (myDisplay.value === "0") {
            myDisplay.value = e.target.innerHTML;
          } else {
            myDisplay.value += e.target.innerHTML;
          }
          this.operands[this.currOperands] += e.target.innerHTML;
          this.isOperator = true;
          break;
    
          case "btn ops sum":
          if (this.isOperator){
            if (this.operands[0] !== "" && this.operands[1] !== "" ){
              this.currentFunc = this.add(this.operands[0])(this.operands[1]);
              currentValue = this.getResult();
              currentValue = this.currentFunc;
              myDisplay.value = currentValue;
              this.operands = [currentValue, ""];
              this.currentFunc =  this.add(this.operands[0]);
              
            } else {
              if(this.operands[0] !== ""){
                this.currentFunc = this.add(this.operands[0]);
              }
            }

            myDisplay.value += e.target.innerHTML;
            this.currOperands = 1;
            this.isOperator = false;
          }
          break;
          case "btn ops result" : 
          this.currentFunc(this.operands[1]);
          currentValue = this.getResult();
          myDisplay.value = currentValue;
          this.operands = [currentValue, ""];
          // operands = ["", ""];
          break;
          case "btn ops subtr":
          if (this.isOperator){
            if (this.operands[0] !== "" && this.operands[1] !== "" ){
              this.currentFunc = this.subtract(this.operands[0])(this.operands[1]);
              currentValue = this.getResult();
              currentValue = this.currentFunc;
              myDisplay.value = currentValue;
              this.operands = [currentValue, ""];
              this.currentFunc =  this.subtract(this.operands[0]);
              
            } else {
              if(this.operands[0] !== ""){
                this.currentFunc = this.subtract(this.operands[0]);
              }
            }

            myDisplay.value += e.target.innerHTML;
            this.currOperands = 1;
            this.isOperator = false;
          }
          break;
          case "btn ops multiply":
          if (this.isOperator){
            if (this.operands[0] !== "" && this.operands[1] !== "" ){
              this.currentFunc = this.mult(this.operands[0])(this.operands[1]);
              currentValue = this.getResult();
              currentValue = this.currentFunc;
              myDisplay.value = currentValue;
              this.operands = [currentValue, ""];
              this.currentFunc =  this.mult(this.operands[0]);
              
            } else {
              if(this.operands[0] !== ""){
                this.currentFunc = this.mult(this.operands[0]);
              }
            }

            myDisplay.value += e.target.innerHTML;
            this.currOperands = 1;
            this.isOperator = false;
          }
          break;
          case "btn ops divide":
          if (this.isOperator){
            if (this.operands[0] !== "" && this.operands[1] !== "" ){
              this.currentFunc = this.div(this.operands[0])(this.operands[1]);
              currentValue = this.getResult();
              currentValue = this.currentFunc;
              myDisplay.value = currentValue;
              this.operands = [currentValue, ""];
              this.currentFunc =  this.div(this.operands[0]);
              
            } else {
              if(this.operands[0] !== ""){
                this.currentFunc = this.div(this.operands[0]);
              }
          }
            myDisplay.value += e.target.innerHTML;
            this.currOperands = 1;
            this.isOperator = false;
          }
          break;
          case "btn cancel clear":
          myDisplay.value = "0";
          this.operands = ['', ''];
          this.currOperands = 0;
          this.currentFunc = 0;
          this.isOperator = true;
          break;
          case "btn cancel clear_op":
          myDisplay.value = "0";
          this.operands[1] = "0";
          break;
          case "btn ops decimal":
          if(myDisplay.value.toString().indexOf(".") === -1 && myDisplay.value === "0"){
            myDisplay.value += e.target.innerHTML;
            // this.operands[this.currOperands] += e.target.innerHTML;
            this.operands[0] = myDisplay.value;
            this.isOperator = true;

          } else if (this.operands[0].toString().indexOf(".") === -1  && this.operands[1] === ""){
              myDisplay.value += e.target.innerHTML;
              this.operands[0] += e.target.innerHTML;
              
  
          } else if ( this.operands[1] !== "" && this.operands[1].toString().indexOf(".") === -1){
            myDisplay.value += e.target.innerHTML;
            this.operands[1] += e.target.innerHTML;
        }
        break;
      }
    }.bind(this));

    return this.calc; 
    // ???
  },

  this.operands = ['', ''];
  this.currOperands = 0;
  this.currentFunc = 0;
  this.isOperator = true;
};


var allCalcs = [];
// Сохраняем все экземпляры калькуляторов

function initialize(){
  var firstCalc = new Calculator();
  firstCalc.init();
  allCalcs.push(firstCalc);

};
// Функция рисует калькуляторыб вызывая метод init и сохраняет их в массив

document.addEventListener("DOMContentLoaded", initialize);
var addCalcBtn = document.getElementById('add');
addCalcBtn.addEventListener('click', initialize);