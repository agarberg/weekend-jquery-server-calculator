const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
const { post } = require('jquery');
app.use(bodyParser.urlencoded({extended:true}));











app.listen(PORT, () => {
    console.log('listening on port', PORT)
});