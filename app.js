const express = require('express');
const bp = require('body-parser');

const app = express();
app.use(bp.json());

const PORT = process.env.PORT || 4000;

// imports modules
const db = require('./config/db');
const userRoutes = require('./controllers/user_controllers');

app.use('/user_list', userRoutes);



app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})