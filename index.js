const numbers = document.querySelectorAll('.numbers')
const result = document.querySelector('.result span')
const signs = document.querySelectorAll('.sign')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const negative = document.querySelector('.negative')
const peresent = document.querySelector('.peresent ')



let firstValue = "";
let isFIrstValue = false;
let secundValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i = 0;i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFIrstValue === false) {
            getFirstValue(atr)
        }
        if(isSecondValue == false){
            getSecondValue(atr)
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if(firstValue != "" && sign != ""){
        secundValue += el;
        result.innerHTML = secundValue;
        secundValue = +secundValue;
    }
}

function getSign() {
    for(let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click' , (e) => {
            sign = e.target.getAttribute('value')
            isFIrstValue = true
        })
    }
}

getSign()

equals.addEventListener('click' , () => {
    result.innerHTML = "";
    if(sign === '+'){
        resultValue = firstValue + secundValue
    } else if(sign === "-") {
        resultValue = firstValue - secundValue;
    }else if(sign === "x"){
        resultValue = firstValue  * secundValue;
    }else if (sign === '/'){
        resultValue = firstValue / secundValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secundValue = "";

    checkResultLength();
})

function checkResultLength() {
    resultValue = JSON.stringify(resultValue)

    if(resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5)
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = -firstValue;
        firstValue = resultValue
    }
    if(firstValue != "" && secundValue != "" && sign != ""){
        resultValue = -resultValue
    }
    result.innerHTML = resultValue  
})


peresent.addEventListener('click', () => {
    resultValue.innerHTML = "";
    if(firstValue != ""){
        resultValue = firstValue / 100;
        firstValue = resultValue
    }
    if(firstValue != "" && secundValue != "" && sign != ""){
        result = resultValue / 100;
    }
    result.InnerHTML = resultValue
})

clear.addEventListener('click', () => {
    result.innerHTML = 0

    firstValue = "";
    isFIrstValue = false;
    secundValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0
})