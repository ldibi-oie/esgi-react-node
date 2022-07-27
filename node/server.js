const express = require('express')
const app = express()
const port = 8000
var users = require('./routes/users')
const dotenv = require('dotenv');
const path = require('path')
dotenv.config({ path: path.join(__dirname, `/.env`)});
const sequelize = require('./database')
const User = require('./models/users')
const db = require('./config/db')

// var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: ''
// });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use('/users', users);

app.get('/login', (req, res) => {
  res.send('Hello World 2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// sequelize.sync()
// sequelize.sync({force:true})

sequelize.sync();
sequelize.authenticate()
.then(() => {
  
  console.log('Connection has been established successfully local.');
})
.catch(err => {
  console.error('Unable to connect to the database local:', err);
});
