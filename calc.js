let firstNumber = document.getElementById("First");
let secondNumber = document.getElementById("second");
let thirdNumber = document.getElementById("third");



function slove(){
    console.log(firstNumber.value);
    console.log(secondNumber.value);
    console.log(thirdNumber.value);
    let result = document.getElementById("result");
    if(secondNumber.value == "+"){
       result.innerHTML = parseInt(firstNumber.value) + parseInt(thirdNumber.value);
    }else if(secondNumber.value == "-"){
        result.innerHTML = parseInt(firstNumber.value) - parseInt(thirdNumber.value);
    }else if(secondNumber.value == "*"){
        result.innerHTML = parseInt(firstNumber.value) * parseInt(thirdNumber.value);
    }else if(secondNumber.value == "/"){
        result.innerHTML = parseInt(firstNumber.value) / parseInt(thirdNumber.value);
    }
}