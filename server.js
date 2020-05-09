const express = require('express');
const connectDB = require('./config/db')


const app = express();

// Connect to DB
connectDB();

// init body Middleware

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send({ msg: 'Welcome to the JobKeeper API...'}))

// Define Routes

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/jobsList', require('./routes/jobsList'))



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))