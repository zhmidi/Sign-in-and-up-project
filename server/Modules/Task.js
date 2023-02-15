const mongoose = require("mongoose")

const Task = mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    description : {
        type : String,

    },

    posteUrl : {
        type : String,

    },

    rating : {
        type : String,

    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    }


})

const TaskModel = mongoose.model("task", Task)

module.exports = TaskModel