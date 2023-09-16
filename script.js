'use strict';
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const result = document.getElementById('result');

btn1.addEventListener('click', function(){
  // parseFloat function is used to parse a string and convert it into a floating-point number
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter valid numbers');
  } else {
    result.textContent = num1 + num2;
  }
});

btn2.addEventListener('click', function(){
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter valid numbers');
  } else {
    result.textContent = num1 - num2;
  }
});

btn3.addEventListener('click', function(){
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter valid numbers');
  } else {
    result.textContent = num1 * num2;
  }
});

btn4.addEventListener('click', function(){
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter valid numbers');
  } else {
    result.textContent = num1 / num2;
  }
});







