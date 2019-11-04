const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({
    msg: 'Hello World'
}));
//defign rout
app.use('api/users', require('./rout/users'));
app.use('api/auth', require('./rout/auth'));
app.use('api/contacts', require('./rout/contacts'));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on ${port}`));