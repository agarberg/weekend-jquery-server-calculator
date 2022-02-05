let operator 
let numInputs

$(document).ready(onReady);
console.log('Jquery is Hooked UP!');


//operator click listeners
function onReady() {
    $('#plus').on('click', addInputs)
    $('#negative').on('click', subtractInputs)
    $('#multiply').on('click', multiplyInputs)
    $('#divide').on('click', divideInputs)
    $('#clearButton').on('click', clearInputs)
}

//Clear inputs on button press
function clearInputs() {
    console.log('in clear inputs');
    $('#firstInput').val('');
    $('#secondInput').val('');
}

// start input functions
function subtractInputs(){
    console.log('in Subtract');
    $('#equalsButton').on('click', subtract);
}
function subtract(){ 
    operator = '-'
    numInputs = {
    numOneInput:$('#firstInput').val(),
    numTwoInput:$('#secondInput').val(),
    operatorInput: operator
    }
    sendNumbers (numInputs);
}    

function addInputs(){
    console.log('in add');
    $('#equalsButton').on('click', add)
}

function add(){
    console.log('in add');
    operator = '+';
    numInputs = {
    numOneInput:$('#firstInput').val(),
    numTwoInput:$('#secondInput').val(),
    operatorInput: operator
    }
    sendNumbers(numInputs);
}
function multiplyInputs(){
    console.log('in multiply');
    $('#equalsButton').on('click',multiply)
}
function multiply(){ 
    operator = '*';
    numInputs = {
    numOneInput:$('#firstInput').val(),
    numTwoInput:$('#secondInput').val(),
    operatorInput: operator
    }
    sendNumbers (numInputs);
}
    
function divideInputs(){
    console.log('in divide');
    $('#equalsButton').on('click',divide)
}
function divide(){ 
    operator = '/';
    numInputs = {
    numOneInput:$('#firstInput').val(),
    numTwoInput:$('#secondInput').val(),
    operatorInput: operator
    }
    sendNumbers (numInputs);
}    



// END input functions

// // POST request 
function sendNumbers(numInputs) {
    console.log(numInputs);
    // use AJAX to make a POST request to server
    $.ajax({
      method: 'POST', // type of request
      url: '/numbers', // route we will match on
      data: { // must be an object
          numInputs
      }
    }).then(function(response) {
      console.log('We Posted!');
      getNumbers(); 
    }).catch(function(response) {
      console.log('Something Bad Happened, POST', response);
    })
  }
  


// GET request from server using AJAX
function getNumbers() {
    // get numbersInputted from server using AJAX
    $.ajax({
      method: 'GET',
      url: '/numbers'
    }).then(function(response) {
      console.log('We Got It!', response);
      // TODO append quotes to DOM
      renderToDom(response);
    }).catch(function(response) {
      console.log('Something Bad Happened, GET', response);
    })
  }
    
  function renderToDom(inputArray) {
    // empty element before reappending everything
    $('#history').empty();
    for (let i of inputArray) {
      $('#history').append(`
       <li>${i.numOneInput} ${i.operatorInput} ${i.numTwoInput} = </li>
      `);
    }
  }
  
    






















