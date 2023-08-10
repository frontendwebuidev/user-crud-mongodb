const mongoose = require('mongoose');
const db = "mongodb+srv://anilmauryaui:zO4YZuJ9TfIhbJbp@clustermongodb.8h1u7gs.mongodb.net/user_db?retryWrites=true&w=majority"

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log('Mongodb connected successfully!');
})
.catch((err)=>{
    console.log('Mongodb connection error:', err);
})

module.exports = mongoose;