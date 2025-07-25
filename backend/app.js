const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const indexRouter = require('./routes/index');
const dotenv = require('dotenv');
dotenv.config();

const mongoURI = process.env.MONGO_DB_PROD; 

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.json({ message: 'Todo App Backend API is running!' });
});

app.use('/api', indexRouter);

console.log("mongoURI", mongoURI);

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error("Error connecting to MongoDB", err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

