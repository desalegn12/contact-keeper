const mongoose = require('mongoose');

const config = require('configg');
const db = config.get('mongoURI');
const connectDb = () => {
    mongoose
        .connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        .then(() => console.log('mongoDB connected'))
        .catch(err => {
            console.log(err.message);
            process.exit(1);
        });
};
module.exports = connectDb;