$(document).ready(onReady);
console.log('Jquery is Hooked UP!');

function onReady() {
    $('#plus').on('click',null,'+', gatherInputs)
    $('#negative').on('click',null,'-', gatherInputs)
    $('#multiply').on('click',null,'*', gatherInputs)
    $('#divide').on('click',null],'/', gatherInputs)
    $('#clearButton').on('click', clearInputs)

    function clearInputs() {
        console.log('in clear inputs');
        $('#firstInput').val('');
        $('#secondInput').val('');
    }
    function gatherInputs() {
        $('#equalsButton').on('click', addInputs);{
        console.log('in gather inputs');
        }}

    function addInputs(){
        let numInputs = [{
        operatorInput:'+',
        numOneInput:$('#firstInput').val(),
        numTwoInput:$('#secondInput').val(),
        }]
        console.log(numInputs);
        
    }
        
        
    

    // //POST data from inputs to server
    // $.ajax({
    //     method: 'POST',
    //     url: '/calculator',
    //     data: {
    //     }
    // }).then(function(){
    //     console.log('guesses added successfully');
    //     getGuessList();
    // }).catch(function(response){
    //   console.log('It did not work :(', response);
    // })
    // // getGuessList();
    
    


    






















