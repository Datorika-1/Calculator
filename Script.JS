const Plusins = document.querySelector('.JS-plus');
const Minus = document.querySelector('.JS-minus');
const Multiply = document.querySelector('.JS-multiply');
const Divide = document.querySelector('.JS-divide');
const inputins = document.querySelector('.JS-input');
const inputins1 = document.querySelector('.JS-input1');

let FirstValue = inputins
let SecondValue = inputins1

const Add = (cipars1, cipars2) =>{
    return cipars1 + cipars2
}

const Subtract = (cipars1, cipars2) =>{
    return cipars1 - cipars2
}

const Multiply = (cipars1, cipars2) =>{
    return cipars1 * cipars2
}

const Divide = (cipars1, cipars2) =>{
    return cipars1 / cipars2
}

plusins.addEventListener('click', () => {
    console.log(Add(FirstValue, SecondValue))
})
