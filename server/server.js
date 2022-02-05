const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
// const { post } = require('jquery');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const inputArray = require('./modules/numbersInputted');
const req = require('express/lib/request');

app.get('/numbers', function(req, res) {
    console.log('Request for /numbers was made');
    res.send(inputArray);
});


// POST, receives a new object, adds it to the numbers array
app.post('/numbers', (req,res) => {
    // The data (body) sent from the client is saved for us
    // in `req.body`
    // Note that without bodyParser setup, req.body will be undefined!
    console.log(`Get a POST request!`, req.body);

    // Grab the new inventory from the request body
    let numbers = req.body.numInputs;
    doSomeMath(numbers);
    console.log(req.body.numInputs);
    // Push the inventory into our array
    inputArray.push(numbers);

   // Send back a status code of 201
    res.sendStatus(201);
});
let addAnswer = 
let req.body.numInputs.numOneInput = n1;
let req.body.numInputs.numTwoInput = n2;
function doSomeMath(){
    if (req.body.numInputs.operator === '+') {
        addAnswer = n1+n2
        return addAnswer
    }
    else if (req.body.numInputs.operator === '-') {
        addAnswer = n1-n2
        return addAnswer
    }
    else if (req.body.numInputs.operator === '/') {
        addAnswer = n1/n2
        return addAnswer
    }
    else if (req.body.numInputs.operator === '*') {
        addAnswer = n1*n2
        return addAnswer
    }
}




app.listen(PORT, () => {
    console.log('listening on port', PORT)
});