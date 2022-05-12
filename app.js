let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Test}       = require('./models/test');

let app = express();

app.use(bodyParser.json());

app.post('/test', (req, res) => {
    let string_to_cut = req.body.string_to_cut;
    let new_string = ''
    for (let i = 1; i < (string_to_cut.length)/3; i++) {
        let j = (i*3) - 1;
        new_string += string_to_cut[j]
    }
    let test = new Test({
        return_string: new_string
    });

    test.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () =>{
    console.log('Started on port 3000');
});