
const mongoose=require('mongoose');
const mongoConnect=require('./db');
const cors = require('cors');
const express = require('express')
const app = express()
const session = require('express-session');

mongoConnect();

app.use(session({
  secret: 'Ashim$gi',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 },
}));

const port = 8080
app.use(cors());
app.use(express.json());



app.use('/api/auth',require('./Routes/Auth'));
app.use('/api/note',require('./Routes/Note'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



















