const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
// const { post } = require('jquery');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const req = require('express/lib/request');

app.get('/numbers', function(req, res) {
    console.log('Request for /numbers was made');
    res.send(inputArray);
});

let inputArray = [];

// POST, receives a new object, adds it to the numbers array
app.post('/numbers', (req,res) => {
    // The data (body) sent from the client is saved for us
    // in `req.body`
    // Note that without bodyParser setup, req.body will be undefined!
    console.log(`Get a POST request!`, req.body);

    // Grab the new inventory from the request body
    // let numbers = req.body.numInputs;
    doSomeMath();
    console.log(req.body.numInputs);
   // Send back a status code of 201
    res.sendStatus(201);
});


let addAnswer = 0;

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
let addAnswerObj = {
    equals : addAnswer,
}
inputArray.push(addAnswerObj)
console.log(inputArray);



app.listen(PORT, () => {
    console.log('listening on port', PORT)
});