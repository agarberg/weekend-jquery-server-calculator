const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const req = require('express/lib/request');
//init global variables 
let startArray = [];
let numbers = 0;
let addAnswer = 0
//
app.get('/numbers', function(req, res) {
    console.log('Request for /numbers was made');
    res.send(startArray);
    console.log(startArray);
});

// POST recieves inputs, sends to doSomeMath function and sends to array after
app.post('/numbers', (req,res) => {
    console.log(`GOT a POST request!`, req.body);
    startArray.push( req.body );
    console.log('');
    numbers = req.body;
    doSomeMath(numbers);
    //send addAnswer to last spot in startArray
    startArray[startArray.length-1]["result"]=addAnswer;
    res.sendStatus(201);
});
//doing math based on operator input
function doSomeMath(numbers){
    numbers.numInputs.numOneInput = Number(numbers.numInputs.numOneInput);
    numbers.numInputs.numTwoInput = Number(numbers.numInputs.numTwoInput);
    if (numbers.numInputs.operatorInput === '+') {
        addAnswer = numbers.numInputs.numOneInput+numbers.numInputs.numTwoInput;
        return addAnswer;
    }
    if (numbers.numInputs.operatorInput === '-') {
        addAnswer = numbers.numInputs.numOneInput - numbers.numInputs.numTwoInput;
        return addAnswer;
    }
    if (numbers.numInputs.operatorInput === '/') {
        addAnswer = numbers.numInputs.numOneInput / numbers.numInputs.numTwoInput;
        return addAnswer;
    }
    if (numbers.numInputs.operatorInput === '*') {
        addAnswer = numbers.numInputs.numOneInput * numbers.numInputs.numTwoInput;
        return addAnswer;
    }
}


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});