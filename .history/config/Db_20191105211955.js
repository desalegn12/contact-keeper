const mongoose = require('mongoose');

const config = require('config');
const db = dotenv.config.get('mongoURI');
const connectDb = () => {
    mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false


        })
        .then(() => console.log('mongoDB connected'))
        .catch(err => {
            console.log(err.message);
            process.exit(1);

        });
}
module.exports = connectDb;