'use strict'

const input1 = document.getElementById(`value1`);
const input2 = document.getElementById(`value2`);
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const enterButton = document.getElementById("enterButton");
const resetButton = document.getElementById("resetButton");
const clearButton = document.getElementById("clearButton");
const answerList = document.getElementById("answerList");
let value1 = 0;
let value2 = 0;

// Memory
let answer = 0;
let output = "";


let addToList = message => {
    let i = document.createElement('li');
    i.innerText = message;
    answerList.appendChild(i);
};

addButton.onclick = () => {
    value1 = parseInt(input1.value);
    value2 = parseInt(input2.value);
    answer = value1 + value2;
    output = (`${input1.value} + ${input2.value} = ${answer}`);
};


subtractButton.onclick = (value1, value2) => {
    value1 = parseInt(input1.value);
    value2 = parseInt(input2.value);
    answer = value1 - value2;
    output = (`${input1.value} - ${input2.value} = ${answer}`);
};

multiplyButton.onclick = (value1, value2) => {
    value1 = parseInt(input1.value);
    value2 = parseInt(input2.value);
    answer = value1 * value2;
    output = (`${input1.value} x ${input2.value} = ${answer}`);
};

divideButton.onclick = (value1, value2) => {
    value1 = parseInt(input1.value);
    value2 = parseInt(input2.value);
    answer = value1 / value2;
    output = (`${input1.value} / ${input2.value} = ${answer}`);
};

resetButton.onclick = () => {
    answer = 0;
    output = "";
    document.getElementById('calcForm').reset();

};

enterButton.onclick = () => {
    addToList(output);
};

clearButton.onclick = () => {
    answerList.innerHTML = '';
};