const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
// const { post } = require('jquery');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const req = require('express/lib/request');

let startArray = [];
let historyArray = [];

app.get('/numbers', function(req, res) {
    console.log('Request for /numbers was made');
    res.send(historyArray);
});

let numbers = 0;
// POST, receives a new object, adds it to the numbers array
app.post('/numbers', (req,res) => {
    // The data (body) sent from the client is saved for us
    // in `req.body`
    // Note that without bodyParser setup, req.body will be undefined!
    console.log(`GOT a POST request!`, req.body);
    startArray.push( req.body );
    numbers = req.body.numInputs;
    


   // Send back a status code of 201
    res.sendStatus(201);
});


function doSomeMath(numbers){
    numbers.num1Input = Number(numbers.num1Input);
    numbers.num2Input = Number(numbers.num2Input);
    if (numbers.operatorInput === '+') {
        addAnswer = numbers.num1Input += numbers.num2Input;
        console.log(addAnswer);
        return addAnswer 
    }
    if (numbers.operatorInput === '-') {
        addAnswer = numbers.num1Input - numbers.num2Input;
        console.log(addAnswer);
        return addAnswer 
        addAnswer 
    }
    if (numbers.operatorInput === '/') {
        addAnswer = numbers.num1Input / numbers.num2Input;
        console.log(addAnswer);
        return addAnswer
    }
    if (numbers.operatorInput === '*') {
        addAnswer = numbers.num1Input * numbers.num2Input;
        console.log(addAnswer);
        return addAnswer
    }
    let completeObject = {
        n1i : numbers.num1Input,
        n2i : numbers.num2Input,
        op : numbers.operatorInput,
        ans : addAnswer,
    }
    historyArray.push(completeObject)
}




function doSomeMath(){
    req.body.numInputs.numOneInput = Number(req.body.numInputs.numOneInput);
    req.body.numInputs.numTwoInput = Number(req.body.numInputs.numTwoInput);
    if (req.body.numInputs.operatorInput === '+') {
        addAnswer = req.body.numInputs.numOneInput+req.body.numInputs.numTwoInput;
        console.log(addAnswer);
        return addAnswer 
    }
    else if (req.body.numInputs.operatorInput === '-') {
        addAnswer = req.body.numInputs.numOneInput - req.body.numInputs.numTwoInput;
        console.log(addAnswer);
        return addAnswer 
    }
    else if (req.body.numInputs.operatorInput === '/') {
        addAnswer = req.body.numInputs.numOneInput / req.body.numInputs.numTwoInput;
        console.log(addAnswer);
        return addAnswer
    }
    else if (req.body.numInputs.operatorInput === '*') {
        addAnswer = req.body.numInputs.numOneInput * req.body.numInputs.numTwoInput;
        console.log(addAnswer);
        return addAnswer
    }
}




app.listen(PORT, () => {
    console.log('listening on port', PORT)
});