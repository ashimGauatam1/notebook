
const mongoose=require('mongoose');
const mongoConnect=require('./db');
const cors = require('cors');

mongoConnect();
const express = require('express')
const app = express()
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



















