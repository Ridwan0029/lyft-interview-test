let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Test}       = require('./models/test');

let app = express();

app.use(bodyParser.json());

app.post('/test', (req, res) => {
    let test = new Test({
        string_to_cut: req.body.string_to_cut
    });

    test.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/test', (req, res) => {
    Test.find().then((tests) => {
        res.send({tests});
    }, (e) =>{
        res.status(400).send(e);
    });
});

app.listen(3000, () =>{
    console.log('Started on port 3000');
});