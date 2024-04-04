const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    content:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        require: Date.now()
    }
})

module.exports = mongoose.model("Article",articleSchema);