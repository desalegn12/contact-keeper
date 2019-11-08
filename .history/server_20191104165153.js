const express = require('express');
const app = express();
const connectDb = require('./config/Db');
//connect the database 
connectDb();
app.get('/', (req, res) => res.json({
    msg: 'Hello World'
}));
//defign rout
app.use('/api/users', require('./rout/User'));
app.use('/api/auth', require('./rout/Auth'));
app.use('/api/contacts', require('./rout/Contact'));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on ${port}`));