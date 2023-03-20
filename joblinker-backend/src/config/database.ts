// mongoose connection
const mongoose = require('mongoose');
require('dotenv').config();

const db = 
    mongoose.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xjkaavs.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
    ).then(() => {
        console.log('Connected to Mongo Atlas!')
    })
    .catch((err: string) => console.log(err));
    

module.exports = db
export {}