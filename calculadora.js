var result = document.querySelector('.result');
var btns = document.querySelector('.buttons');
var ops = document.querySelectorAll('.operator');

var clearToggle = false;
var timeFlag = false;

var valStack = [];

var canOperate = false;

btns.addEventListener(click, function(e) {

    var resultValue = result.innerHTML;
    var btn = e.target;

    if(btn.className.indexOf("resultBtn")){
        init()
    }else if(btn.className.indexOf("number")){
        canOperate = true
        if(clearToggle){
            resultValue = "";
            clearToggle = false;
        }

        if(resultValue == '0' && btn.className.indexOf("dot") === -1){
            resultValue = "";
        }
        result.innerHTML = resultValue + btn.innerHTML;
    }else{
        clearToggle = true;
        if(canOperate){
            if(btn.innerHTML === '*'  || btn.innerHTML === '/')
        }
    }
})

function calculate(num1, num2, op){

    switch(op) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
        case '-':
            return parseFloat(num1) - parseFloat(num2);
        case '*':
            return parseFloat(num1) * parseFloat(num2);
        case '/':
            return parseFloat(num1) / parseFloat(num2);

    }
}

function init(){
    clearToggle = false;
    timeFlag = false;
    varStack = [];
    canOperate = false;

    result.innerHTML = "0";
}