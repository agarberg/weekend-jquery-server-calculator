const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
// const { post } = require('jquery');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const req = require('express/lib/request');

let startArray = [];
// let answerArray = [];
let numbers = 0;
let addAnswer = 0

app.get('/numbers', function(req, res) {
    console.log('Request for /numbers was made');
    res.send(startArray);
    // res.send(answerArray);
    console.log(startArray);
    // console.log(answerArray);
});

app.get('/numbers', function(req, res) {
    console.log('Request for /numbers was made');
    res.send(startArray);
    // res.send(answerArray);
    console.log(startArray);
    // console.log(answerArray);
});



// POST, receives a new object, adds it to the numbers array
app.post('/numbers', (req,res) => {
    // The data (body) sent from the client is saved for us
    // in `req.body`
    // Note that without bodyParser setup, req.body will be undefined!
    console.log(`GOT a POST request!`, req.body);
    startArray.push( req.body );
    console.log('');
    numbers = req.body;
    doSomeMath(numbers);
    addAnswer = {result : addAnswer}
    startArray.push( addAnswer )
   // Send back a status code of 201
    res.sendStatus(201);
});

function doSomeMath(numbers){
    numbers.numInputs.numOneInput = Number(numbers.numInputs.numOneInput);
    numbers.numInputs.numTwoInput = Number(numbers.numInputs.numTwoInput);
    if (numbers.numInputs.operatorInput === '+') {
        addAnswer = numbers.numInputs.numOneInput+numbers.numInputs.numTwoInput;
        // console.log(addAnswer);
        return addAnswer;
    }
    if (numbers.numInputs.operatorInput === '-') {
        addAnswer = numbers.numInputs.numOneInput - numbers.numInputs.numTwoInput;
        // console.log(addAnswer);
        return addAnswer;
    }
    if (numbers.numInputs.operatorInput === '/') {
        addAnswer = numbers.numInputs.numOneInput / numbers.numInputs.numTwoInput;
        // console.log(addAnswer);
        return addAnswer;
    }
    if (numbers.numInputs.operatorInput === '*') {
        addAnswer = numbers.numInputs.numOneInput * numbers.numInputs.numTwoInput;
        // console.log(addAnswer);
        return addAnswer;
    }
}






app.listen(PORT, () => {
    console.log('listening on port', PORT)
});