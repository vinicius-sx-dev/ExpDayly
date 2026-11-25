const express = require('express');
const cors = require('cors');

const { check } = require('./middlewares/middlewareTest')

const corsOptions = {
  origin: [
    'http://localhost:5173'
  ]
}

const userRoutes = require('./routes/userRoutes');
const healthRoute = require('./routes/healthRoute');


const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/health', check, healthRoute);


app.use('/user', userRoutes);


module.exports = app;
