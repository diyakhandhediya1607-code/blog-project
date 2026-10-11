const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Blog title is required"]
    },
    description:{
        type: String,
        required: [true, "Blog description is required"]
    },
    author:{
        type: String,
    },
    rating:{
        type: Number
    },
    
    
}, {timestamps: true})

module.exports = mongoose.model("Blog", blogSchema)