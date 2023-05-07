const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/task-routes');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const URL = 'mongodb+srv://1sak0v:qwerty123@cluster0.a115qu9.mongodb.net/tasksbox?retryWrites=true&w=majority';

const app = express();
app.use(cors());
app.use(express.json());
app.use(taskRoutes);

mongoose
  .connect(URL , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
