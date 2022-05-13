require('dotenv').config();
const port = process.env.PORT || 3000

let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Test}       = require('./models/test');

let app = express();

app.use(bodyParser.json());

app.post('/test', (req, res) => {
    let string_to_cut = req.body.string_to_cut;
    let new_string = '';
    for (let i = 1; i < (string_to_cut.length/3)+1; i++) {
        let j = (i*3) - 1;
        if( j < string_to_cut.length ){
            new_string += string_to_cut[j];
        }
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

app.listen(port, () =>{
    console.log(`server have started at port ${port}`);
});