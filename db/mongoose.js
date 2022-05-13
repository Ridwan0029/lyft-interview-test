let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connecting to mongoDB Atlas Cluster
const url = process.env.DATABASEURL || 'mongodb://localhost:27017/lyft-interview-test';

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

module.exports = {mongoose}