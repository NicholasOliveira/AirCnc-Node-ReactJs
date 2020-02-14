const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://nicholas:D7g5n5v2@cluster0-6wzdv.mongodb.net/test2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);