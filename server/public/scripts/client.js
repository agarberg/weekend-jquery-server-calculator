$(document).ready(onReady);
console.log('Jquery is Hooked UP!');

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
    let numInputs = [{
    numOneInput:$('#firstInput').val(),
    numTwoInput:$('#secondInput').val(),
    operator: '-',

    }]
    
}    

function addInputs(){
    console.log('in add');
    $('#equalsButton').on('click', add)
}

function add(){
    console.log('in add');
    let numInputs = [{
    numOneInput:$('#firstInput').val(),
    numTwoInput:$('#secondInput').val(),
    operator: '+',
    }]
    console.log(numInputs);
}
function multiplyInputs(){
    console.log('in multiply');
    $('#equalsButton').on('click',multiply)
}
function multiply(){ 
    let numInputs = [{
    numOneInput:$('#firstInput').val(),
    numTwoInput:$('#secondInput').val(),
    operator: '*'
    }]
    console.log(numInputs);
}
    
function divideInputs(){
    console.log('in divide');
    $('#equalsButton').on('click')
}
function divide(){ 
    let numInputs = [{
    numOneInput:$('#firstInput').val(),
    numTwoInput:$('#secondInput').val(),
    operator: '/'
    }]
    console.log(numInputs);
}    
// END input functions

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
    


    






















