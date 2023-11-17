const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

const h1 = document.querySelector("#h1");



function  calc(input1, input2, operator){
    switch (operator) {
        case "+":
            return +input1 + +input2;
        case "-":
            return input1 - input2;
        case "*":
            return input1 * input2; 
        case "/":
            return input1 / input2;
                
    }

}
btn1.addEventListener("click", function(){
    result = calc(input1.value, input2.value, "+").toFixed(2);
    h1.innerHTML = result;
});
btn2.addEventListener("click", function(){
    result = calc(input1.value, input2.value, "-").toFixed(2);
    h1.innerHTML = result;
})
btn3.addEventListener("click", function(){
    result = calc(input1.value, input1.value, "*").toFixed(2);
    h1.innerHTML = result;
})
btn4.addEventListener("click", function(){
    result = calc(input1.value, input2.value, "/").toFixed(2);
    h1.innerHTML = result;
})


btn5.addEventListener("click", function(){
    input1.value = " ";
    input2.value = " ";
    h1.innerHTML = "0.00";
})




