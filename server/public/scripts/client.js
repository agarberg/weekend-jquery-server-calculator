let operator
let numInputs

$(document).ready(onReady);
console.log('Jquery is Hooked UP!');


//operator click listeners activated
function onReady() {
    $('#plus').on('click', add)
    $('#negative').on('click', subtract)
    $('#multiply').on('click', multiply)
    $('#divide').on('click', divide)
    $('#equalsButton').on('click', gatherValues)
    $('#clearButton').on('click', clearInputs)
    getNumbers();
}
// choose operator functions
function subtract(){ 
    operator = '-'
}
function add(){
    operator = '+';
}
function divide(){ 
    operator = '/';
}
function multiply(){ 
    operator = '*';
}
//gather input values and assign operator
function gatherValues(){
  numInputs =    { 
    numOneInput : $('#firstInput').val(),
    numTwoInput : $('#secondInput').val(),
    operatorInput : operator,
}
  sendNumbers(numInputs)
}
//END input functions

//Clear inputs on button press
function clearInputs() {
    console.log('in clear inputs');
    $('#firstInput').val('');
    $('#secondInput').val('');
}

// // POST request 
function sendNumbers() {
    console.log(numInputs);
    $.ajax({
      method: 'POST', 
      url: '/numbers', 
      data: {numInputs}
    }).then(function(response) {
      console.log('We sent a POST');
      getNumbers(); 
    }).catch(function(response) {
      console.log('Something Bad Happened, POST', response);
    })
  }
  


// get numbers inputted and answers from server
function getNumbers() {
    $.ajax({
      method: 'GET',
      url: '/numbers'
    }).then(function(response) {
      console.log('We Got It!', response);
      // TODO append quotes to DOM
      renderHistory(response);
      renderAnswer(response);
    }).catch(function(response) {
      console.log('Something Bad Happened, GET', response);
    })
  }
    
  function renderHistory(startArray) {
    // empty element before reappending everything before loop
    $('#history').empty();
    for (let i of startArray) {
        $('#history').append(`
        <li>${i.numInputs.numOneInput}${i.numInputs.operatorInput}${i.numInputs.numTwoInput}=${i.result}</li>
      `);
  }
}
//render result to DOM
//empty after for loop
  function renderAnswer(startArray){ 
    for (let i of startArray) {
      $('#answer').empty();
      $('#answer').append(i.result);
}
}
    






















