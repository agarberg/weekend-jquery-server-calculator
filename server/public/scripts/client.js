let operator 
let numInputs

$(document).ready(onReady);
console.log('Jquery is Hooked UP!');


//operator click listeners
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
    numOneInput = $('#firstInput').val(),
    numTwoInput=$('#secondInput').val(),
    numInputs = {
      num1Input : numOneInput,
      num2Input : numTwoInput,
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
function sendNumbers(numInputs) {
    console.log(numInputs);
    // use AJAX to make a POST request to server
    $.ajax({
      method: 'POST', // type of request
      url: '/numbers', // route we will match on
      data: numInputs
    }).then(function(response) {
      console.log('We sent a POST');
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
    
  function renderToDom(historyArray) {
    // empty element before reappending everything
    $('#history').empty();
    for (let i of historyArray) {
        $('#history').append(`
        <li>${i.n1i} ${i.op}, ${i.n2i} = ${i.ans} </li>
      `);
    }
  }
  
    






















