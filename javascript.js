
const operate = (operator, num1, num2) => {
    let total = 0;
    if(operator == 'plus'){
        total = num1 + num2;
    } else if(operator == 'minus'){
        total = num2 - num2;
    } else if(operator == 'multiply'){
        total = num1 * num2;
    } else if(operator == 'divide'){
        total = num1 / num2;
    }
    return total;
}
// console.log(operate('plus', 5, 9)) test the operate function and will return the correct number
// console.log(total);


let opSymbol = '';
let amount = '';
let firstIntValue = '';
let secondIntValue = '';

function selecting(operator) {
    if(operator === ''){
        firstIntValue =  amount;
        console.log(firstIntValue)  
    } else {
        document.querySelector('#display').innerHTML = '';
        amount = '';
        secondIntValue = amount;
        console.log(secondIntValue)
    }

}


//was going to try and make a function switch between the first and second values to be added
//but decided to just attach it to the button.



// document.querySelector('#zero').addEventListener('click', () => {
//     let newValue = document.querySelector('#display').innerHTML;
//     let value = newValue + 0;
//     document.querySelector('#display').innerHTML = value;
// })
document.querySelector('#one').addEventListener('click', () => {
    let newValue = document.querySelector('#display').innerHTML;
    let value = newValue + 1;
    document.querySelector('#display').innerHTML = value;
    amount += 1;
})
// document.querySelector('#two').addEventListener('click', () => {
//     let newValue = document.querySelector('#display').innerHTML;
//     let value = newValue + 2;
//     document.querySelector('#display').innerHTML = value;
// })
// document.querySelector('#three').addEventListener('click', () => {
//     let newValue = document.querySelector('#display').innerHTML;
//     let value = newValue + 3;
//     document.querySelector('#display').innerHTML = value;
// })
// document.querySelector('#four').addEventListener('click', () => {
//     let newValue = document.querySelector('#display').innerHTML;
//     let value = newValue + 4;
//     document.querySelector('#display').innerHTML = value;
// })
// document.querySelector('#five').addEventListener('click', () => {
//     let newValue = document.querySelector('#display').innerHTML;
//     let value = newValue + 5;
//     document.querySelector('#display').innerHTML = value;
// })
// document.querySelector('#six').addEventListener('click', () => {
//     let newValue = document.querySelector('#display').innerHTML;
//     let value = newValue + 6;
//     document.querySelector('#display').innerHTML = value;
// })
// document.querySelector('#seven').addEventListener('click', () => {
//     let newValue = document.querySelector('#display').innerHTML;
//     let value = newValue + 7;
//     document.querySelector('#display').innerHTML = value;
// })
// document.querySelector('#eight').addEventListener('click', () => {
//     let newValue = document.querySelector('#display').innerHTML;
//     let value = newValue + 8;
//     document.querySelector('#display').innerHTML = value;
// })
// document.querySelector('#nine').addEventListener('click', () => {
//     let newValue = document.querySelector('#display').innerHTML;
//     let value = newValue + 9;
//     document.querySelector('#display').innerHTML = value;
// })


//functional button
document.querySelector('#clear').addEventListener('click', () => {
    document.querySelector('#display').innerHTML = '';
})

document.querySelector('#add').addEventListener('click', () => {
    selecting('plus');
    return opSymbol = 'plus';
})

document.querySelector('#equals').addEventListener('click', () => {
    let num1 = firstIntValue;
    let num2 = secondIntValue
    let final = operate(opSymbol, num1, num2);
    document.querySelector('#display').innerHTML = final;
    console.log(final)
})
