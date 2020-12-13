"use strict";

const button = {
  incrBtn: document.querySelector('button[data-action= "increment"]'),
  decrBtn: document.querySelector('button[data-action= "decrement"]'),
  counterValue: document.querySelector('#value'),
  currentValue: 0,
};


const increment = function (){
    button.currentValue += 1;
    getValue();
}
const decrement = function (){
    button.currentValue -= 1;
    getValue();
}
const getValue = function () {
    button.counterValue.textContent = button.currentValue;
}
button.incrBtn.addEventListener('click', () => increment());
button.decrBtn.addEventListener('click', () => decrement());